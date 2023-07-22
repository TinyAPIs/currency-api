const axios = require('axios');

module.exports = async (req, res) => {
    const { date, from_currency, to_currency } = req.query;

    // URL of the static file in your Vercel deployment
    const fileUrl = `https://currency-api.tinyapi.co/data/${date.replace(/-/g, '/')}/currencies/${from_currency}.json`;

    try {
        // Fetch the data from the static file via an HTTP request
        const response = await axios.get(fileUrl);
        const data = response.data;

        if (!data['exchange-rates'][to_currency]) {
            return res.status(404).json({ error: `Exchange rate not found for the currency: ${to_currency}` });
        }

        res.json({
            date: data.date,
            from: from_currency,
            to: to_currency,
            rate: data['exchange-rates'][to_currency]
        });
    } catch (error) {
        return res.status(404).json({ error: 'Data not found for the given date and currency.' });
    }
};
