import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/header/header"
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero"
import styles from '../styles/Home.module.css'
import Cards from "../components/hero/cards";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Promitia - Industry news and articles I Promitia Blog</title>
        <meta name="description" content="Blog of Moove-it, a software consulting company that develops and implements
         software solutions for organizations" />
        <link rel="icon" href="/promitia_favicon.ico" />
      </Head>

      <Header/> 
           
      <Hero/>
      <main className={styles.main}>
        <Cards/>
      </main>
      
      <Footer/>

    </div>
  )
}

export default Home
