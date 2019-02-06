import React, { Component } from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser'
import PropTypes from "prop-types"
import BodyClassName from 'react-body-classname'
import { AllHtmlEntities } from 'html-entities'

import SEO from '../components/seo'
import Layout from '../components/layout'
import List from '../components/list'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark
    const posts = this.props.data.allMarkdownRemark.edges
    
    return (
      <BodyClassName className="post">
        <Layout pathname={this.props.pageContext.pathname}>
          <SEO
            title={ AllHtmlEntities.decode(post.frontmatter.title) }
            description={ AllHtmlEntities.decode(post.excerpt) }
            keywords={['Marcy Sutton', 'MarcySutton.com', 'writing', 'posts', 'blog']}
            image={ post.frontmatter.coverImage } />
            <div className="generic-wrap page-post-wrap">
              <section className="page-post-detail breathing-room">
                  <article>
                    <h1>{ ReactHtmlParser(post.frontmatter.title) }</h1>
                    { post.frontmatter.date ? <h2 className="subhead">{ post.frontmatter.date }</h2> : null }
                    { ReactHtmlParser(post.html) }
                  </article>
              </section>
              <aside className="page-post-list-wrap">
                  <List 
                      className="list-writing-post breathing-room"
                      items={posts}
                      listName="writing"
                      subtitle="More Posts"
                      pathname={this.props.location.pathname} />
              </aside>
            </div>
        </Layout>
    </BodyClassName>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        coverImage
      }
      excerpt
      html
    }
    allMarkdownRemark(
      limit: 20,
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {fileAbsolutePath: {regex: "/posts/"}}
    ) {
        edges {
          node {
            id
            frontmatter {
                title
                path
            }
          }
        }
    }
  }
`