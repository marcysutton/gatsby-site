import React from 'react'
import BodyClassName from 'react-body-classname'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import RouteTargetHeading from "../components/route-target-heading"
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
    <StaticQuery query={graphql`
        query {
            portrait: file(relativePath: { eq: "marcy-cargo-bike.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            biking: file(relativePath: { eq: "deception-pass.jpg" }) {
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
                    <SEO title="About" keywords={['Marcy Sutton', 'bio', 'web developer', 'accessibility consultant', 'freelance accessibility specialist']} />
                    <div className="generic-wrap page-post-wrap">
                        <section className="page-post-detail">
                            <RouteTargetHeading>
                                About Marcy Sutton Todd
                            </RouteTargetHeading>
                            <p><strong>At this time (Jan. 2024), I’m working full-time as a software engineer.</strong> While I’m no longer doing consulting projects, you can still hire me using <a href="https://superpeer.com/marcysutton">Superpeer</a>, a service for 1:1 calls.</p>
                            <h2>Marcy’s Bio</h2>
                            <p><em>(See <a href="#bio-short-version">bonus short version, below</a>)</em></p>
                            <p>In October 2023, I started a new role as a senior front-end developer at <a href="https://principlestudios.com">Principle Studios</a>, a remote digital agency with a strong engineering team and a fantastic culture. I am overjoyed to build websites again, growing the engineering skills and career I want to have.</p><p>In 2022, I launched an online workshop series <a href='https://testingaccessibility.com'>testingaccessibility.com</a> with the folks over at <a href="https://egghead.io">Egghead.io</a>. I spent a great few years as an independent accessibility engineering consultant and trainer, working with tech organizations such as Spotify, Microsoft, Google, Pinterest, T-Mobile, Change.org, Evinced, and more.</p>
                            <p>In the past, I led the docs team as Head of Learning at <a href="https://gatsbyjs.com" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">Gatsby</a> before deciding I prefer to stay as an individual contributor developer. I also worked as a Developer Advocate and Senior Frontend Engineer on the <a href="https://www.deque.com/products/axe/" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">axe-core</a> team developing web accessibility testing tools. Before that, I worked as an accessibility engineer at <a href="https://adobe.com" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">Adobe</a>, and as a web developer at <a href="https://substantial.com" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">Substantial</a>, <a href="https://wearepop.com" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">POP</a> and <a href="https://deicreative.com" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">DEI Creative</a>.</p>
                            <p>I’m passionate about improving the web for people with disabilities and I’ve done a lot of teaching and speaking about it. My blog, <a href="http://a11ywins.tumblr.com" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">Accessibility Wins</a>, highlighted accessible user interfaces and tools. In 2016, O’Reilly presented me with a Web Platform Award for my work in accessibility. I’m a former leader of the <a href="https://www.meetup.com/a11ysea/" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">Accessibility Seattle Meetup</a> and I founded a social coding group for women in called <a href="https://www.meetup.com/NW-Tech-Women/" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">NW Tech Women</a>.</p>

                            <p>My education includes a Bachelor of Arts in Visual Journalism from Brooks Institute of Photography and an Associate of Applied Arts in Web Design &#038; Multimedia from the Art Institute of Seattle. I became very interested in web development during college, creating HTML websites for photo documentary classes and later, <a href="https://marcy.codes/v2/" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">interactive Flash websites</a>. I naturally went back to HTML &amp; CSS, with ECMAScript experience that helped me fall in love with JavaScript. When I learned about Web Accessibility, I liked that it reflected my values and added meaning to my work. I love solving problems with design and code when they have potential to help as many people as possible.</p>

                            <p>I’m inspired by nature, street art, typography, and music, and I try to appreciate life’s ups and downs. I like cooking and baking pies, and doing night photography. I’m also pretty hooked on <a href="https://instagram.com/marcysutton" target="_blank" rel="noopener noreferrer" title="My Instagram - Link opens in a new window">riding bikes and playing outside</a>.</p>

                            <h2 id="bio-short-version">Bio: Short Version</h2>
                            <p>Marcy Sutton Todd is a senior front-end engineer at Principle Studios, a remote software agency. As an independent web developer and trainer, Marcy launched the Testing Accessibility online workshop series in partnership with Egghead.io. In the past, Marcy worked on accessibility testing tools including axe-core, JavaScript frameworks, websites and web applications. Marcy’s focus on access and user experience was recognized by O’Reilly in 2016 with a Web Platform Award. When away from the keyboard, Marcy can be found hiking in the woods with her family, riding bicycles, lifting weights, or making yummy food.</p>
                        </section>
                        <aside className="page-post-aside breathing-room">
                            <Img fluid={data.portrait.childImageSharp.fluid} alt="Me on my Riese and Mueller cargo bike, with a box containing a baby car seat in the front" />
                            <h2 style={{marginTop: `1em`}}>where to find me</h2>
                            <ul style={{marginBottom: `2em`}}>
                                <li><a title="Link opens in a new window." href="http://www.linkedin.com/in/marcysutton/" target="_blank" rel="noopener noreferrer">linkedin<span className="visually-hidden"> Opens in a new window</span></a></li>
                                <li><a title="Link opens in a new window." href="https://instagram.com/marcysutton" target="_blank" rel="noopener noreferrer">instagram<span className="visually-hidden"> Opens in a new window</span></a></li>
                                <li><a title="Link opens in a new window." href="https://twitter.com/marcysutton" target="_blank" rel="noopener noreferrer">twitter<span className="visually-hidden"> Opens in a new window</span></a></li>
                                <li><a title="Link opens in a new window." href="https://github.com/marcysutton" target="_blank" rel="noopener noreferrer">github<span className="visually-hidden"> Opens in a new window</span></a></li>
                            </ul>
                            <Img fluid={data.biking.childImageSharp.fluid} alt="Sun streaking through the trees at Deception Pass State Park" />
                        </aside>
                    </div>
                </Layout>
            </BodyClassName>
        )
    }}
    />
)

export default AboutPage;