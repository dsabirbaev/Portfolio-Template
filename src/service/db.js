import user from "../assets/icons/user.svg";
import user2 from "../assets/images/user2.png";
import js from "../assets/icons/skills/javscript.svg";
import ts from "../assets/icons/skills/typescript.svg";
import react from "../assets/icons/skills/react.svg";
import nextjs from "../assets/icons/skills/nextjs.svg";

import nodejs from "../assets/icons/skills/nodejs.svg";
import express from "../assets/icons/skills/express.svg";
import nest from "../assets/icons/skills/nest.svg";
import socket from "../assets/icons/skills/socket.svg";

import sql from "../assets/icons/skills/postgresql.svg";
import mongo from "../assets/icons/skills/mongodb.svg";
import sass from "../assets/icons/skills/sass.svg";
import tailwind from "../assets/icons/skills/tailwindcss.svg";

import laravel from "../assets/icons/skills/laravel.svg";
import vue from "../assets/icons/skills/vue.svg";
import nuxt from "../assets/icons/skills/nuxt.svg";
import git from "../assets/icons/skills/git.svg";

import uzum from "../assets/images/uzum.png";
import najot from "../assets/images/najot.png";
import itransition from "../assets/images/itransition.png";

import uzumuz from "../assets/images/uzumuz.png";
import uzumnasiya from "../assets/images/uzumnasiya.png";
import cambly from "../assets/images/cambly.png";
import link from "../assets/icons/link.svg";
const skills = [
    {
        id: 1,
        title: "Javascript",
        img: js
    },
    {
        id: 2,
        title: "Typescript",
        img: ts
    },
    {
        id: 3,
        title: "React",
        img: react
    },
    {
        id: 4,
        title: "Next.js",
        img: nextjs
    },
    {
        id: 5,
        title: "Node.js",
        img: nodejs
    },
    {
        id: 6,
        title: "Express.js",
        img: express
    },
    {
        id: 7,
        title: "Nest.js",
        img: nest
    },
    {
        id: 8,
        title: "Socket.js",
        img: socket
    },
    {
        id: 9,
        title: "PostgreSQL",
        img: sql
    },
    {
        id: 10,
        title: "MongoDB",
        img: mongo
    },  
    {
        id: 11,
        title: "Sass/Scss",
        img: sass
    },  
    {
        id: 12,
        title: "Tailwindcss",
        img: tailwind
    },   
    {
        id: 13,
        title: "Laravel (PHP)",
        img: laravel
    },  
    {
        id: 14,
        title: "Vue.js",
        img: vue
    },   
    {
        id: 15,
        title: "Nuxt.js",
        img: nuxt
    },  
    {
        id: 16,
        title: "Git",
        img: git
    },   
];


const testimonials = [{
        id: 1,
        body: "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
        fullName: "Dilshod Buymurodov",
        position: "Founder - Paymart.uz",
        img: user
    },
    {
        id: 2,
        body: "“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”",
        fullName: "Djasur Djumaev",
        position: "Co-Founder - Uzum.uz",
        img: user2
    },
    {
        id: 3,
        body: "“Mukhriddin was extremely easy and pleasant to work with and he truly cares about the project being a success. Mukhriddin has a high level of knowledge and was able to work on my Full stack application without any issues.”",
        fullName: "Avaz Aminov",
        position: "PM - Solution Lab",
        img: user
    }
];


const experience = [
    {
        id: 1,
        position: "Team Lead (Senior Software engineer)",
        date: "May 2023 - Present",
        body:["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Ut pretium arcu et massa semper, id fringilla leo semper.", "Sed quis justo ac magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        img: uzum
    },
    {
        id: 2,
        position: "Head Teacher & Tech Interviewer",
        date: "Apr 2022 - Persen",
        body:["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Ut pretium arcu et massa semper, id fringilla leo semper.", "Sed quis justo ac magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        img: najot
    },
    {
        id: 3,
        position: "Senior Software engineer",
        date: "Jul 2021 - 2022 Oct",
        body:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
        img: itransition
    }

];


const work = [
    {
        id: 1,
        title: "Uzum.uz",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        tools: ["Vue.js", "Nuxt.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Navie.UI", "Git"],
        img: uzumuz,
        link: link
    },
    {
        id: 2,
        title: "Uzum nasiya",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        tools: ["Vue.js", "Nuxt.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Navie.UI", "Git"],
        img: uzumnasiya,
        link: link
    },
    {
        id: 3,
        title: "Cambly.com",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        tools: ["Vue.js", "Nuxt.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwindcss", "Figma", "Cypress", "Navie.UI", "Git"],
        img: cambly,
        link: link
    },
]





export {
    skills,
    testimonials,
    experience,
    work
};