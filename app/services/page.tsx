"use client"

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Solid foundation in HTML, CSS, JavaScript, and experience with modern frameworks like React and Next.js, I craft user-friendly and visually appealing web applications. '
  },
  {
    num: '02',
    title: 'UI/UX Designer',
    description: 'My expertise in design tools like Figma, combined with a deep understanding of user-centered design principles, allows me to create designs that not only look great but also solve user problems effectively.'
  },
  {
    num: '03',
    title: 'Backend development',
    description: 'With a solid foundation in Node.js and Express.js, and experience with databases like MongoDB and PostgreSQL, I build robust and scalable backend systems. My expertise includes API development, database management, and ensuring security and performance in web applications.'
  },
  {
    num: '04',
    title: 'SEO',
    description: 'I craft user-friendly and visually appealing web applications. My goal is to deliver high-quality, performant solutions that enhance user experiences and meet client needs.'
  },
]

import { motion } from "framer-motion"

function Services() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.7, duration: 0.4, ease: 'easeIn' }
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return <div key={index} className='flex-1 flex flex-col justify-center gap-5 group'>

              <div className="w-full flex justify-between items-center">
                <div className="text-3xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link href={'/'} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                  <BsArrowDownRight className='text-primary text-3xl' />
                </Link>
              </div>
              <h2 className='text-[33px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>

              <p className='text-white/60 text-[14px]'>{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}
export default Services