import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { date, from_currency, to_currency } = req.query;

    if (!date || !from_currency || !to_currency) {
        return res.status(400).json({ error: 'Missing required query parameters: date, from_currency, to_currency' });
    }

    // Path to the static file in your local filesystem
    const filePath = path.join(process.cwd(), 'public', 'data', date.replace(/-/g, '/'), 'currencies', `${from_currency}.json`);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'Data not found for the given date and currency.' });
    }

    // Read the data from the file
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Check if the exchange rate for the 'to_currency' exists
    if (!data['exchange-rates'][to_currency]) {
        return res.status(404).json({ error: `Exchange rate not found for the currency: ${to_currency}` });
    }

    // Send the data as a response
    res.status(200).json({
        date: data.date,
        from: from_currency,
        to: to_currency,
        rate: data['exchange-rates'][to_currency]
    });
}
