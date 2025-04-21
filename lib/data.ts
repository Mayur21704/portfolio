import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'mayur72104@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Mayur, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Mayur21704' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/mayur-chauhan-58317a2b1/',
    },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Recoil',
            icon: '/logo/recoil.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Tourista',
        slug: 'tourista',
        liveUrl: 'https://complete-tourista-frontend-yaas.vercel.app/',
        year: 2025,
        description: `
      A comprehensive travel booking platform developed for streamlining the booking process for both flights and hotels. Integrated with the Amadeus API, the platform provides real-time flight details, including availability, pricing, and schedules, ensuring up-to-date information for travelers. The platform also offers an intuitive hotel booking system with powerful search and filter functionalities. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>✈️ **Flight Booking System:** Real-time flight availability, pricing, and schedule integration with Amadeus API</li>
        <li>🏨 **Hotel Reservation:** Seamless hotel booking with detailed listings and filtering options</li>
        <li>🔍 **Search & Filters:** Intuitive search functionality for flights and hotels with customizable filters</li>
        <li>📱 **Fully Responsive:** Optimized for mobile, tablet, and desktop devices</li>
        <li>⚡ **Fast Performance:** Optimized React.js frontend with caching and efficient API handling</li>
      </ul><br/>
      
      Technical Highlights:<br/>
      <ul>
        <li>Integrated **Amadeus API** to fetch real-time flight and hotel data</li>
        <li>Developed UI components using **MUI** for a sleek and modern design</li>
        <li>Implemented state management with **ReduxJS** and **RTK Query** for seamless data fetching and caching</li>
        <li>Utilized **Firebase** for user authentication and secure session management</li>
        <li>Integrated **Cloudinary** for optimized image hosting and media delivery</li>
        <li>Ensured fast, responsive performance with optimized React.js components</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ **Backend:** Integrated Amadeus API for flight and hotel data; configured Firebase for user authentication</li>
        <li>🎨 **Frontend:** Built all UI components using **React.js** and **MUI**, ensuring a responsive design optimized for all devices</li>
        <li>🔄 **State Management:** Implemented **ReduxJS** and **RTK Query** for efficient state management and data caching</li>
        <li>🖥️ **User Authentication:** Set up **Firebase** for secure login and session management</li>
        <li>🚀 **Deployment:** Configured CI/CD pipelines for smooth production deployment</li>
        <li>🧩 **Third-Party Integration:** Integrated **Cloudinary** for image hosting and **Amadeus API** for real-time data fetching</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'Express.js',
            'ReduxJS',
            'RTK Query',
            'MUI',
            'Firebase',
            'Cloudinary',
            'Amadeus',
        ],
        thumbnail: '/projects/thumbnail/Tourista.png',
        longThumbnail: '/projects/long/Tourista.png',
        images: [
            '/projects/images/Tourista-1.png',
            '/projects/images/Tourista-2.png',
            '/projects/images/Tourista-3.png',
            '/projects/images/Tourista-4.png',
        ],
    },
    {
        title: 'Zentry',
        slug: 'zentry',
        liveUrl: 'https://zentry-eight.vercel.app/#nexus',
        year: 2024,
        description: `
      A visually dynamic frontend website developed using **GSAP** for advanced animations and transitions. The site leverages **React.js** for building the UI, along with **React-Icons** for an enhanced icon set and **React-Use** for optimized hooks. The animations powered by **GSAP** bring engaging effects and smooth transitions to improve the user experience. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🎞️ **GSAP Animations:** Smooth, high-performance animations for elements, transitions, and scrolling effects</li>
        <li>⚙️ **React Hooks:** Efficient state management and reusable logic with **React-Use**</li>
        <li>🖼️ **Interactive UI:** Dynamic and interactive components with seamless animations</li>
        <li>📱 **Responsive Design:** Fully responsive across devices, ensuring a consistent experience on mobile, tablet, and desktop</li>
        <li>⚡ **Performance Optimized:** Leveraged **GSAP**'s performance features to ensure smooth animations with minimal load times</li>
      </ul><br/>
      
      Technical Highlights:<br/>
      <ul>
        <li>Implemented **GSAP** for advanced animations and smooth scroll effects on key sections of the site</li>
        <li>Built reusable UI components using **React.js** and **React-Icons** for intuitive design elements</li>
        <li>Utilized **React-Use** hooks to improve state management and simplify component logic</li>
        <li>Optimized performance by using **GSAP**'s built-in features to reduce unnecessary re-renders and enhance responsiveness</li>
        <li>Ensured cross-browser compatibility and fast loading speeds through best practices in React development</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ **Animation Integration:** Developed and integrated complex animations using **GSAP** for dynamic transitions and scrolling effects</li>
        <li>🎨 **UI Development:** Built intuitive UI components using **React.js** and **React-Icons**, ensuring a smooth, interactive user experience</li>
        <li>🔄 **State Management:** Implemented **React-Use** hooks for simplified state handling and optimized reactivity</li>
        <li>📱 **Responsive Design:** Ensured full responsiveness using **CSS** and **media queries**, providing a seamless experience on all devices</li>
        <li>⚡ **Performance Optimization:** Employed performance best practices to ensure smooth animations and fast load times</li>
        <li>🧩 **Cross-Browser Compatibility:** Ensured consistent appearance and functionality across modern browsers</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'GSAP',
            'React-Icons',
            'React-Use',
            'CSS',
            'HTML',
        ],
        thumbnail: '/projects/thumbnail/Zentry.png',
        longThumbnail: '/projects/long/Zentry.png',
        images: [
            '/projects/images/zentry-1.png',
            '/projects/images/zentry-2.png',
            '/projects/images/zentry-3.png',
        ],
    },
    {
        title: 'Ochi',
        slug: 'ochi',
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2024,
        description: `
      A visually engaging frontend design that features an interactive eye animation following the mouse movement. This project utilizes **Framer Motion** for smooth animations, **GSAP** for high-performance motion effects, and **Locomotive Scroll** for a smooth, scroll-driven experience. The eye animation effect reacts dynamically to user input, creating an immersive experience. A harmonious color combination has been used throughout the design to ensure a balanced and visually appealing interface. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>👁️ **Eye Animation:** Interactive eyes that follow the mouse movement, powered by **GSAP** and **Framer Motion** for smooth and responsive effects</li>
        <li>🌀 **Smooth Scrolling:** Enhanced scroll experience with **Locomotive Scroll** for smooth transitions and parallax effects</li>
        <li>🎞️ **Framer Motion Animations:** Fluid transitions, scroll-based animations, and custom motion effects for a rich visual experience</li>
        <li>🎨 **Harmonious Color Palette:** Carefully chosen colors to create a visually balanced and engaging interface</li>
        <li>📱 **Fully Responsive:** Optimized for various device sizes, ensuring consistency across all screens</li>
      </ul><br/>
      
      Technical Highlights:<br/>
      <ul>
        <li>Created an interactive eye animation that follows the user's mouse movement using **GSAP** and **Framer Motion** for smooth transitions</li>
        <li>Integrated **Locomotive Scroll** for a scroll-based interaction with smooth parallax and scroll-triggered animations</li>
        <li>Implemented **Framer Motion** for advanced animations like fade-ins, scaling, and transitions to enhance user engagement</li>
        <li>Used a balanced color scheme, leveraging soft gradients and contrasts for a modern, stylish look</li>
        <li>Optimized the design to ensure smooth performance on all devices, focusing on responsiveness and fast rendering</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ **Animation Integration:** Developed the interactive eye-following animation using **GSAP** and **Framer Motion**</li>
        <li>🎨 **UI Design:** Created a modern, visually appealing UI with a well-balanced color palette</li>
        <li>🔄 **Smooth Scrolling:** Integrated **Locomotive Scroll** for parallax effects and smooth scrolling transitions</li>
        <li>⚡ **Animations & Effects:** Implemented smooth transitions and scrolling animations using **Framer Motion** for engaging UI interactions</li>
        <li>📱 **Responsive Design:** Ensured responsiveness using **CSS** and **media queries** for optimal performance across all devices</li>
        <li>🧩 **Cross-Browser Compatibility:** Ensured seamless performance and appearance across modern browsers</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'GSAP',
            'Framer Motion',
            'Locomotive Scroll',
            'React-Icons',
            'CSS',
            'HTML',
        ],

        thumbnail: '/projects/thumbnail/Ochi.png',
        longThumbnail: '/projects/long/Ochi.png',
        images: [
            '/projects/images/ochi-1.png',
            '/projects/images/ochi-2.png',
            '/projects/images/ochi-3.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'React Developer',
        company: 'Maxgen Technologies Pvt.Ltd',
        duration: 'Jul 2024 - Jan 2025',
    },
];
