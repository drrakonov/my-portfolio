import Image from "next/image"

interface SkillCardProps {
  logo: string
  name: string
}

const SkillCard = ({ logo, name }: SkillCardProps) => {
  return (
    <div className="bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-red-500/50 w-20 sm:w-24 md:w-32 lg:w-36 h-20 sm:h-24 md:h-32 lg:h-36 rounded-2xl flex flex-col justify-center items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-105 group cursor-pointer">
      <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
        <Image
          src={logo || "/placeholder.svg"}
          fill
          alt={name}
          className="object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <span className="text-gray-300 group-hover:text-white text-xs sm:text-sm md:text-base font-medium text-center px-1 transition-colors duration-300">
        {name}
      </span>
    </div>
  )
}

export default SkillCard
