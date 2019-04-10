import PropTypes from 'prop-types'
import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { Link } from 'gatsby'

import MoreLink from './more-link'

const List = ({ className, listName, subtitle, items, pathname = '', allItems = false, linkNewWindow = false }) => (
    <div className={`list ${className}`}>
        { subtitle ? <h2 className="subhead">{subtitle}</h2> : null }
        <ul>{ 
            items.filter((items) => {
              if (items.node.frontmatter.unlisted) {
                return null
              }
              return true
            }).filter((items) => {
                if (pathname.indexOf(items.node.frontmatter.path) === -1) {
                    return items.node
                }
                return null
            }).map((items) => {
            return <li key={ items.node.id }>
                <Link className="item"
                    target={ linkNewWindow ? '_blank' : null }
                    rel={ linkNewWindow ? 'noopener noreferrer' : null }
                    to={ items.node.frontmatter.path }>
                  { ReactHtmlParser(items.node.frontmatter.title) }
                </Link>
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
