import React, { Component } from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser'
import BodyClassName from 'react-body-classname'
import PropTypes from "prop-types"

import RouteTargetHeading from "../components/route-target-heading"
import SEO from '../components/seo'
import Layout from '../components/layout'

class FeatureTemplate extends Component {
  render() {
    const page = this.props.data.markdownRemark
    
    return (
      <BodyClassName className="page">
        <Layout pathname={this.props.location.pathname}>
          <SEO title={ page.frontmatter.title } keywords={['Marcy Sutton', 'MarcySutton.com', 'writing', 'pages', 'blog']}
            image={ (page.frontmatter.coverImage && page.frontmatter.coverImage.childImageSharp.fixed.src) } />
          <section className="generic-wrap page-post-detail">
            <article>
                <RouteTargetHeading targetID="global-nav">
                  { ReactHtmlParser(page.frontmatter.title) }
                </RouteTargetHeading>
                { ReactHtmlParser(page.html) }
            </article>
          </section>
        </Layout>
      </BodyClassName>
    )
  }
}


FeatureTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default FeatureTemplate

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        coverImage {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      excerpt
      html
    }
  }
`
