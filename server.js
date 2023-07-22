const express = require('express');
const fs = require('fs');
const path = require('path');
const rateLimit = require('express-rate-limit');
const throttle = require('express-throttle');
const apicache = require('apicache');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 3000;

// Apply rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Apply throttling
app.use(throttle({
    "rate": "50/s",      // how many requests per some time period
    "burst": 10,        // max number of requests at a time
    "ip": true          // throttle per IP
}));

// Apply caching
let cache = apicache.middleware;
app.use(cache('5 minutes'));

// Apply security measures
app.use(helmet());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/:date/:from_currency/:to_currency', (req, res) => {
    const { date, from_currency, to_currency } = req.params;
    const filePath = path.join(__dirname, `./data/${date.replace(/-/g, '/')}/currencies/${from_currency}.json`);

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

app.get('/:date/:from_currency', (req, res) => {
    const { date, from_currency } = req.params;
    const filePath = path.join(__dirname, `./data/${date.replace(/-/g, '/')}/currencies/${from_currency}.json`);

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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
