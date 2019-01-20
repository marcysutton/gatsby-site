import React from 'react'
import { Link, graphql } from 'gatsby'
import BodyClassName from 'react-body-classname'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AccessibilityPage = ({ data }) => (
    <BodyClassName className="generic">
        <Layout>
            <SEO title="Accessibility" keywords={['Marcy Sutton', 'Accessibility', 'web developer']} />
            <section className="generic-wrap">
                <h1>Accessibility</h1>
                {
                    data.allWordpressPage.edges.map((pages) => {
                        if ( pages.node.slug === 'accessibility' ) {
                            return <div
                                key={pages.node.id}
                                dangerouslySetInnerHTML={{ __html: pages.node.content }}
                            ></div>
                        }
                        return ''
                    })
                }
                <Link to="/">Go home</Link>
            </section>
        </Layout>
    </BodyClassName>
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

export default AccessibilityPage