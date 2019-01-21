import React from 'react'
import { graphql } from 'gatsby'
import BodyClassName from 'react-body-classname'

import Layout from '../components/layout'
import MediaGrid from '../components/media-grid'
import SEO from '../components/seo'

const TalksPage = ({
    data: {
        allWordpressWpTalk: { edges }
    }
}) => (
    <BodyClassName className="generic">
        <Layout>
            <SEO title="Talks" keywords={['Marcy Sutton', 'talks', 'videos', 'web developer']} />
            <section className="generic-wrap talks-wrap">
                <h1>Talks</h1>
                <p>I love public speaking! Here are the recorded talks I’ve done so far.</p>
                <MediaGrid 
                    className="media-grid-talks no-background"
                    items={ edges }
                    itemLabel="talks" />
            </section>
        </Layout>
    </BodyClassName>
)

export const query = graphql`
  query {
    allWordpressWpTalk {
        edges {
          node {
            id
            slug
            title
            excerpt
            content
          }
        }
      }
  }
`

export default TalksPage