

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

export const lowerHeading: string = `Hi! I\'m Abhay Pratap Singh`

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
    title: '1580+ Rated LeetCode',
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
    {name: 'Contact', link: '#contact'},
]

export const platforms: Platforms[] = [
    {
        link: "https://www.linkedin.com/in/abhaypratapsingh5353/",
        icon: "/link.svg"
    },
    {
        link: "https://github.com/drrakonov",
        icon: "git.svg"
    },
    {
        link: "https://x.com/abhay5353",
        icon: "twit.svg"
    }
]

export const codingPlatforms: Platforms[] = [
    {
        link: "https://codeforces.com/profile/drakonov",
        icon: "/codeforces.svg"
    },
    {
        link: "https://leetcode.com/u/drakonov/",
        icon: "leetcode.svg"
    },
    {
        link: "https://atcoder.jp/users/drakonov",
        icon: "leetcode.svg"
    },
    {
        link: "https://www.codechef.com/users/drakonov",
        icon: "codechef.svg"
    }
]

export const projects: Projects[] = [
    {
        id: 1,
        title: 'BrainLink',
        desc: 'Share your all links with just one link',
        link: 'https://brainlink-frontend-alw3.vercel.app/',
        img: "/brainlink.svg",
        iconList: ["/re.svg", "/tail.svg", "ts.svg", "mongodb-icon.svg"]
    },
    {
        id: 2,
        title: 'Portfolio',
        desc: 'My Portfolio',
        link: 'https://brainlink-frontend-alw3.vercel.app/',
        img: "/portfolio.svg",
        iconList: ["/re.svg", "/tail.svg", "ts.svg", "next.svg"]
    },
]
