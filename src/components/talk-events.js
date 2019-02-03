import React from 'react'

const UpcomingTalks = () => (
    <>
        <h2>Upcoming Talks</h2>
        <ul id="upcoming-talks">
        <li className="offsite-link">
            <a href="http://www.csun.edu/cod/conference/2019/sessions/index.php/" target="_blank" rel="noopener noreferrer">
                <span className="inline-link">CSUN Assistive Tech Conference</span>
            </a><br />
            Anaheim, CA
            March 2019</li>
        <li className="offsite-link">
            <a href="https://events.drupal.org/seattle2019/builder" target="_blank" rel="noopener noreferrer">
                <span className="inline-link">DrupalCon</span>
            </a><br />
            Seattle, WA
            April 2019</li>
        <li className="offsite-link">
            <a title="Link opens in a new window" href="https://aneventapart.com/event/boston-2019" target="_blank" rel="noopener noreferrer">
                <span className="inline-link">An Event Apart</span>
            </a><br />
            Boston, MA
            May 2019</li>
        <li className="offsite-link">
            <a title="Link opens in a new window" href="https://frontendmasters.com/" target="_blank" rel="noopener noreferrer">
                <span className="inline-link">Frontend Masters</span>
            </a><br />
            Minneapolis, MN
            July 2019</li>
        <li className="offsite-link">
            <a href="https://aneventapart.com/event/chicago-2019" target="_blank" rel="noopener noreferrer">
                <span className="inline-link">An Event Apart</span>
            </a><br />
            Chicago, IL
            August 2019</li>
        <li className="offsite-link">
            <a href="https://www.meetup.com/a11ychi/" target="_blank" rel="noopener noreferrer">
                <span className="inline-link">Accessibility Chicago Meetup</span>
            </a><br />
            August 2019</li>
        <li className="offsite-link">
            <a title="Link opens in a new window" href="https://smashingconf.com/ny-2019/" target="_blank" rel="noopener noreferrer">
                <span className="inline-link">SmashingConf</span>
            </a><br />
            New York, NY
            October, 2019</li>
        </ul>
    </>
)

export default UpcomingTalks