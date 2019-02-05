import React from 'react'

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video">
        <iframe src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen>
        </iframe>
        { videoSrcURL.indexOf('vimeo') > -1 ? <script src="https://player.vimeo.com/api/player.js"></script> : null }
    </div>
)

export default Video
