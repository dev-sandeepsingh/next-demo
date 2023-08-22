import Head from 'next/head'
import SideNavBar from './components/sideNavBar'

export default function Home() {
  return (
      <div>
        <Head>
            <title>Next demo</title>
        </Head>
          <SideNavBar/>
      </div>
  )
}
