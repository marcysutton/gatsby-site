import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
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
                <Img
                    style={{
                        border: `1px solid #ccc`,
                        marginBottom: `1em`,
                        marginLeft: `2em`,
                        float: `right`,
                        width: `50%`
                    }}
                    fluid={data.linkPageImage.childImageSharp.fluid}
                    alt="Netmag layout: Marcy emceeing CascadiaFest in a Canadian Mounty costume with Matthew Claypotch on stage in a horse head"
                />
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
    linkPageImage: file(relativePath: { eq: "cascadiafest-netmag.PNG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
    }
  }
`

export default LinksPage