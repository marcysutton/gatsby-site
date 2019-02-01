import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import List from '../components/list'
import Feature from '../components/feature'
import MediaGrid from '../components/media-grid'
import ImageGrid from '../components/image-grid'

require("typeface-roboto")

const imagePath = './gallery'
const images = [
  { 'name': 'gallery__0091.jpg', 'alt': 'Presenting at ReactRally' },
  { 'name': 'gallery__0078.jpg', 'alt': 'Gravel cycling in the Chuckanuts' },
  { 'name': 'gallery__0193.jpg', 'alt': 'Homemade Berry pie with a lattice top' },
  { 'name': 'gallery__0271.jpg', 'alt': 'Reflective lake in Glacier National Park' },
  { 'name': 'gallery__0252.jpg', 'alt': 'Rainier the labradoodle in the Oregon wilderness' },
  { 'name': 'gallery__0228.jpg', 'alt': 'Me transitioning my splitboard after a large snowy climb in Austria' },
  { 'name': 'gallery__0123.jpg', 'alt': 'The day I won an O\'Reilly Web Platform Award' },
  { 'name': 'gallery__0188.jpg', 'alt': 'Yes, I do own a pair of overalls for doing yard work...' }
]

class IndexPage extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <SEO title="Home" keywords={['Marcy Sutton', 'MarcySutton.com', 'homepage', 'Developer Advocate', 'web developer', 'accessibility']} />
          <div className="feature-list-wrap">
            <Feature
              subtitle="Latest:Professional"
              image={data.featureImage.childImageSharp.fluid}
            />
            <List
              className="list-writing-home"
              subtitle="Latest:Writing"
              items={data.allWordpressPost.edges}
              listName="writing"
            />
          </div>

          <section aria-label="talks">
            <MediaGrid
              className="media-talks-home"
              subtitle="I've spoken at some conferences:"
              items={data.allWordpressWpTalk.edges}
              itemLabel="talks"
              directory="talk"
            />
          </section>

          <section className="list-image-wrap" aria-label="links">
            <List
              className="list-links-home"
              subtitle="Latest:Professional"
              items={data.allWordpressWpLink.edges}
              listName="links"
              linkNewWindow="true"
            />
            <Img fluid={data.homepageImage.childImageSharp.fluid} alt="Marcy speaking at React Rally in 2016" />
          </section>

          <section aria-label="Photos">
            <ImageGrid subtitle="Photo gallery" className="media-photos-home" images={images} imagePath={imagePath} />
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
    allWordpressPost(limit: 10) {
      edges {
        node {
          id
          title
          slug
          link
        }
      }
    }
    allWordpressWpTalk(limit: 8) {
      edges {
        node {
          excerpt
          link
          title
          id
          slug
        }
      }
    }
    allWordpressWpLink(limit: 7) {
      edges {
        node {
          link
          title
          id
        }
      }
    }
  }
`

export default IndexPage
