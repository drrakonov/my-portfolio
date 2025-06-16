import { projects } from "@/data";
import { PinContainer } from "./ui/ProjectCard";
import { FaLocationArrow } from "react-icons/fa";

const heading = '<Projects />'

const Projects = () => {
    return (
        <div className="py-20 flex flex-col justify-center items-center" id="projects">
            <h2 className="uppercase tracking-widest text-4xl font-bold
                        text-center text-blue-100 max-w-80">
                {heading}
            </h2>
            <div className="flex flex-wrap items-center justify-center
            p-4 gap-x-24 gap-y-25 lg:gap-y-10 mt-10">
                {projects.map(({
                    id,
                    title,
                    desc,
                    link,
                    iconList,
                    img
                }) => (
                    <div key={id} className="lg:min-h-[32.5rem] h-[20rem] flex 
                    items-center justify-center sm:w-96 w-[80vw]">   
                        <PinContainer title={'Visit'} href={link} >
                            <div className="relative flex items-center justify-center
                            sm:w-96 w-[80vw] overflow-hidden h-[200px] lg:h-[250px] mb-10">
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl
                                bg-[#13162d]">
                                    <img src="/bg.png" alt="bg-img" />
                                </div>
                                <img 
                                src={img} 
                                alt={title} 
                                className="z-10 absolute bottom-0"
                                />
                            </div>
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {title}
                            </h1>
                            <p className="lg:text-xl lg:font-normal font-light
                            text-sm line-clamp-2">
                                {desc}
                            </p>
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconList.map((icon, index) => (
                                        <div key={icon} className="border border-white/[0.2]
                                        rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8
                                        flex justify-center items-center" 
                                        style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                            <img 
                                            src={icon} 
                                            alt={icon} 
                                            className="p-2"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">Check Live Site</p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>)
}

export default Projects;