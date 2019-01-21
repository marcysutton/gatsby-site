import React from 'react'

const MoreLink = ({ itemLabel }) => (
    <p className="more-link">
        <a href={ `/${ itemLabel }` }>
            <span className="more-link-text">All { itemLabel }</span>
            <span aria-hidden="true"> ▶</span>
        </a>
        {/* <span aria-hidden="true"> ▾</span> */}
    </p>
)

export default MoreLink
