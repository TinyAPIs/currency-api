import Head from 'next/head'
import styles from './Home.module.css'
import { useState } from 'react';

export default function Home() {
    const [date, setDate] = useState('');
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            const response = await fetch(`/api?date=${date}&from_currency=${fromCurrency}&to_currency=${toCurrency}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            setResult(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Currency Conversion API</title>
                <meta name="description" content="Currency Conversion API by TinyAPIs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to Currency Conversion API
                </h1>

                <p className={styles.description}>
                    Use this API to get exchange rates between different currencies.
                </p>

                <p className={styles.description}>
                    Get the latest exchange rates
                </p>

                <div className={styles.grid}>
                    <form onSubmit={handleSubmit} className={styles.card}>
                        <h2>Convert Currency</h2>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                        <input type="text" placeholder="From Currency" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} required />
                        <input type="text" placeholder="To Currency" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} required />
                        <button type="submit">Submit</button>

                        {result && (
                            <div>
                                <h3>Result:</h3>
                                <pre>{JSON.stringify(result, null, 2)}</pre>
                            </div>
                        )}

                        {error && (
                            <div>
                                <h3>Error:</h3>
                                <p>{error}</p>
                            </div>
                        )}
                    </form>

                    <a href="/api?date=2023-07-22&from_currency=aed&to_currency=inr" className={styles.card}>
                        <h2>Example 1 &rarr;</h2>
                        <p>Find the exchange rate from AED to INR on 2023-07-22.</p>
                    </a>

                    <a href="/api?date=2023-07-22&from_currency=usd&to_currency=eur" className={styles.card}>
                        <h2>Example 2 &rarr;</h2>
                        <p>Find the exchange rate from USD to EUR on 2023-07-22.</p>
                    </a>

                    <a href="/api?date=2023-07-22&from_currency=gbp&to_currency=jpy" className={styles.card}>
                        <h2>Example 3 &rarr;</h2>
                        <p>Find the exchange rate from GBP to JPY on 2023-07-22.</p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://github.com/TinyAPIs/currency-api"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            TinyAPIs
          </span>
                </a>
            </footer>
        </div>
    )
}
