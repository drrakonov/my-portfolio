import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { lowerHeading, platforms } from "@/data";
import AnimatedContent from "@/Reactbits/AnimatedContent/AnimatedContent";
import TiltedCard from "@/Reactbits/AnimatedContent/TiltedCard";

const upperHeading: string = '<About Me />'

const Hero = () => {
    return (
        <div className="pb-20 md:pt-10" id="about">
            <div>
                <Spotlight className="-top-40 -left-10 
                md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh]
                w-[50vw]" fill="white" />
                <Spotlight className="top-10 left-80 h-[80vh] w-[50vw]" fill="white" />
            </div>
            <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white opacity-50 dark:bg-black">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            </div>
            <div className="flex relative justify-center my-15 md:my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl
                    lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-4xl font-bold
                        text-center text-blue-100 max-w-80">
                        {upperHeading}
                    </h2>
                    <div className="flex flex-col 600bp:flex-row justify-center items-center pt-20">
                        <TiltedCard 
                            imageSrc="/images/AbhayProfile.png"
                        />
                        <div className="flex flex-col justify-center items-center">
                            <TextGenerateEffect
                                className="text-center text-wrap text-[40px]
                            md:text-5xl lg:text-5xl"
                                words={lowerHeading}
                            />
                            <AnimatedContent
                                children={<a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MagicButton />
                                </a>}
                            />
                            <div className="flex items-center pt-10 gap-10">
                                {platforms.map(({ link, icon }) => (
                                    <a
                                        href={link}
                                        key={icon}
                                        target="_blank"
                                        className="border border-white/[0.2]
                                        rounded-full bg-black lg:w-12 lg:h-12 w-10 h-10
                                        flex justify-center items-center">
                                        <img
                                            src={icon}
                                            alt={link}
                                            className="p-2"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;