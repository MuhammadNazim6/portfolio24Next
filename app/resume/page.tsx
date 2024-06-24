"use client"

import { info } from 'console'
import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaReact, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs} from 'react-icons/si'

const about = {
  title:'About me',
  description:'ggggggggghhhhhhhgggg',
  info:[
    {
      fieldName: "Name",
      fieldValue: "Like Coleman"
    },
    {
      fieldName: "Phone",
      fieldValue: "9747324711"
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years"
    },
    {
      fieldName: "Skype",
      fieldValue: "luke.01"
    },
    {
      fieldName: "Nationality",
      fieldValue: "India"
    },
    {
      fieldName: "Email",
      fieldValue: "nazimnazz66@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi, Malayalam"
    },
  ]
}

const expeirience = {
  icon:'/assets/resume/badge.svg',
  title:'My expeirience',
  description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  items: [
    {
      company:"Tech solutions Inc.",
      position:"Juniour dev",
      duration:'2022 - 2023'
    },
    {
      company:"Tech solutions Inc.",
      position:"Juniour dev",
      duration:'2022 - 2023'
    },
    {
      company:"Tech solutions Inc.",
      position:"Juniour dev",
      duration:'2022 - 2023'
    },
    {
      company:"Tech solutions Inc.",
      position:"Juniour dev",
      duration:'2022 - 2023'
    },
    {
      company:"Tech solutions Inc.",
      position:"Juniour dev",
      duration:'2022 - 2023'
    },
  ]
}

const education = {
  icon:"/assets/resume/cap.svg",
  title:'My education',
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  items:[
    {
      institution:"Online course platform",
      degree: "Full stack web dev",
      duration:"2020 - 2023"
    },
    {
      institution:"Online course platform",
      degree: "Full stack web dev",
      duration:"2020 - 2023"
    },
    {
      institution:"Online course platform",
      degree: "Full stack web dev",
      duration:"2020 - 2023"
    },
    {
      institution:"Online course platform",
      degree: "Full stack web dev",
      duration:"2020 - 2023"
    },
    {
      institution:"Online course platform",
      degree: "Full stack web dev",
      duration:"2020 - 2023"
    },
    {
      institution:"Online course platform",
      degree: "Full stack web dev",
      duration:"2020 - 2023"
    },
  ]
}

const skills = {
  title:'My skills',
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "html 5"
    },
    {
      icon: <FaCss3/>,
      name: "css 3"
    },
    {
      icon: <FaJs/>,
      name: "javascript"
    },
    {
      icon: <FaReact/>,
      name: "react.js"
    },
    {
      icon: <SiNextdotjs/>,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css"
    },
    {
      icon: <FaNodeJs/>,
      name: "node.js"
    },
    {
      icon: <FaFigma/>,
      name: "figma"
    },
  ]
}

function Resume() {

  return (
    <div>Resume page</div>
  )
}

export default Resume