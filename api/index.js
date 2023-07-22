module.exports = (req, res) => {
    // Set some security-related headers
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');


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
};
