type Projects = {
    id: number;
    title: string;
    desc: string;
    link: string;
    img: string;
    iconList: string[];
}
type Platforms = { 
    link: string; 
    icon: string; 
}
type NavItems = {
    name: string;
    link: string
}

type Records = {
    id: number;
    title: string;
    desc: string;
}

type Skills = {
    id: number
    icon: string;
    name: string
}

export const lowerHeading: string = `Hi! I\'m Abhay Pratap Singh`




export const skills: Skills[] = [
  {
    id: 1,
    icon: '/images/skills/typescript.svg',
    name: 'TypeScript'
  },
  {
    id: 2,
    icon: '/images/skills/react.svg',
    name: 'React'
  },
  {
    id: 3,
    icon: '/images/skills/next.svg',
    name: 'Next.js'
  },
  {
    id: 4,
    icon: '/images/skills/tailwind.svg',
    name: 'TailwindCSS'
  },
  {
    id: 5,
    icon: '/images/skills/shadcn.svg',
    name: 'ShadCN'
  },
  {
    id: 6,
    icon: '/images/skills/prismaorm.svg',
    name: 'Prisma ORM'
  },
  {
    id: 7,
    icon: '/images/skills/mongodb-icon.svg',
    name: 'MongoDB'
  },
  {
    id: 8,
    icon: '/images/skills/docker.svg',
    name: 'Docker'
  },
  {
    id: 9,
    icon: '/images/skills/postman.svg',
    name: 'Postman'
  },
  {
    id: 10,
    icon: '/images/skills/git.svg',
    name: 'Git'
  },
  {
    id: 11,
    icon: '/images/skills/c++.svg',
    name: 'C++'
  },
  {
    id: 12,
    icon: '/images/skills/nodejs.svg',
    name: 'Node.js'
  },
  {
    id: 13,
    icon: '/images/skills/express.svg',
    name: 'Express.js'
  },
]

export const Records: Records[] = [
  {
    id: 1,
    title: 'Pupil on Codeforces',
    desc: 'Achieved the Pupil rank on Codeforces with consistent participation in contests.'
  },
  {
    id: 2,
    title: '2★ on CodeChef',
    desc: 'Earned a 2-star rating on CodeChef through regular contest participation and problem solving.'
  },
  {
    id: 3,
    title: '1660+ Rated LeetCode',
    desc: 'Solved over 600 problems on LeetCode, showcasing strong problem-solving skills.'
  },
  {
    id: 4,
    title: '441 Rated on AtCoder',
    desc: 'Participated in AtCoder contests and achieved a rating of 441.'
  }
];


export const NavItems: NavItems[] = [
    {name: 'About', link: '#about'},
    {name: 'Projects', link: '#projects'},
    {name: 'Skills', link: '#skills'},
    {name: 'Achievements', link: '#Achievements'},
]

export const platforms: Platforms[] = [
    {
        link: "https://www.linkedin.com/in/abhaypratapsingh5353/",
        icon: "/platforms/linkedin.svg"
    },
    {
        link: "https://github.com/drrakonov",
        icon: "/platforms/github.svg"
    },
    {
        link: "https://x.com/abhay5353",
        icon: "/platforms/xcom.svg"
    }
]

export const codingPlatforms: Platforms[] = [
    {
        link: "https://codeforces.com/profile/drakonov",
        icon: "/codingPlatforms/codeforces.svg"
    },
    {
        link: "https://leetcode.com/u/drakonov/",
        icon: "/codingPlatforms/leetcode.svg"
    },
    {
        link: "https://atcoder.jp/users/drakonov",
        icon: "/codingPlatforms/atcoder.png"
    },
    {
        link: "https://www.codechef.com/users/drakonov",
        icon: "/codingPlatforms/codechef.svg"
    }
]

export const projects: Projects[] = [
    {
        id: 1,
        title: 'BrainLink',
        desc: 'Share your all links with just one link',
        link: 'https://brainlink-frontend.vercel.app/',
        img: "/images/projects/brainlink.svg",
        iconList: ["/images/skills/react.svg", "/images/skills/tailwind.svg", "/images/skills/typescript.svg", "/images/skills/mongodb-icon.svg"]
    },
    {
        id: 2,
        title: 'Portfolio',
        desc: 'My Portfolio',
        link: 'https://drakonov-portfolio.vercel.app/',
        img: "/images/projects/myPortfolio.svg",
        iconList: ["/images/skills/react.svg", "/images/skills/tailwind.svg", "/images/skills/typescript.svg", "/images/skills/next.svg"]
    },
]
