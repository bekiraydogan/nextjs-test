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
        <h3 className="title">
          Bekir Aydoğan 💻
        </h3>
        <p>🏛️ Sakarya Üniversitesi Bilgisayar Mühendisliğinden mezun oldum.</p>
        <p>İstanbul'da .Net Developer olarak çalışmaktayım.</p>
        <p>📷 Fotoğraf çekmeye, 🌳 doğaya, 🎧 müziğe, 📖 şiire aşığım.</p>
      </main>

      <footer className="footer">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by Bekir AYDOĞAN © 2022 All rights reserved.
        </a>
      </footer>
    </div>
  )
}
