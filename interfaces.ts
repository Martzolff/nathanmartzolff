export interface SkillProps {
    name: string;
    fill: number;
}

export interface ProjectProps {
    name: string;
    description: string;
    image: string;
    stack: string[];
    link?: string;
    android?: string;
    ios?: string;
    isInDevelopment?: boolean;
}
