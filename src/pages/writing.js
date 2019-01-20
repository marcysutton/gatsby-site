import React from 'react'
import { graphql } from 'gatsby'
import BodyClassName from 'react-body-classname'
// import ReactHtmlParser from 'react-html-parser'

import Layout from '../components/layout'
import SEO from '../components/seo'
import List from '../components/list'

const WritingPage = ({ data }) => (
    <BodyClassName className="generic">
        <Layout>
            <SEO title="Writing" keywords={['Marcy Sutton', 'posts', 'writing', 'blog', 'web developer']} />
            <section className="generic-wrap">
                <h1>Writing</h1>
                <List 
                    className="list-writing no-background"
                    items={ data.allWordpressPost.edges }
                    listName="writing"
                    allItems="true" />
            </section>
        </Layout>
    </BodyClassName>
)

export const pageQuery = graphql`
  query {
    allWordpressPost {
        edges {
          node {
            id
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
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

export default WritingPage