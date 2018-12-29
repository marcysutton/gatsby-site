import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const WritingPage = ({ data }) => (
    <Layout>
        <SEO title="Writing" keywords={['Marcy Sutton', 'posts', 'writing', 'blog', 'web developer']} />
        <h1>Writing</h1>
        {
            data.allWordpressPage.edges.map((pages) => {
                if ( pages.node.slug === 'posts' ) {
                    return <div
                        key={pages.node.id}
                        dangerouslySetInnerHTML={{ __html: pages.node.content }}
                    ></div>
                }
                return ''
            })
        }
        <Link to="/">Go home</Link>
    </Layout>
)

export const query = graphql`
  query {
    allWordpressPage {
        edges {
          node {
            id
            slug
            content
          }
        }
      }
  }
`

export default WritingPage