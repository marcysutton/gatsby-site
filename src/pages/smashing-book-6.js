import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import BodyClassName from 'react-body-classname'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SmashingBook6Page = ({ data }) => (
  <BodyClassName className="page">
    <Layout>
        <SEO title="Smashing Book 6" keywords={['Marcy Sutton', 'Smashing Book 6', 'web developer']} />
        <section className="generic-wrap breathing-room">
            <h1>Smashing Book 6: New Frontiers in Web Design</h1>
            <Img
                className="floating-image"
                fluid={data.smashingCoverImage.childImageSharp.fluid}
                alt="Gorgeous embossed hardcover of Smashing Book 6 on top of an illustrated map"
            />
            <Img
                className="floating-image"
                fluid={data.smashingChapterImage.childImageSharp.fluid}
                alt="My book chapter on Accessibility in the Time of Single Page Apps"
            />
            <p>I wrote a book chapter on Accessibility in JavaScript Apps in the latest    hardcover book from Smashing Magazine, <a target="_blank" rel="noopener noreferrer" href="https://www.smashingmagazine.com/2018/09/smashing-book-6-release/">New Frontiers in Web Design</a>. I'm thrilled to have been included as an author in this beautiful hardcover book! My chapter sits amongst others on modern web development topics, such as using CSS Grid, Service Workers and Progressive Web Apps, Asset Loading, Conversational UIs, and more.</p>

            <p>In my chapter, I wrote about the specific aspects of accessibility to consider when developing a predominantly <a target="_blank" rel="noopener noreferrer" href="https://www.smashingmagazine.com/2015/05/client-rendered-accessibility/">client-rendered</a> website or application. I covered things like focus management, HTML semantics, announcements, and testing. There are a few different code examples in the chapter written in React.js, Vue, jQuery, vanilla JavaScript, HTML and CSS. But this topic is bigger than any one framework or library, so I intentionally focused on the user impact when the DOM is rendered and manipulated dynamically with JavaScript. It's worth remembering that users don't typically notice or care how a website was built; they only care if they can use it.</p>
            
            <p>These are subjects I'm very passionate about, as accessible web applications are often critically lacking accessibility to a point where they cannot be used by people with disabilities. We can do so much better. I sincerely believe that with more information, developers can make a huge impact in our users' lives.</p>

            <p>To read some of my tips "in a nutshell" for JavaScript app accessibility included in the chapter–plus a few more that I wish I'd published–check out my blog post on Deque.com: <a target="_blank" rel="noopener noreferrer" href="https://www.deque.com/blog/accessibility-tips-in-single-page-applications/">https://www.deque.com/blog/accessibility-tips-in-single-page-applications/</a></p>
            
            <p>I also wrote about this subject for Smashing Magazine a few years back, when I was working on the Angular team. The framework code might be a little dated, but the concepts still apply: <a target="_blank" rel="noopener noreferrer" href="https://www.smashingmagazine.com/2015/05/client-rendered-accessibility/">https://www.smashingmagazine.com/2015/05/client-rendered-accessibility/</a></p>

            <p>Accessibility is an evergreen topic that persists regardless of the JavaScript framework flavor or feature of the month. Accessibility basics matter, as do inclusive JavaScript development skills; we can serve more users by incorporating accessibility into every application and website we put out into the world, and I'm delighted to show you how.</p>

            <p>You can purchase a hardcover copy from Smashing for $39 US, or $19 US for a digital copy. Do yourself a favor and pick up a copy today! <a target="_blank" rel="noopener noreferrer" href="https://www.smashingmagazine.com/2018/09/smashing-book-6-release/">https://www.smashingmagazine.com/2018/09/smashing-book-6-release/</a></p>
            <div style={{clear: `both`}}></div>
      </section>
    </Layout>
  </BodyClassName>
)

export const pageQuery = graphql`
  query {
    smashingCoverImage: file(relativePath: { eq: "smashing-cover.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
    }
    smashingChapterImage: file(relativePath: { eq: "smashing-chapter-start.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
    }
  }
`

export default SmashingBook6Page
