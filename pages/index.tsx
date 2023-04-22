import type { NextPage } from 'next'
import Head from 'next/head'
import TopNavBar from './components/TopNavBar'
import Banner from './components/Banner'

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
            className="fex items-center justify-center"
            style={{
              backgroundImage: "url('/images/background.png')",
              height: '100vh',
              width: '100%',
              backgroundSize: 'cover',
            }}
          >
            <div >
              <TopNavBar  />
            </div>
            <div >
              <Banner />
            </div>
          </div>
          <div
            className="fex items-center justify-center"
            style={{
              backgroundImage: "url('/images/background.png')",
              height: '100vh',
              width: '100%',
              backgroundSize: 'cover',
            }}
          >
            <div>
              <TopNavBar />
              {/* 其他组件 */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
