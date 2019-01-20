import React from 'react'
import { graphql } from 'gatsby'
import BodyClassName from 'react-body-classname'

import Layout from '../components/layout'
import SEO from '../components/seo'
import List from '../components/list'

const LinksPage = ({ data }) => (
    <BodyClassName className="generic">
        <Layout>
            <SEO title="Links" keywords={['Marcy Sutton', 'links', 'web developer']} />
            <section className="generic-wrap">
                <h1>Links</h1>
                <p>A list of blog posts and podcasts on other sites, either written by me or referencing me somehow. All links open in new windows.</p>
                <List 
                    className="list-links no-background"
                    items={ data.allWordpressWpLink.edges }
                    listName="links"
                    allItems="true"
                    linkNewWindow="true" />
            </section>
        </Layout>
    </BodyClassName>
)

export const pageQuery = graphql`
  query {
    allWordpressWpLink {
        edges {
          node {
            id
            link
            title
          }
        }
      }
  }
`

export default LinksPage