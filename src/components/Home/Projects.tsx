import { Project } from "@/types/home";

interface ProjectsProp{
    projects: Project[];
}

export const Projects = ({projects}: ProjectsProp) => {
    return(
        <div>
            <h2>projetos recentes</h2>

            <ul>
                {projects.map(({slug,name,image})=>   (
                    
                ))}              
            </ul>
        </div>
    );
};