import React from 'react'
import BodyClassName from 'react-body-classname'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
    <BodyClassName className="page">
        <Layout>
            <SEO title="About" keywords={['Marcy Sutton', 'bio', 'web developer']} />
            <div className="generic-wrap page-post-wrap">
                <section className="page-post-detail">
                    <h1>About Marcy Sutton</h1>
                    <p><em>Bio: in my own words (see <a href="#bio-short-version">bonus short version, below</a>)</em></p>
                    <p>I am the Head of Learning at Gatsby.js, a remote startup creating fast, accessible websites and apps while building a strong community. My prior roles were Developer Advocate and Senior Front-End Engineer at <a href="https://www.deque.com">Deque Systems</a>, where I worked on the <a href="https://www.deque.com/products/axe/">axe-core</a> team focusing on accessibility test integrations into web developer tooling. I'm passionate about improving the web for people with disabilities and I often go to conferences to speak about it. My blog, <a href="http://a11ywins.tumblr.com">Accessibility Wins</a>, highlights accessible user interfaces and tools, contributing a positive voice to the web development space. In 2016, O'Reilly presented me with a Web Platform Award for my work in accessibility. I'm a co-leader of the <a href="https://www.meetup.com/a11ysea/">Accessibility Seattle Meetup</a>, and I recently founded a social/volunteering group in my city of Bellingham called <a href="https://www.meetup.com/NW-Tech-Women/">NW Tech Women</a>.</p>

                    <p>My education includes a Bachelor of Arts in Visual Journalism from Brooks Institute of Photography and an Associate of Applied Arts in Web Design &#038; Multimedia from the Art Institute of Seattle. I became very interested in web development during college, creating HTML websites for photo documentary classes and later, interactive Flash websites. I naturally went back to HTML &amp; CSS, with Ecmascript experience that helped me fall in love with JavaScript. When I learned about Web Accessibility, I liked that it reflected my values and added meaning to my work. I love solving problems with design and code when they have potential to help as many people as possible.</p>

                    <p>I&#8217;m inspired by nature, street art, typography and music and I try to appreciate life's ups and downs. I&#8217;m also pretty hooked on <a href="https://instagram.com/marcysutton" target="_blank" rel="noopener noreferrer" title="Link opens in a new window">riding my bike</a> outside.</p>

                    <h2 id="bio-short-version">Bio: Short Version</h2>
                    <p>Marcy Sutton is the Head of Learning at Gatsby.js, a startup creating fast, accessible websites and apps while building a strong community. Previously, she was a Developer Advocate and frontend engineer at Deque Systems, a company focused on digital equality. In 2016, O’Reilly gave Marcy a Web Platform Award for her work in accessibility. Her blog, <em>Accessibility Wins</em>, highlights accessible user interfaces and tools, contributing a positive voice to the web development space. She co-leads the Accessibility Seattle meetup and recently founded a group called NW Tech Women. When away from the keyboard, Marcy can be found hiking with her dog, riding a bicycle, or snowboarding.</p>
                </section>
                <aside className="page-post-aside breathing-room">
                    <p><img src="/wp-content/themes/v4/img/winchester-mtn-crop.jpg" alt="Hiking with my dog Rainier at Winchester Mountain" title="Hiking with my dog Rainier at Winchester Mountain" /></p>
                    <h2 style={{marginTop: `1em`}}>where to find me</h2>
                    <ul style={{marginBottom: `2em`}}>
                        <li><a title="Link opens in a new window." href="https://twitter.com/marcysutton" target="_blank" rel="noopener noreferrer">twitter<span className="visually-hidden"> Opens in a new window</span></a></li>
                        <li><a title="Link opens in a new window." href="https://github.com/marcysutton" target="_blank" rel="noopener noreferrer">github<span className="visually-hidden"> Opens in a new window</span></a></li>
                        <li><a title="Link opens in a new window." href="http://www.linkedin.com/in/marcysutton/" target="_blank" rel="noopener noreferrer">linkedin<span className="visually-hidden"> Opens in a new window</span></a></li>
                    </ul>
                    <p className="about-image"><img src="/wp-content/themes/v4/img/sandiego-bike.jpg" alt="Biking in San Diego during CSUN" title="Biking in San Diego during CSUN" /></p>
                    <p className="about-image"><img src="/wp-content/themes/v4/img/anthony-lakes-350.jpg" alt="Splitboarding at Anthony Lakes, OR" title="Splitboarding at Anthony Lakes, OR" /></p>
                </aside>
            </div>
        </Layout>
    </BodyClassName>
)

export default AboutPage;