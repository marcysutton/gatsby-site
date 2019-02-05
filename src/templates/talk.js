import React, { Component } from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser'
import BodyClassName from 'react-body-classname'
import PropTypes from "prop-types"

import SEO from '../components/seo'
import Layout from '../components/layout'
import Breadcrumb from '../components/breadcrumb'
import Video from '../components/video'

class TalkPageTemplate extends Component {
  render() {
    const talk = this.props.data.markdownRemark
    return (
      <BodyClassName className="page">
        <Layout pathname={this.props.location.pathname}>
          <SEO title={ ReactHtmlParser(talk.frontmatter.title)[0] }
            player={this.props.location.href}
            keywords={['Marcy Sutton', 'MarcySutton.com', 'talks', 'blog']} />
          <section className="generic-wrap page-wrap breathing-room">
            <article>
              <h1>{ ReactHtmlParser(talk.frontmatter.title) }</h1>
              <Video videoSrcURL={talk.frontmatter.videoSrcURL} videoTitle={talk.frontmatter.title} />

              { ReactHtmlParser(talk.html) }

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
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        path
        videoSrcURL
        videoTitle
      }
      html
    }
  }
`