import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const TalksPage = ({ data }) => (
    <Layout>
        <SEO title="Talks" keywords={['Marcy Sutton', 'talks', 'videos', 'web developer']} />
        <h1>Talks</h1>
        {
            data.allWordpressPage.edges.map((pages) => {
                if ( pages.node.slug === 'talks' ) {
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

export default TalksPage