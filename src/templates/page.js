import React, { Component } from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser'
import PropTypes from "prop-types"

import SEO from '../components/seo'
import Layout from '../components/layout'

class PageTemplate extends Component {
  render() {
    const page = this.props.data.wordpressPage

    return (
      <Layout>
        <SEO title={ page.title } keywords={['Marcy Sutton', 'MarcySutton.com', 'writing', 'pages', 'blog']} />
        <section className="generic-wrap">
          <article>
              <h1>{ page.title }</h1>
              { ReactHtmlParser(page.content) }
          </article>
        </section>
      </Layout>
    )
  }
}

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`