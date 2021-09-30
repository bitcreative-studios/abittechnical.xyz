import * as React from 'react'
import { Hero, Layout, Seo } from '../components'
import 'twin.macro'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
