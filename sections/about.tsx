import { FC } from "react"
import { Fade } from "react-awesome-reveal"
import { Parallax } from "react-scroll-parallax"

const About: FC = () => {
    return (
        <section id="about" className="full-screen">
            <Parallax speed={-20}>
                <h2>about me</h2>
                <p>New technologies in their globality are my passion. I'm always learning something new and I love it.</p>
                <p>Flutter, React and PHP are my biggest strenghts, but I'm always ready to learn.</p>
                <p>I love making PWA and mobile apps (like, <span className="bold">a lot</span>).</p>
                <p>If you want to know more about my experience and my journey through coding, you can check <a href="/static/file/CV Nathan Martzolff.pdf" target="_blank" rel="noopener noreferrer">my resume</a>.</p>
            </Parallax>
        </section>
    )
}

export default About