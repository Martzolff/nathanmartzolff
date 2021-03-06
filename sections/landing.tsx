import { FC, useEffect, useRef } from "react"

const Landing: FC = () => {

    const titleRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        titleRef.current!.className = 'landing-title loaded'
    })

    const scroll = () => {
        document.querySelector('#about')?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <section className="full-screen landing" id="landing">
            <p className="landing-title" ref={titleRef}>
                <span>hell<span className="spinning">o</span> </span> 
                <span className="shimmer">there</span>
            </p>
            <div id="scroll" onClick={scroll}></div>
        </section>
    )
}

export default Landing