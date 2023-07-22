const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    const { date = new Date().toISOString().split('T')[0], from, to } = req.query;

    // Construct the path to the JSON file
    const filePath = path.join(
        __dirname,
        '..',
        'data',
        ...date.split('-'),
        'currencies',
        `${from}.json`
    );

    try {
        // Read the JSON file
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        // Find the exchange rate
        const rate = data['exchange-rates'][to];

        if (!rate) {
            res.status(404).send({ error: `No exchange rate found from ${from} to ${to} on ${date}` });
            return;
        }

        // Send the response
        res.status(200).send({ date, from, to, rate });
    } catch (error) {
        res.status(500).send({ error: `Could not retrieve exchange rate: ${error.message}` });
    }
};
