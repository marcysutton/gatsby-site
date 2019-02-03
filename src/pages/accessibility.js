import React from 'react'
import { Link, graphql } from 'gatsby'
import BodyClassName from 'react-body-classname'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AccessibilityPage = ({ data }) => (
    <BodyClassName className="page">
        <Layout>
            <SEO title="Accessibility" keywords={['Marcy Sutton', 'Accessibility', 'web developer']} />
            <section className="generic-wrap breathing-room">
                <h1>Accessibility Statement</h1>

                <p>I want everyone who visits MarcySutton.com to feel welcome and find the experience rewarding. This site recently underwent a major redesign and build, and is a work-in-progress.</p>

                <h2>What am I doing?</h2>

                <p>To make the website a positive place for everyone, I'm using the <a href="http://www.w3.org/TR/WCAG/" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">Web Content Accessibility Guidelines (WCAG) 2.1</a>. These guidelines explain how to make web content more accessible for people with disabilities, and user friendly for everyone.</p>

                <p>The guidelines have three levels of accessibility (A, AA and AAA). I’ve chosen Level AA as the initial target for this website.</p>

                <h2>How am I doing?</h2>

                <p>I've worked hard on the accessibility of MarcySutton.com to achieve my goal of Level AA accessibility. I monitor it regularly to maintain access, but if you do find any problems, please <Link to="/contact">get in touch</Link>.</p>

                <h2>Learn more</h2>
                
                <p>For accessible design and development resources, visit my resources page: <Link to="/web-accessibility-resources">https://marcysutton.com/web-accessibility-resources</Link></p>
            </section>
        </Layout>
    </BodyClassName>
)

export const query = graphql`
  query {
    allWordpressPage {
        edges {
          node {
            id
            slug
            content
          }
        }
      }
  }
`

export default AccessibilityPage