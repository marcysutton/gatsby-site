import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import ReactHtmlParser from 'react-html-parser'

import MoreLink from './more-link'

const List = ({ className, listName, subtitle, items, allItems = false, linkNewWindow = false }) => (
    <div className={`list ${className}`}>
        { subtitle ? <h2 className="subhead">{subtitle}</h2> : null }
        <ul>{ items.map((items) => {
            return <li key={ items.node.id }>
                <a className="item"
                    target={ linkNewWindow ? '_blank' : null }
                    rel={ linkNewWindow ? 'noopener' : null }
                    href={ items.node.slug || items.node.link.split('#new_tab')[0] }>
                  { ReactHtmlParser(items.node.title) }
                </a>
                { items.node.excerpt ? ReactHtmlParser(items.node.excerpt) : null }
            </li>
            }) 
        }</ul>
        { allItems ? null : <MoreLink itemLabel={listName} /> }
    </div>
)

List.propTypes = {
  items: PropTypes.array,
  listName: PropTypes.string,
  subtitle: PropTypes.string
}

List.defaultProps = {
  items: [],
  listName: '',
  subtitle: ''
}

export default List
