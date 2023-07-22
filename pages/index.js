import Head from 'next/head'

export default function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Head>
                <title>Currency Conversion API</title>
                <meta name="description" content="Currency Conversion API" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>
                    CURRENCY CONVERSION API
                </h1>
                <p style={{ marginTop: '1rem', fontSize: '1.25rem', textAlign: 'center' }}>
                    Use this API to get exchange rates between different currencies.
                </p>
                <section style={{ marginTop: '2rem', fontSize: '1.25rem', textAlign: 'center' }}>
                    <h2>APIs Available:</h2>
                    <ul>
                        <li>
                            <code>/api/?date={ '{date}' }&from_currency={ '{from_currency}' }&to_currency={ '{to_currency}' }</code> - Get the exchange rate from one currency to another for a specific date.
                        </li>
                        <li>
                            <code>/api/?date={ '{date}' }&from_currency={ '{from_currency}' }</code> - Get the exchange rates from one currency to all other currencies for a specific date.
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    )
}
