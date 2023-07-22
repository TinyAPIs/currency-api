# Currency API

This repository hosts the open-source version of the [Currency Conversion API](https://www.tinyapi.co/service/currency-conversion-api) provided by [TinyAPI](https://www.tinyapi.co/). The API provides daily exchange rates for a variety of currencies.

## Why This Repository?

The original repository contains a vast amount of data, with each currency having its own directory and multiple JSON files for different dates. This structure, while comprehensive, can be challenging to navigate and use.

In this repository, we have restructured the data to make it more accessible and user-friendly. We have consolidated the exchange rates for each currency into a single JSON file per date, making it easier to fetch the data for a specific date.

## Accessing the Data via API

You can access the data via the following endpoints:

- `/date(YYYY-MM-DD)/from_currency/to_currency/`: This endpoint returns the exchange rate from one currency to another for a specific date. If no date is provided, it returns the rate for the current date.

- `/date(YYYY-MM-DD)/from_currency/`: This endpoint returns the exchange rates from one currency to all other currencies for a specific date. If no date is provided, it returns the rates for the current date.

## Rate Limits and Caching

To prevent abuse and ensure fair usage, we have implemented rate limiting and caching on our API. Each IP address is limited to 100 requests every 15 minutes. We also use caching to improve response times and reduce server load. The data is cached for 5 minutes, so subsequent requests for the same data within this period will be served faster.

## Paid Version

For commercial use cases or if you need higher limits, a paid version of this API is available via [TinyAPI](https://www.tinyapi.co/service/currency-conversion-api). The paid version offers higher rate limits and priority support.

## Acknowledgements

This repository is inspired by the work of [fawazahmed0](https://github.com/fawazahmed0) and his [currency-api](https://github.com/fawazahmed0/currency-api) project. We would like to express our gratitude for his contribution to the open-source community.

## Contributing

We welcome contributions to this project. Please feel free to submit a pull request or open an issue if you find any bugs or have any suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
