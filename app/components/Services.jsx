
import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
const Services = () => {
  return (
    <motion.div
     initial={{opacity: 0}}
       whileInView={{ opacity: 1 }}
       transition={{ duration:1}}
     id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4
         initial={{y: -20, opacity: 0}}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration:0.3,delay: 0.5}} 
        className=' text-center mb-2 text-lg font-Ovo '>What I offer</motion.h4>
      <motion.h2
       initial={{y: -20, opacity: 0}}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration:0.5,delay: 0.5}}
       className=' text-center text-5xl font-Ovo'>My Services</motion.h2>
      <motion.p
       initial={{ opacity: 0}}
       whileInView={{opacity: 1 }}
       transition={{ duration:0.9,delay: 0.6}}
       className='text-center max-w-2x1 mx-auto font-Ovo mb-12 mt-5'>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</motion.p>

      <motion.div
      
       whileHover={{ scale: 1.05 }}
     
       className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index)=>(
        <motion.div
         initial={{y: -20, opacity: 0}}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration:0.5,delay: 0.3}}
         key={index} className=' border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500 hover:bg-[#fcf4ff] dark:hover:bg-darkHover dark:hover:shadow-white'>
        <Image src={icon} alt='' className='w-10' />
        <h3 className='text-lg my-4 text-black dark:text-white'>{title} </h3>
        <p className='text-sm text-gray-600 leading-5'>{description}</p>
        <a href={link} className=' flex  items-center gap-2 text-sm mt-5 dark:text-white '>
          Read more <Image alt='' src={assets.right_arrow} className='w-4'/>
        </a>
        </motion.div>))

        }
      </motion.div>
    </motion.div>
  )
}

export default Services
