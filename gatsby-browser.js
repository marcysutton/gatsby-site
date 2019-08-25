/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
exports.onRouteUpdate = ({ location, prevLocation }) => {
    if (prevLocation !== null) {
        const skipLink = document.querySelector('.routeSkipLink')
        if (skipLink) {
            skipLink.focus()
        }
    }
}
