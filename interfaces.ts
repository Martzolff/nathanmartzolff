export interface SkillProps {
    name: string;
    fill: number;
}

export interface ProjectProps {
    name: string;
    description: string;
    image: StaticImageData;
    stack: string[];
    link?: string;
    android?: string;
    ios?: string;
    isInDevelopment?: boolean;
}
