import React, {useState} from 'react'
import { Link } from 'gatsby'

const NewsletterForm = ({className}) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);

    // your generated URL here //
    const baseURL = `https://app.convertkit.com/forms/1688519/subscriptions`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            const res = await fetch(baseURL, {
                method: 'post',
                body: formData,
                headers: {
                    accept: 'application/json',
                },
            });
            // setEmail('');
            const json = await res.json();
            if (json.status === 'success') {
                setStatus('SUCCESS');
                return;
            } else if (json.status === 'failed') {
                setStatus('ERROR');
            }
        } catch (err) {
            setStatus('ERROR');
        }
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    };

    return (
        <div className={`newsletter-wrap ${className}`}>
            <h3 id="newsletter-signup">Join my mailing list to keep up to date with the latest!</h3>
            <form
                className="newsletter__form"
                action={baseURL}
                method="post"
                onSubmit={handleSubmit}
                >
                <input
                    className="newsletter__field"
                    type="email"
                    aria-label="Your email"
                    id="email_address"
                    name="email_address"
                    placeholder="Email address"
                    onChange={handleInputChange}
                    value={email}
                    required
                />

                <button type="submit">Subscribe</button>
            </form>

            <div aria-live="polite">
                {status === 'SUCCESS' && <p><span aria-hidden="true">✨</span> Please check your inbox to confirm your subscription. <span aria-hidden="true">✨</span></p>}
                {status === 'ERROR' && <p><span aria-hidden="true">❌ </span>Oops, Something went wrong! please try again.<span aria-hidden="true"> ❌</span></p>}
            </div>
            <p className="privacy-note">I will not sell or share your information, period. Read my <Link to="/privacy">Privacy Policy</Link></p>
        </div>
    );
}

export default NewsletterForm
