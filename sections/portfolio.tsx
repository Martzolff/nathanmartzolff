import Image from "next/image"
import { FC } from "react";
import { useParallax } from "react-scroll-parallax";
import { ProjectProps } from "../interfaces";

const Portfolio: FC = () => {

    const { ref } = useParallax({ speed: -25 });

    const projects: ProjectProps[] = [
        {name: 'Pixtrip', description: 'Pixtrip is an app made to help users discover local places around them.\nThe user can complete "trips" and win coupon codes for local traders.', image: 'pixtrip', ios: 'https://itunes.apple.com/app/id1576183886'},
        {name: 'Doggotime', description: 'Doggotime is a social app made to let users add and discover places to walk their dog.\nThe user can add walks to his fav list, add and like comments and many other features.', image: 'doggotime', android: 'https://play.google.com/store/apps/details?id=com.nathanmartzolff.doggotime', ios: 'http://itunes.apple.com/app/id1600306497'},
        {name: 'Kiwigames', description: 'Kiwigames is an online board game platform.\nThe players can join a lobby with their friends and play a game from anywhere in the world.', image: 'kiwigames', isInDevelopment: true},
    ]

    return (
        <section id="portfolio" ref={ref}>
            <h2>portfolio</h2>
            <div className="projects">
                {
                    projects.map((project, key) => 
                        <Project 
                            key={key}
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                            android={project.android}
                            ios={project.ios}
                            isInDevelopment={project.isInDevelopment}
                        />
                    )
                }
            </div>
        </section>
    )
}

const Project: FC<ProjectProps> = ({name, description, image, link, android, ios, isInDevelopment}) => {
    return (
        <div className="project">
            <h3>{name}</h3>
            <Image src={`/static/img/projects/${image}.png`} height={2892} width={1530} alt={name} />
            <div className="details">
                <p>{description}</p>
                {isInDevelopment && <span>👷 Still in development</span>}
                {link && <a href={link} target="_blank" rel="noopener noreferrer">👉 Website</a>}
                {android && <a href={android} target="_blank" rel="noopener noreferrer">👉 Android</a>}
                {ios && <a href={ios} target="_blank" rel="noopener noreferrer">👉 iOS</a>}
            </div>
        </div>
    )
}

export default Portfolio