import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import List from '../components/list'
import Feature from '../components/feature'
import MediaGrid from '../components/media-grid'
import ImageGrid from '../components/image-grid'
import LinkList from '../components/link-list'

require("typeface-roboto")

class IndexPage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout pathname={this.props.location.pathname}>
        <SEO title="Home" keywords={['Marcy Sutton', 'MarcySutton.com', 'homepage', 'Developer Advocate', 'web developer', 'accessibility']} />
          <div className="feature-list-wrap">
            <Feature 
              subtitle="Latest:Professional"
              image={data.featureImage.childImageSharp.fluid}
            />
            <List
              className="list-writing-home breathing-room"
              subtitle="Latest:Writing"
              items={data.posts.edges}
              listName="writing"
            />
          </div>

          <section aria-label="talks">
            <MediaGrid
              className="media-talks-home"
              subtitle="I've spoken at some conferences:"
              items={data.talks.edges}
              itemLabel="talks"
            />
          </section>

          <section className="list-image-wrap" aria-label="links">
            <LinkList
              className="list-links-home breathing-room"
              subtitle="Latest:Professional"
              subhead="Latest:Professional"
              items={data.allLinksJson.edges}
              listName="links"
              linkNewWindow="true"
            />
            <Img fluid={data.homepageImage.childImageSharp.fluid} alt="Marcy speaking at React Rally in 2016" />
          </section>

          <section aria-label="Photos">
            <ImageGrid subtitle="Photo gallery" className="media-photos-home" images={data.gallery.edges} />
          </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    homepageImage: file(relativePath: { eq: "react-rally-marcy-lg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featureImage: file(relativePath: { eq: "smashing-book-6.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 10,
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {fileAbsolutePath: {regex: "/posts/"}}
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
    talks: allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {fileAbsolutePath: {regex: "/talk-videos/"}}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            videoSrcURL
            videoTitle
          }
          id
        }
      }
    }
    gallery: allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allLinksJson (
      limit: 7
    ) {
      edges {
        node {
          id
          link
          name
        }
      }
    }
  }
`

export default IndexPage
