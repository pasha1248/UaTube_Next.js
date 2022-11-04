/** @format */

import React, { FC } from 'react'
import Layout from '../../Layout'
import Catalog from './catalog/Catalog'
import Discover from './discover/Discover'

type Props = {}

const Home = (props: Props) => {
  return (
    <Layout title='Home Page'>
      <Discover />
      <Catalog />
    </Layout>
  )
}

export default Home
