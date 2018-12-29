import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = ({ data }) => (
    <Layout>
        <SEO title="About" keywords={['Marcy Sutton', 'bio', 'web developer']} />
        <h1>About Marcy Sutton</h1>
        {
            data.allWordpressPage.edges.map((pages) => {
                if ( pages.node.slug === 'about' ) {
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

export default AboutPage;