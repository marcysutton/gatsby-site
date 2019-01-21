import React, { Component } from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser'
import PropTypes from "prop-types"

import SEO from '../components/seo'
import Layout from '../components/layout'

class PageTemplate extends Component {
  render() {
    const page = this.props.data.wordpressPage
    const talk = this.props.data.wordpressWpTalk

    const title = page ? page.title : talk.title
    const content = page ? page.content : talk.content

    return (
      <Layout>
        <SEO title={ title } keywords={['Marcy Sutton', 'MarcySutton.com', 'writing', 'pages', 'blog']} />
        <section className="generic-wrap">
          <article>
              <h1>{ ReactHtmlParser(title) }</h1>
              { ReactHtmlParser(content) }
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
    wordpressWpTalk(id: { eq: $id }) {
      title
      content
    }
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