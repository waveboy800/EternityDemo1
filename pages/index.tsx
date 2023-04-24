import type { NextPage } from 'next'
import Head from 'next/head'
import TopNavBar from './components/TopNavBar'
import Banner from './components/Banner'
import Advantage from './components/Advantage'
import RoadMap from './components/RoadMap'
import Partner from './components/Partner'
import Community from './components/Community'
import Contact from './components/Contact'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eternity.AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div>
          <div
            className=""
            style={{
              backgroundImage: "url('/images/background.png')",
              height: '100vh',
              width: '100%',
              backgroundSize: 'cover',
            }}
          >
            <TopNavBar />

            <Banner />
          </div>
          <Advantage />

          <RoadMap />

          <Partner />

          <Community />

          {/* <Contact /> */}
        </div>
      </main>
    </div>
  )
}

export default Home
