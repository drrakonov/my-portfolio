import { codingPlatforms } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full py-6 flex md:flex-row flex-col justify-between items-center gap-2">
      <div>
        <p className="text-sm text-gray-400">Copyright © 2025 Abhay Pratap Singh</p>
      </div>
      <div className="flex items-center gap-3 justify-center">
        {codingPlatforms.map(({ link, icon }) => (
          <a
            href={link}
            key={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative border border-white/[0.2] rounded-full bg-black lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center"
          >
            <Image fill={true} src={icon} alt={link} className="p-2 object-contain" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
