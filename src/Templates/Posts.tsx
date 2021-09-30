import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components'
import 'twin.macro'

const Posts = ({ children, pageContext }) => {
  return (
    <Layout>
      {children}
      <pre tw="whitespace-pre-wrap">{JSON.stringify(pageContext, null, 2)}</pre>
    </Layout>
  )
}

export default Posts
