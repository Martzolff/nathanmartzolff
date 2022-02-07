export interface ProjectProps {
    name: string;
    description: string;
    image: string;
    link?: string;
    android?: string;
    ios?: string;
    isInDevelopment?: boolean;
}
