import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import BodyClassName from 'react-body-classname'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LinkList from '../components/link-list'

const LinksPage = ({ data }) => (
    <BodyClassName className="page">
        <Layout>
            <SEO title="Links" keywords={['Marcy Sutton', 'links', 'web developer']} />
            <section className="generic-wrap">
                <div className="breathing-room">
                    <h1>Links</h1>
                    <Img
                        className="floating-image width50"
                        fluid={data.linkPageImage.childImageSharp.fluid}
                        alt="Netmag layout: Marcy emceeing CascadiaFest in a Canadian Mounty costume with Matthew Claypotch on stage in a horse head"
                    />
                    <p>A list of blog posts and podcasts on other sites, either written by me or referencing me somehow.</p>
                    <p>All links open in new windows.</p>
                    <LinkList 
                        className="list-links no-background"
                        items={ data.allLinksJson.edges }
                        listName="links"
                        allItems="true"
                        linkNewWindow="true" />
                </div>
            </section>
        </Layout>
    </BodyClassName>
)
/* 
    
    }*/
export const pageQuery = graphql`
  query {
    linkPageImage: file(relativePath: { eq: "cascadiafest-netmag.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
    }
    allLinksJson {
        edges {
            node {
                id
                link
                name
            }
        }
    }
  }
`

export default LinksPage