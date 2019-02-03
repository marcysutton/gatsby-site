import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, pathname }) => (
  <header
    className="site-header"
    role="banner"
  >
    <ul className="skip-links">
      <li><a href="#main" id="skip-link-main">Skip to main content</a></li>
    </ul>
    <div>
      <h1 className="site-logo" style={{ margin: 0 }}>
        <Link to="/" id="top" tabIndex="-1"
        >
          <span className="logotype-line1">Marcy</span>
          <span className="logotype-line2">Sutton</span>
          <span className="logotype-line3">.com</span>
        </Link>
      </h1>
      <nav>
        <ul>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/writing/" activeClassName="active" className={pathname && pathname.indexOf('post') > -1 ? 'active' : null}>
            Writing</Link>
          </li>
          <li>
            <Link to="/talks/" activeClassName="active" className={pathname && pathname.indexOf('talk') > -1 ? 'active' : null}>
            Talks</Link>
          </li>
          <li><Link to="/links/" activeClassName="active">Links</Link></li>
          <li><Link to="/about/" activeClassName="active">About</Link></li>
          <li><Link to="/contact/" activeClassName="active">Contact</Link></li>
          {/* <li><Link to="/search/" activeClassName="active">Search</Link></li> */}
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
