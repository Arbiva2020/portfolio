import React from 'react'
import ProjectItem from '../components/ProjectItem'
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"


const Projects = () => {
    return (
        //everything above medium size of screen will get padding of 20 so it wont hide behind the icons
        <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolorem omnis quae repellat provident eaque molestias error 
                incidunt unde. Incidunt quas repellendus dicta blanditiis at 
                recusandae doloribus delectus vel ducimus neque?
            </p>
            {/* //when grid is larger than small it will displat 2 results on the same col, else it will display 1 */}
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={project1} title="HuluClone"/>
                <ProjectItem img={project2} title="AmazoneClone"/>
                <ProjectItem img={project3} title="CovidTracker"/>
                <ProjectItem img={project1} title="huluClone"/>
            </div>
        </div>
    )
}
 export default Projects;