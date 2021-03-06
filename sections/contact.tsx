import { FC, useState } from "react"

const Contact: FC = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [messageSent, setMessageSent] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const iconSize = 35

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        setIsLoading(true)
        await fetch('https://formsubmit.co/ajax/nathan.martzolff@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        })
        setIsLoading(false)
        setMessageSent(true)
        setTimeout(() => setMessageSent(false), 5000)
    }

    return (
        <section id="contact" className="full-screen">
            <h2>contact me</h2>
            <div className="contact-links">
                <a href="https://www.linkedin.com/in/nathan-martzolff-46a426170/" target="_blank" rel="noopener noreferrer">
                    <img src='static/img/contact/linkedin.svg' width={iconSize} height={iconSize} alt="LinkedIn" />
                </a>
                <a href="tel:+33644229129">
                    <img src='static/img/contact/telephone.svg' width={iconSize} height={iconSize} alt="Telephone" />
                </a>
                <a href="tel:+33644229129" id="telephone">+33 6 44 22 91 29</a>
                <a href="https://github.com/Martzolff" target="_blank" rel="noopener noreferrer">
                    <img src='static/img/contact/github.svg' width={iconSize} height={iconSize} alt="Github" />
                </a>
            </div>
            <form onSubmit={onSubmit}>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="John Doe" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="john.doe@gmail.com" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows={1} placeholder="Let's grab a coffee !" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
                <div className="send-message">
                    <input type="submit" value="send" id="send" />
                    <div id="loading" className={isLoading ? 'loading' : ''}><span>???</span></div>
                </div>
            </form>
            <span className={messageSent ? 'message-sent' : 'message-sent hide'}>Message sent</span>
        </section>
    )
}

export default Contact