import SkillCard from "./ui/SkillCard";
import { skills } from "@/data";


const heading = '<Skills />'

const Skills = () => {
    return (
        <div className="py-20 flex flex-col justify-center items-center" id="skills">
            <h2 className="uppercase tracking-widest text-4xl font-bold text-center text-blue-100 max-w-80">
                {heading}
            </h2>

            <div className="mt-10 bg-gray-900/50 rounded-2xl w-[90%] max-w-5xl h-[400px] sm:h-[400px] md:h-[550px] p-4 
            overflow-y-auto border shadow shadow-slate-700">
                <div className="flex flex-wrap gap-4 justify-center">
                    {skills.map(({
                        id,
                        icon, 
                        name
                    }) => (
                        <SkillCard
                            key={id}
                            logo={icon}
                            name={name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;

