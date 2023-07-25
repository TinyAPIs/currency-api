const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Base URL of the raw content in the source repository
const base_url = process.env.BASE_URL;

// Base path to the destination directory in your local repository
const base_dest_path = path.join(__dirname, '../public/data/');

// List of selected currencies
const selected_currencies = require('public/data/currencies.json');

async function fetch_data(date, currency, other_currency) {
    // URL of the JSON file in the source repository
    const file_url = `${base_url}${date}/currencies/${currency}/${other_currency}.json`;

    // Fetch the JSON data from the file
    const response = await axios.get(file_url);
    if (response.status !== 200) {
        console.log(`No data for ${date} ${currency} ${other_currency}`);
        return null;
    }

    const data = response.data;
    // Remove the 'date' field from the data
    if (data.date) {
        delete data.date;
    }

    console.log(`Successfully fetched data for ${date} ${currency} ${other_currency}`);
    return data;
}

async function updateCurrencyData() {
    // Today's date
    const date = new Date().toISOString().split('T')[0];

    for (const currency of selected_currencies) {
        // Path to the destination file in your local repository
        const dest_path = path.join(base_dest_path, date.replace(/-/g, "/"), 'currencies', `${currency}.json`);

        // Check if the data for this date already exists in your local repository
        if (fs.existsSync(dest_path)) {
            console.log(`Data for ${date} ${currency} already exists, skipping...`);
            continue;
        }

        // Initialize the consolidated data
        const consolidated_data = {
            date: date,
            'exchange-rates': {}
        };

        // Fetch the JSON data from each file and consolidate it
        for (const other_currency of selected_currencies) {
            const data = await fetch_data(date, currency, other_currency);
            if (data !== null) {
                // Add the exchange rate to the consolidated data
                consolidated_data['exchange-rates'] = {...consolidated_data['exchange-rates'], ...data};
            }
        }

        // Save the consolidated data to your local repository
        fs.mkdirSync(path.dirname(dest_path), { recursive: true });
        fs.writeFileSync(dest_path, JSON.stringify(consolidated_data, null, 2));

        console.log(`Successfully saved data to ${dest_path}`);
    }
}

updateCurrencyData();
