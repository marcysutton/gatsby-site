import { Link } from 'gatsby'
import React from 'react'

let date = new Date();

const Footer = ({ className }) => (
    <footer role="contentinfo" className="site-footer">
        <p className="back-to-top">
            <a href="#top" id="skip-to-top" title="Skip back to top of page">
                <span aria-hidden="true">▲ <span className="text">top</span></span>
                <span className="visually-hidden">Back to top</span>
            </a>
        </p>
        <ul>
            <li><Link to='/about' activeClassName="active">About</Link></li>
            <li><Link to='/contact' activeClassName="active">Contact</Link></li>
            <li><Link to='/privacy'>Privacy Policy</Link></li>
            <li><Link to='/accessibility'>Accessibility</Link></li>
        </ul>
        <div className="footer-copyright">
            <p className="copyright">
                Made with ♥ and <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby.js</a>.
                &copy;&nbsp;2003-{date.getFullYear()} Marcy Sutton.
            </p>
        </div>
    </footer>
)

export default Footer
