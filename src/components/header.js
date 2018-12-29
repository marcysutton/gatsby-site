import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    className="site-header"
    role="banner"
  >
    <ul className="skip-links">
      <li><a href="#main">Skip to main content</a></li>
    </ul>
    <div>
      <h1 className="site-logo" style={{ margin: 0 }}>
        <Link
          to="/"
        >
          <span className="logotype-line1">Marcy</span>
          <span className="logotype-line2">Sutton</span>
          <span className="logotype-line3">.com</span>
        </Link>
      </h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/writing/">Writing</Link></li>
          <li><Link to="/talks/">Talks</Link></li>
          <li><Link to="/links/">Links</Link></li>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
          {/* <li><Link to="/search/">Search</Link></li> */}
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
