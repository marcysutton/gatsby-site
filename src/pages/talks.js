import React from 'react'
import { graphql } from 'gatsby'
import BodyClassName from 'react-body-classname'
import ReactHtmlParser from 'react-html-parser'

import Layout from '../components/layout'
import SEO from '../components/seo'

const TalksPage = ({ data }) => (
    <BodyClassName className="generic">
        <Layout>
            <SEO title="Talks" keywords={['Marcy Sutton', 'talks', 'videos', 'web developer']} />
            <section className="generic-wrap talks-wrap">
                <h1>Talks</h1>
                {
                    data.allWordpressPage.edges.map((pages) => {
                        if ( pages.node.slug === 'talks' ) {
                            return ReactHtmlParser(pages.node.content)
                        }
                        return ''
                    })
                }
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

export default TalksPage