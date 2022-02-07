import Image from "next/image"
import { FC } from "react"
import { useParallax } from "react-scroll-parallax"

const Skills: FC = () => {

    const { ref } = useParallax({ speed: 100 })

    const skills = [
        'firebase',
        'flutter',
        'javascript',
        'html',
        'dart',
        'mysql',
        'php',
        'css',
        'react',
    ]
    
    return (
        <section id="skills" ref={ref} className="full-screen">
            <h2>skills</h2>
            {skills.map((skill, key) => <Skill 
                key={key}
                skill={skill}
            />
            )}
        </section>
    )
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