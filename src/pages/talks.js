import React from 'react'
import { graphql } from 'gatsby'
import BodyClassName from 'react-body-classname'

// import RouteTargetHeading from "../components/route-target-heading"
import Layout from '../components/layout'
import MediaGrid from '../components/media-grid'
import SEO from '../components/seo'
// import PastEvents from '../components/past-events'

const TalksPage = ({
    data: {
        allMarkdownRemark: { edges }
    }
}) => (
    <BodyClassName className="page">
        <Layout>
            <SEO title="Talks" keywords={['Marcy Sutton', 'talks', 'videos', 'web developer']} />
            <section className="generic-wrap talks-wrap breathing-room">
                <h1>
                  Talks
                </h1>
                <p>I love public speaking! Here are the recorded talks I’ve done so far.</p>
                <MediaGrid 
                    className="media-grid-talks no-background"
                    items={ edges }
                    itemLabel="talks"
                    directory="/talk"
                    allItems />
            </section>
        </Layout>
    </BodyClassName>
)

export const query = graphql`
  query {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {fileAbsolutePath: {regex: "/talk-videos/"}}
    ) {
        edges {
          node {
            id
            frontmatter {
                title
                path
                videoSrcURL
                videoTitle
                posterImg {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
            }
          }
        }
      }
  }
`

export default TalksPage