import React from 'react'

const MoreLink = ({ itemLabel }) => (
    <p className="more-link">
        <a href={ `/${ itemLabel }` }>
            <span className="more-link-text">All { itemLabel }</span>
            <span aria-hidden="true">
                <svg className="icon icon-triangle-right" focusable="false" role="none">
                    <use xlinkHref="#icon-triangle-right"></use>
                </svg>
            </span>
        </a>
        {/* <span aria-hidden="true"> ▾</span> */}
    </p>
)

export default MoreLink
