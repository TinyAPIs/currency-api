import Head from 'next/head'
import styles from './Home.module.css'

export default function Home() {
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

                <div className={styles.grid}>
                    <a href="https://currency-api.tinyapi.co/api?date=2023-07-22&from_currency=aed&to_currency=inr" className={styles.card}>
                        <h2>Example 1 &rarr;</h2>
                        <p>Find the exchange rate from AED to INR for the date 2023-07-22.</p>
                    </a>

                    <a href="https://currency-api.tinyapi.co/api?date=2023-07-22&from_currency=usd&to_currency=eur" className={styles.card}>
                        <h2>Example 2 &rarr;</h2>
                        <p>Find the exchange rate from USD to EUR for the date 2023-07-22.</p>
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
