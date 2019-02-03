import React, { Component } from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser'
import PropTypes from "prop-types"
import BodyClassName from 'react-body-classname'
import striptags from 'striptags'

import SEO from '../components/seo'
import Layout from '../components/layout'
import List from '../components/list'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const posts = this.props.data.allWordpressPost.edges

    const featuredImage = post.featured_media && post.featured_media.source_url ? post.featured_media.source_url : null

    return (
      <BodyClassName className="post">
        <Layout pathname={this.props.pageContext.pathname}>
          <SEO
            title={ post.title }
            description={ striptags(post.excerpt )}
            keywords={['Marcy Sutton', 'MarcySutton.com', 'writing', 'posts', 'blog']}
            image={ featuredImage } />
            <div className="generic-wrap page-post-wrap">
              <section className="page-post-detail breathing-room">
                  <article>
                    <h1>{ ReactHtmlParser(post.title) }</h1>
                    <h2 className="subhead">{ post.date }</h2>
                    { ReactHtmlParser(post.content) }
                  </article>
              </section>
              <aside className="page-post-list-wrap">
                  <List 
                      className="list-writing-post breathing-room"
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
          source_url
          alt_text
      }
      excerpt
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
  }
`