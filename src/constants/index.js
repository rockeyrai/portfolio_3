
import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "MERN Stack Course",
        company_name: "Broadway Infosys",
        icon: '/brodway.png',
        iconBg: "#accbe1",
        date: "Aug 2024 - Present",
        points: [
            "Gained hands-on experience with Git and GitHub, understanding their crucial role in team collaboration and version control.",
            "Developed proficiency in React and core hooks such as useState and useRef, with a solid understanding of component-based architecture.",
            "Worked with various UI kits and libraries, including Next UI, ShadCN, and GSAP, to enhance design and interactivity.",
            "Established a strong foundation in JavaScript and backend principles to support full-stack development."
        ]
    },
    {
        title: "Data Structures and Algorithms",
        company_name: "APNA COLLEGE",
        icon: './apnacollege.png',
        iconBg: "#fbc3bc",
        date: "Sept 2024 - Present",
        points: [
            "Understanding of Time and Space Complexity, including O(n)",
            "Familiarity with Search and Sorting Algorithms",
            "Proficiency in working with 2D Arrays",
            "Problem Solving on algorithmic challenges such as: Maximum Subarray Sum,Mojority Element,Buy and Sell Stock,Container with Most Water Peak Index in a mountain Array,etc ",   
          ]
    },
    {
        title: "System Design for Beginners Course",
        company_name: "freeCodeCamp.org",
        icon: '/freecodecamp.png',
        iconBg: "#000000",
        date: "Oct 2024 - Nov 2024",
        points: [
            "Scalability - Design the system to handle increased loads efficiently and support growth over time.",
            "Reliability - Ensure the system maintains functionality under different conditions and minimizes downtime.",
            "Availability - Maximize the uptime of the system to ensure continuous accessibility for users.",
            "Performance - Optimize response time and system speed to improve user experience and support large traffic volumes."
          ]
    },
    {
        title: "HTML & CSS",
        company_name: "APNA COLLEGE",
        icon: './apnacollege.png',
        iconBg: "#a2d2ff",
        date: "Feb 2024 - Mar 2024",
        points: [
            "HTML Structure - Learned how to use HTML tags to structure content, like headings, paragraphs, and links.",
            "CSS Styling - Understood how CSS is used to style elements, such as colors, fonts, and layouts.",
            "Responsive Design - Gained knowledge of making web pages look good on any device using media queries.",
            "Box Model - Discovered the box model, which helps in understanding padding, borders, margins, and how elements are spaced."
          ]
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'ECommerce--v2',
        description: '"ECommerce--v2" is my second attempt at building an e-commerce project. After learning from my first try, I’m using the MERN stack (MongoDB, Express, React, Node.js) to create a more efficient and scalable platform.',
        link: 'https://github.com/rockeyrai/ECommerce--v2',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-green',
        name: 'portfolio_3',
        description: '"3D_portfolio" is a project where I showcase my personal information and skills in a unique way. Instead of a traditional static portfolio, I’ve included a 3D module to make it more interactive and engaging.',
        link: 'https://github.com/rockeyrai/portfolio_3',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'playGround',
        description: 'My "playground project" is a collection of mini-projects and games that I’ve created to help improve my skills. It’s a space where I experiment with different ideas, learn new technologies, and challenge myself. ',
        link: 'https://github.com/rockeyrai/playGround',
    },
];
