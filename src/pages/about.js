import React from 'react'
import BodyClassName from 'react-body-classname'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// import RouteTargetHeading from "../components/route-target-heading"
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
    <StaticQuery query={graphql`
        query {
            portrait: file(relativePath: { eq: "marcy-rainier.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            biking: file(relativePath: { eq: "rambod.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `}
    render={data => {
        return (
            <BodyClassName className="page">
                <Layout>
                    <SEO title="About" keywords={['Marcy Sutton', 'bio', 'web developer']} />
                    <div className="generic-wrap page-post-wrap">
                        <section className="page-post-detail">
                            <h1>
                                About Marcy Sutton
                            </h1>
                            <p><em>(See <a href="#bio-short-version">bonus short version, below</a>)</em></p>
                            <p>I'm a Lead Software Engineer on the Developer Relations team at <a href="https://gatsbyjs.com" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">Gatsby</a>, a remote startup creating fast, accessible websites and webapps while building a strong community (I was their Head of Learning for a year, before requesting a role change). Previously, I was a Developer Advocate on the <a href="https://www.deque.com/products/axe/" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">axe-core</a> team developing web accessibility testing tools. I've also worked as an accessibility engineer at <a href="https://adobe.com" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">Adobe</a>, and as a web developer at <a href="https://substantial.com" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">Substantial</a>, <a href="https://wearepop.com" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">POP</a> and <a href="https://deicreative.com" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">DEI Creative</a>.</p>
                            <p>I'm passionate about improving the web for people with disabilities and I often speak at conferences about it. My blog, <a href="http://a11ywins.tumblr.com" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">Accessibility Wins</a>, highlights accessible user interfaces and tools. In 2016, O'Reilly presented me with a Web Platform Award for my work in accessibility. I'm a co-leader of the <a href="https://www.meetup.com/a11ysea/" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">Accessibility Seattle Meetup</a>, and I founded a social coding group for women in my city of Bellingham called <a href="https://www.meetup.com/NW-Tech-Women/" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">NW Tech Women</a>.</p>

                            <p>My education includes a Bachelor of Arts in Visual Journalism from Brooks Institute of Photography and an Associate of Applied Arts in Web Design &#038; Multimedia from the Art Institute of Seattle. I became very interested in web development during college, creating HTML websites for photo documentary classes and later, <a href="https://marcy.codes/v2/" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">interactive Flash websites</a>. I naturally went back to HTML &amp; CSS, with ECMAScript experience that helped me fall in love with JavaScript. When I learned about Web Accessibility, I liked that it reflected my values and added meaning to my work. I love solving problems with design and code when they have potential to help as many people as possible.</p>

                            <p>I'm inspired by nature, street art, typography, and music, and I try to appreciate life's ups and downs. I like cooking and baking pies, and doing night photography. I'm also pretty hooked on <a href="https://instagram.com/marcysutton" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">riding bikes and playing outside</a>.</p>

                            <h2 id="bio-short-version">Bio: Short Version</h2>
                            <p>Marcy Sutton is a Lead Engineer, Developer Relations at Gatsby, a startup creating fast, accessible websites and web apps while building a strong community. <span role="img" aria-label="heart">💜</span> Previously, she worked on the open source axe-core accessibility testing library. In 2016, O’Reilly gave Marcy a Web Platform Award for her work in accessibility. She co-leads the Accessibility Seattle and NW Tech Women meetups in her local region. When away from the keyboard, Marcy can be found hiking with her dog, riding a bicycle, or snowboarding.</p>
                        </section>
                        <aside className="page-post-aside breathing-room">
                            <Img fluid={data.portrait.childImageSharp.fluid} alt="Me and Rainier McCheddarton in the snow" />
                            <h2 style={{marginTop: `1em`}}>where to find me</h2>
                            <ul style={{marginBottom: `2em`}}>
                                <li><a title="Link opens in a new window." href="https://twitter.com/marcysutton" target="_blank" rel="noopener noreferrer">twitter<span className="visually-hidden"> Opens in a new window</span></a></li>
                                <li><a title="Link opens in a new window." href="https://github.com/marcysutton" target="_blank" rel="noopener noreferrer">github<span className="visually-hidden"> Opens in a new window</span></a></li>
                                <li><a title="Link opens in a new window." href="http://www.linkedin.com/in/marcysutton/" target="_blank" rel="noopener noreferrer">linkedin<span className="visually-hidden"> Opens in a new window</span></a></li>
                            </ul>
                            <Img fluid={data.biking.childImageSharp.fluid} alt="My gravel bike in front of Mt. Shuksan when riding around Mt. Baker in a day" />
                        </aside>
                    </div>
                </Layout>
            </BodyClassName>
        )
    }}
    />
)

export default AboutPage;