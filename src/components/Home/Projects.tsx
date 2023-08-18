import { Project } from "@/types/home";
import Image from "next/image";
import Link from "next/link";

interface ProjectsProp{
    projects: Project[];
}

export const Projects = ({projects}: ProjectsProp) => {
    return(
        <div>
            <h2>projetos recentes</h2>

            <ul>
                {projects.map(({slug,name,image}, index) =>   (
                   <link href="{'/projects/${slug}'} key={name + index}">
                       <li>
                          <Image
                            src={image.url}
                            alt={image.alt}
                            width={300}
                            height={300}
                            className=""
                          />
                       </li>
                   </link>
                ))}              
            </ul>
        </div>
    );
};