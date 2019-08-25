import React, { Component } from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser'
import BodyClassName from 'react-body-classname'
import PropTypes from "prop-types"
import { AllHtmlEntities } from 'html-entities'

import RouteTargetHeading from "../components/route-target-heading"
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
          <SEO title={ AllHtmlEntities.decode(talk.frontmatter.title) }
            player={talk.frontmatter.videoSrcURL}
            image={talk.frontmatter.posterImg.childImageSharp.fluid.src}
            keywords={['Marcy Sutton', 'MarcySutton.com', 'talks', 'blog']} />
          <section className="generic-wrap page-wrap breathing-room">
            <article>
              <RouteTargetHeading targetID="global-nav">
                { ReactHtmlParser(talk.frontmatter.title) }
              </RouteTargetHeading>
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
        posterImg {
          childImageSharp {
            fluid(maxWidth: 480) {
              ...GatsbyImageSharpFluid
            }
          }
      }
      }
      html
    }
  }
`