import user from "../assets/icons/user.svg";

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
        img: user
    },
    {
        id: 3,
        body: "“Mukhriddin was extremely easy and pleasant to work with and he truly cares about the project being a success. Mukhriddin has a high level of knowledge and was able to work on my Full stack application without any issues.”",
        fullName: "Avaz Aminov",
        position: "PM - Solution Lab",
        img: user
    }
];






export {
    skills,
    testimonials
};