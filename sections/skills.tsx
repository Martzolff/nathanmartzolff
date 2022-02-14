import Image from "next/image"
import { FC } from "react"
import { useParallax } from "react-scroll-parallax"
import { SkillProps } from "../interfaces"

const Skills: FC = () => {

    const { ref } = useParallax({ speed: 100 })

    const skills: SkillProps[] = [
        {name: 'flutter', fill: 90},
        {name: 'react', fill: 87},
        {name: 'php', fill: 83},
        {name: 'javascript', fill: 78},
        {name: 'dart', fill: 67},
        {name: 'mysql', fill: 62},
        {name: 'firebase', fill: 60},
        {name: 'html', fill: 50},
        {name: 'css', fill: 50},
    ]

    return (
        <section id="skills" className="full-screen" ref={ref}>
            <h2>skills</h2>
            <ul>
                {skills.map((skill, key) => 
                    <li key={key}>
                        <span>{skill.name}</span>
                        <div className="fill-bg" data-fill={skill.fill}>
                            <div className="fill"></div>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    )
    
    /* return (
        <section id="skills" ref={ref} className="full-screen">
            <h2>skills</h2>
            {skills.map((skill, key) => <Skill 
                key={key}
                skill={skill}
            />
            )}
        </section>
    ) */
}

const Skill: FC<{skill: string}> = ({skill}) => {
    return (
        <div id={skill} className="skill-container">
            <div className="skill">
                <Image  
                    src={`/static/img/skills/${skill}.svg`}
                    layout="fill"
                    alt={skill} 
                />
            </div>
        </div>
    )
}

export default Skills