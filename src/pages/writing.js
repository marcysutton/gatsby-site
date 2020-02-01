import React from 'react'
import { graphql } from 'gatsby'
import BodyClassName from 'react-body-classname'

import RouteTargetHeading from "../components/route-target-heading"
import Layout from '../components/layout'
import SEO from '../components/seo'
import List from '../components/list'
import TalkEvents from '../components/talk-events'
import PastEvents from '../components/past-events'

const WritingPage = ({
        data: {
          allMarkdownRemark: { edges }
        }
}) => (
    <BodyClassName className="page">
        <Layout>
            <SEO title="Writing" keywords={['Marcy Sutton', 'posts', 'writing', 'blog', 'web developer']} />
            <div className="generic-wrap page-post-wrap">
                <section className="page-post-detail breathing-room">
                    <RouteTargetHeading>
                      Writing
                    </RouteTargetHeading>
                    <List 
                        className="list-writing no-background"
                        items={ edges }
                        listName="writing"
                        allItems="true" />
                </section>
                <aside className="page-post-aside breathing-room">
                    <TalkEvents />
                    <PastEvents />
                </aside>
            </div>
        </Layout>
    </BodyClassName>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {fileAbsolutePath: {regex: "/posts/"}, frontmatter: { draft: { ne: true } }}
    ) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              unlisted
            }
          }
        }
    }
  }
`

export default WritingPage