import { Records } from "@/data";
import { Button } from "./ui/MovingBorder";

const heading = '<Records />'
const Achievements = () => {
    return (
        <div className="py-25 flex flex-col justify-center items-center" id="Achievements">
            <h2 className="uppercase tracking-widest text-4xl font-bold
                        text-center text-blue-100 max-w-80">
                {heading}
            </h2>
            <div className="flex flex-wrap items-center justify-center
            p-4 gap-x-24 gap-y-10 mt-15">
                {Records.map(({id, title, desc}) => (
                    <Button
                        key={id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        className="flex-1 text-white
                        border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex w-80 h-40 md:w-100 md:h-40 lg:flex-row flex-col 
                        lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {title}
                                </h1>
                                <p className="text-start text-white mt-3 
                                font-semibold">
                                    {desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Achievements;