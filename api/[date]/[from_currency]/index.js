const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/:date/:from_currency', (req, res) => {
    const { date, from_currency } = req.params;
    const filePath = path.join(__dirname, `../../data/${date.replace(/-/g, '/')}/currencies/${from_currency}.json`);

    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'Data not found for the given date and currency.' });
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    res.json({
        date: data.date,
        from: from_currency,
        rates: data['exchange-rates']
    });
});

module.exports = app;
