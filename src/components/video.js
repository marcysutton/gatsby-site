import React from 'react'

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div style={{ 
        padding: `56.25% 0 0 0`,
        position: `relative`,
        marginBottom: `1em`
    }}>
        <iframe src={videoSrcURL}
            style={{
                position: `absolute`,
                top: `0`,
                left: `0`,
                width: `100%`,
                height: `100%`}}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen>
        </iframe>
        { videoSrcURL.indexOf('vimeo') > -1 ? <script src="https://player.vimeo.com/api/player.js"></script> : null }
    </div>
)

export default Video
