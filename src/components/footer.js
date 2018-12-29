import { Link } from 'gatsby'
import React from 'react'

let date = new Date();

const Footer = ({ className }) => (
    <footer role="contentinfo" className="site-footer">
        <p className="copyright">&copy; 2003-{date.getFullYear()} Marcy Sutton.</p>
        <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/privacy'>Privacy Policy</Link></li>
            <li><Link to='/accessibility'>Accessibility</Link></li>
        </ul>
        <p class="skip-links">
            <a href="#header">Back to top</a>
        </p>
    </footer>
)

export default Footer
