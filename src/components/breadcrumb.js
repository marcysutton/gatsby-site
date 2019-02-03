import React from 'react'
import { Link } from 'gatsby'

const Breadcrumb = ({ section }) => (
    <Link className="breadcrumb" to={`/${section}`}>
        <span aria-hidden="true">◀</span>  <span className="text">Back to {section}</span>
    </Link>
)

export default Breadcrumb
