const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/:date/:from_currency/:to_currency', (req, res) => {
    const { date, from_currency, to_currency } = req.params;
    const filePath = path.join(__dirname, `../../../data/${date.replace(/-/g, '/')}/currencies/${from_currency}.json`);

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'Data not found for the given date and currency.' });
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    if (!data['exchange-rates'][to_currency]) {
        return res.status(404).json({ error: `Exchange rate not found for the currency: ${to_currency}` });
    }

    res.json({
        date: data.date,
        from: from_currency,
        to: to_currency,
        rate: data['exchange-rates'][to_currency]
    });
});

module.exports = app;
