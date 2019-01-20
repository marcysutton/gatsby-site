import { Link } from 'gatsby'
import React from 'react'

let date = new Date();

const Footer = ({ className }) => (
    <footer role="contentinfo" className="site-footer">
        <div className="footer-copyright">
            <p className="copyright">&copy; 2003-{date.getFullYear()} Marcy Sutton.</p>
        </div>
        <p className="back-to-top"><a href="#header" title="Skip back to top of page">
            <span aria-hidden="true">▲ <span className="text">top</span></span>
            <span className="visually-hidden">Back to top</span>
        </a></p>
        <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/privacy'>Privacy Policy</Link></li>
            <li><Link to='/accessibility'>Accessibility</Link></li>
        </ul>
    </footer>
)

export default Footer
