import React, { Component } from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser'
import BodyClassName from 'react-body-classname'
import PropTypes from "prop-types"

import SEO from '../components/seo'
import Layout from '../components/layout'
import Breadcrumb from '../components/breadcrumb'

class TalkPageTemplate extends Component {
  render() {
    const talk = this.props.data.wordpressWpTalk

    return (
      <BodyClassName className="page">
        <Layout>
          <SEO title={ talk.title } keywords={['Marcy Sutton', 'MarcySutton.com', 'talks', 'blog']} />
          <section className="generic-wrap page-wrap">
            <article>
              <h1>{ ReactHtmlParser(talk.title) }</h1>
              { ReactHtmlParser(talk.content) }

              <footer aria-label="Breadcrumb">
                <Breadcrumb url="talks" section="talks" />
              </footer>
            </article>
          </section>
        </Layout>
      </BodyClassName>
    )
  }
}

TalkPageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default TalkPageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpTalk(id: { eq: $id }) {
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