import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import ReactHtmlParser from 'react-html-parser'

import MoreLink from './more-link';

const MediaGrid = ({ className, subtitle, items, itemLabel }) => (
    <div className={`media-grid ${className}`}>
      <h2>
        {subtitle}
      </h2>
      <ul>{ items.map((items) => {
        return <li key={ items.node.id }>
          { ReactHtmlParser(items.node.excerpt) }
          <Link to={items.node.link}>{
              ReactHtmlParser(items.node.title)
            }</Link>
        </li>
      }) 
    }</ul>
    <MoreLink itemLabel={itemLabel} />
    </div>
)

MediaGrid.propTypes = {
  items: PropTypes.array,
}

MediaGrid.defaultProps = {
  items: [],
}

export default MediaGrid
