import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bekir AYDOGAN</title>
        <meta name="description" content="Bekir Aydogan Personal Web Site" />
        <link rel="icon" href="/nextjs-test/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          <b>Bekir AYDOĞAN 👋</b>
        </h1>
      </main>

      <footer className="footer">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by as66
        </a>
      </footer>
    </div>
  )
}
