module.exports = (req, res) => {
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
