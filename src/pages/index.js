import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import List from '../components/list'
import Feature from '../components/feature'
import MediaGrid from '../components/media-grid'

require("typeface-playfair-display")
require("typeface-roboto")

const IndexPage = ({ data }) => (
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
        listName="Posts"
      />
    </div>

    <section aria-label="talks">
      <MediaGrid className="media-talks-home" subtitle="I've spoken at some conferences:" items={data.allWordpressWpTalk.edges} />
    </section>

    <section className="list-image-wrap" aria-label="links">
      <List
        className="list-links-home"
        subtitle="Latest:Professional"
        items={data.allWordpressWpLink.edges}
        listName="Links"
      />
      <Img fluid={data.homepageImage.childImageSharp.fluid} alt="Marcy speaking at React Rally in 2016" />
    </section>

    <section aria-label="Photos">
      <MediaGrid className="media-photos-home" />
    </section>
  </Layout>
)

export const query = graphql`
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
          excerpt
          slug,
          link
        }
      }
    }
    allWordpressWpTalk(limit: 8) {
      edges {
        node {
          excerpt,
          link,
          title,
          id
        }
      }
    }
    allWordpressWpLink(limit: 7) {
      edges {
        node {
          link,
          title,
          id
        }
      }
    }
  }
`

export default IndexPage
