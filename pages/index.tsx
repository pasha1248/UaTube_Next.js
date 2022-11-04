/** @format */

import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/layout/pages/home/Home'

export default function HomePage() {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Home />
      </main>
    </div>
  )
}
