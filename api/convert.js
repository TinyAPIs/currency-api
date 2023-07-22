const axios = require('axios');

module.exports = async (req, res) => {
    const { date, from_currency, to_currency } = req.query;

    // URL of the static file in your Vercel deployment
    const fileUrl = `https://currency-api.tinyapi.co/data/${date.replace(/-/g, '/')}/currencies/${from_currency}.json`;

    // Fetch the data from the static file via an HTTP request
    axios.get(fileUrl)
        .then(response => {
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
        })
        .catch(error => {
            console.error(error);
            return res.status(500).json({ error: 'An error occurred while fetching the data.' });
        });
};
