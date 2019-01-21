import React from 'react'
import { graphql } from 'gatsby'
import BodyClassName from 'react-body-classname'

import Layout from '../components/layout'
import SEO from '../components/seo'
import List from '../components/list'

const WritingPage = ({
        data: {
            allWordpressPost: { edges }
        }
}) => (
    <BodyClassName className="generic">
        <Layout>
            <SEO title="Writing" keywords={['Marcy Sutton', 'posts', 'writing', 'blog', 'web developer']} />
            <section className="generic-wrap">
                <h1>Writing</h1>
                <List 
                    className="list-writing no-background"
                    items={ edges }
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