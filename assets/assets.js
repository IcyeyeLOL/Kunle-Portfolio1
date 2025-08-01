import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import v10 from './v10.png';
import backend from './backend.png';
import frontend from './front-end.png';
import machine from './machine.png';
import devops from './devops.png';
import github from './github.png';
import leetcode from './leetcode.png';
import linkedin from './linkedin.png';


export const assets = {
    backend,
    machine,
    devops,
    github,
    leetcode,
    linkedin,


    frontend,
    v10,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};


export const workData = [
    {
        title: 'Wrestle Bet',
        description: 'Full Stack Application',
        bgImage: '/images/work-1.png',
        projectUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeF6oR7nhJM8lBy98eXVI9vixQiKGlUVSrcl8sjjad6emo6uA/viewform?usp=header',
    },
    {
        title: 'Task Tracker',
        description: 'Back-end Application',
        bgImage: '/images/work-2.png',
        projectUrl: 'https://github.com/IcyeyeLOL/Task-Tracker/blob/master/src/test/java/com/devtiro/tasks/domain/entities/Task.java'
    },
    {
        title: 'Data Visualization & Analytics',
        description: 'Cloud & DevOps Service',
        bgImage: '/images/work-3.png',
        projectUrl: "https://drive.google.com/file/d/1b7KK8W86bINtB8aUFZb29bWWs-Wyis_J/view?usp=sharing"
    },
    {
        title: 'Sales Forecasting & Data Enrichment',
        description: 'Machine Learning',
        bgImage: '/images/work-4.png',
        projectUrl: 'https://github.com/IcyeyeLOL/Forecasting-Prediction-ML/blob/main/Sales.py'
    },
]

export const serviceData = [
    { icon: assets.frontend, title: 'Front-end', description: 'Building responsive user interfaces and interactive web experiences using modern frameworks like React, Next.js, and Angular...', link: '' },
    { icon: assets.backend, title: 'Back-end', description: 'Developing robust server-side applications, APIs, and database architectures that power modern web and mobile applications...', link: '' },
    { icon: assets.machine, title: 'Cloud & DevOps Service', description: 'Implementing scalable cloud infrastructure, CI/CD pipelines, and automated deployment solutions for seamless user experiences...', link: '' },
    { icon: assets.devops, title: 'Machine Learning', description: 'Creating intelligent systems and data-driven solutions using AI/ML algorithms to solve complex business problems and enhance automation...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript,React Js, Next.Js, AWS, SpringBoot,Typescript,Python and some SQL lol' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Enrolled in Northwestern for a Computer Science Degree ' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 30+ freelance projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git,assets.v10
];