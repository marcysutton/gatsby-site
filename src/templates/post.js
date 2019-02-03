import React, { Component } from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser'
import PropTypes from "prop-types"
import BodyClassName from 'react-body-classname'

import SEO from '../components/seo'
import Layout from '../components/layout'
import List from '../components/list'
import Breadcrumb from '../components/breadcrumb'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const posts = this.props.data.allWordpressPost.edges

    return (
      <BodyClassName className="post">
        <Layout>
            <SEO title={ post.title } keywords={['Marcy Sutton', 'MarcySutton.com', 'writing', 'posts', 'blog']} />
            <div className="generic-wrap page-post-wrap">
                <section className="page-post-detail">
                    <article>
                      <h1>{ post.title }</h1>
                      <h2 className="subhead">{ post.date }</h2>
                      { ReactHtmlParser(post.content) }
                      <footer aria-label="Breadcrumb">
                        <Breadcrumb url="writing" section="posts" />
                      </footer>
                    </article>
                </section>
                <aside className="page-post-list-wrap">
                    <List 
                        className="list-writing-post"
                        items={posts}
                        listName="writing"
                        subtitle="More Posts" />
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
    wordpressPost(id: { eq: $id }) {
      title
      date(formatString: "MMMM DD, YYYY")
      featured_media {
          post
          alt_text
      }
      content
    }
    allWordpressPost(limit: 20) {
        edges {
          node {
            id
            title
            slug
            link
          }
        }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`