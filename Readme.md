# Currency API

This repository hosts the open-source version of the [Currency Conversion API](https://www.tinyapi.co/service/currency-conversion-api) provided by [TinyAPI](https://www.tinyapi.co/). The API provides daily exchange rates for a variety of currencies.

## Supported Currencies

We support a wide range of both fiat and cryptocurrency. Here's a list of all supported currencies:

### Fiat Currencies

- United States Dollar (USD)
- Euro (EUR)
- Japanese Yen (JPY)
- British Pound (GBP)
- Australian Dollar (AUD)
- Canadian Dollar (CAD)
- Swiss Franc (CHF)
- Chinese Yuan (CNY)
- Swedish Krona (SEK)
- New Zealand Dollar (NZD)
- ... and [40 more](https://github.com/TinyAPIs/currency-api/blob/main/data/currencies.json)

Please refer to the [currencies.json](https://github.com/TinyAPIs/currency-api/blob/main/data/currencies.json) file for the complete list of supported currencies.

## Accessing the Data via API

You can access the data via the following endpoint:

`https://currency-api.tinyapi.co/api?date={YYYY-MM-DD}&from_currency={from_currency}&to_currency={to_currency}`

This endpoint returns the exchange rate from one currency to another for a specific date. If no date is provided, it returns the rate for the current date.

For example:

- To get the exchange rate from AED to INR for the date 2023-07-22, use the following URL: [https://currency-api.tinyapi.co/api?date=2023-07-22&from_currency=aed&to_currency=inr](https://currency-api.tinyapi.co/api?date=2023-07-22&from_currency=aed&to_currency=inr)

Please refer to the `currencies.json` file for the complete list of supported currencies.

## Rate Limits and Caching

To prevent abuse and ensure fair usage, we have implemented rate limiting and caching on our API. Each IP address is limited to 100 requests every 15 minutes. We also use caching to improve response times and reduce server load. The data is cached for 5 minutes, so subsequent requests for the same data within this period will be served faster.

## Paid Version

For commercial use cases or if you need higher limits, a paid version of this API is available via [TinyAPI](https://www.tinyapi.co/service/currency-conversion-api). The paid version offers higher rate limits and priority support.

## Acknowledgements

This repository is inspired by the work of [fawazahmed0](https://github.com/fawazahmed0) and his [currency-api](https://github.com/fawazahmed0/currency-api) project. We would like to express our gratitude for his contribution to the open-source community.

### Why This Repository?

The original repository contains a vast amount of data, with each currency having its own directory and multiple JSON files for different dates. This structure, while comprehensive, can be challenging to navigate and use.

In this repository, we have restructured the data to make it more accessible and user-friendly. We have consolidated the exchange rates for each currency into a single JSON file per date, making it easier to fetch the data for a specific date.

## Contributing

We welcome contributions to this project. Please feel free to submit a pull request or open an issue if you find any bugs or have any suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
