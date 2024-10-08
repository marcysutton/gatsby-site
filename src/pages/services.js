import React from 'react'
import BodyClassName from 'react-body-classname'
import { Link } from 'gatsby'

import RouteTargetHeading from "../components/route-target-heading"
import Layout from '../components/layout'
import SEO from '../components/seo'

const ServicesPage = () => {
    return (
        <BodyClassName className="page">
            <Layout>
                <SEO title="Marcy Sutton Todd, Accessible Web Developer" keywords={['Marcy Sutton', 'web accessibility expert', 'single page app accessibility', 'JavaScript accessibility', 'accessibility consultant', 'independent UI developer', 'freelance web developer']} />
                <div className="generic-wrap page-post-wrap">
                    <section className="page-post-detail">
                        <RouteTargetHeading>
                            Marcy Sutton Todd, Accessible Web Developer
                        </RouteTargetHeading>
                        
                        <p><strong>At this time, I’m working full-time as a frontend software engineer and not taking on consulting projects. You can still hire me for 1:1 calls through <a href="https://superpeer.com/marcysutton">Superpeer</a>!</strong></p>

                        <p>Starting in 2020, I worked as an independent web developer engaging with development teams and companies to foster web accessibility at tech organizations. I’ve had the pleasure of working with some great companies, including Spotify, Microsoft, Google, Pinterest, T-Mobile, Change.org, Evinced, and more.</p>
                        <p>I’ve consulted on accessibility of websites and web applications. I’ve delivered specialized talks and workshops to educate team members and make accessibility learning stick. I’ve reviewed and prototyped designs for accessibility to provide feedback at any stage. I’ve engineered more robust solutions using manual and automated testing along the way. I’ve also created documentation to make these processes repeatable and communicate with internal teams or the public.</p>
                        <p>This comes after 10 years of experience working full-time with companies as a frontend developer. View my full work history on LinkedIn: <a href="https://www.linkedin.com/in/marcysutton/">https://www.linkedin.com/in/marcysutton/</a></p>
                        <h2>My specialties are:</h2>
                        <ul>
                            <li>Web User Interface engineering</li>
                            <li>Accessible data visualizations</li>
                            <li>Design systems</li>
                            <li>Engineering of frontend tools with Node.js</li>
                            <li>Manual and automated accessibility testing</li>
                            <li>Prototyping with code</li>
                            <li>Design reviews</li>
                            <li>Accessibility refactoring and guidance</li>
                            <li>Documentation and PR reviews</li>
                        </ul>
                        <h2>How to get in touch</h2>
                        <p>Looking to hire me for a project? Send me an email through my contact page and I’ll do my best to get back to you as soon as I can: <Link to="/contact">https://marcysutton.com/contact</Link></p>
                        <p>If you need help right away, you can hire me for hourly consulting through Superpeer, a video call service: <a href="https://superpeer.com/marcysutton">https://superpeer.com/marcysutton</a></p>
                        
                        <h2>A note about audits</h2>
                        <p>I’m not taking on any <a href="https://en.wikipedia.org/wiki/Web_accessibility#Website_accessibility_audits">accessibility site or app audits</a>, as they’re not my jam. If you’re looking to have this sort of work done, I’d recommend contacting <a href="https://knowbility.org/">Knowbility</a>, <a href="https://www.levelaccess.com/">Level Access</a>, or <a href="https://deque.com">Deque Systems</a>. If you’d prefer to work with an individual over an organization, contact <a href="https://www.tolu.xyz/">Tolu Abegbite</a>.</p>
                        <p>Note: if you’re a disabled accessibility testing / auditing consultant who’d like to be recommended on this page, <Link to="/contact">let me know</Link>!</p>
                    </section>
                    <aside className="page-post-aside breathing-room">

                        <h2>In the meantime&hellip;</h2>
                        <p>I have some accessibility training available online. Check out these resources:</p>
                        <ul>
                            <li>Self-paced accessibility workshops, as well as a free email course: <a href="https://testingaccessibility.com">TestingAccessibility.com</a></li>
                            <li>Frontend Masters video courses: <a href="https://frontendmasters.com/teachers/marcy-sutton/" target="_blank" rel="noopener noreferrer" title="Opens in a new window">Accessibility in JavaScript Applications</a></li>
                            <li>Egghead video course: <a href="https://egghead.io/courses/start-building-accessible-web-applications-today" target="_blank" rel="noopener noreferrer" title="Opens in a new window">Start Building Accessible Web Applications Today</a></li>
                            <li>Accessibility chapter in <a href="https://www.smashingmagazine.com/2018/09/smashing-book-6-release/" target="_blank" rel="noopener noreferrer" title="Opens in a new window">Smashing Book 6: New Frontiers in Web Design</a></li>
                            <li><Link to="/web-accessibility-resources">Additional accessibility resources</Link></li>
                        </ul>
                        <h2>Some relevant articles</h2>
                        <ul>
                            <li><Link to="/outsider-leverage-accessibility/">Outsider Leverage & Accessibility</Link></li>
                            <li><Link to="/live-coding-accessibility/">Live Coding Accessibility</Link></li>
                            <li><Link to="/links-vs-buttons-in-modern-web-applications">Links vs. Buttons in Modern Web Applications</Link></li>
                            <li><a href="https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/" target="_blank" rel="noopener noreferrer" title="Opens in a new window">User testing of accessible client-side routing techniques with Fable Tech Labs (Gatsby blog)</a></li>
                        </ul>
                    </aside>
                </div>
            </Layout>
        </BodyClassName>
    )
}

export default ServicesPage;