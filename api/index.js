const express = require('express');
const rateLimit = require('express-rate-limit');
const throttle = require('express-throttle');
const apicache = require('apicache');
const helmet = require('helmet');

const app = express();

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
    res.json({
        message: 'Welcome to the Currency API! Use this API to get exchange rates between different currencies.',
        usage: {
            single_currency: '/api/{date}/{from_currency}/',
            currency_conversion: '/api/{date}/{from_currency}/{to_currency}/'
        },
        example: {
            single_currency: '/api/2023-07-22/aed/',
            currency_conversion: '/api/2023-07-22/aed/inr/'
        }
    });
});

module.exports = app;
