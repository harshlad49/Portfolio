'use client'
import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
const Contact = ({isDarkMode}) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "709504a5-d858-42ab-b544-84fd9894dc3f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
       <motion.div
        initial={{ opacity: 0}}
       whileInView={{  opacity: 1 }}
       transition={{ duration: 1}}
        id='contact' className='w-full px-[12%] py-10 scroll-mt-20 dark:bg-none'>
        <motion.h4
         initial={{y: -20, opacity: 0}}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration:0.5,delay: 0.3}}
         className=' text-center mb-2 text-lg font-Ovo '>Connect with me</motion.h4>
      <motion.h2
       initial={{y: -20, opacity: 0}}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration:0.5,delay: 0.3}} 
      className=' text-center text-5xl font-Ovo'>Get in touch</motion.h2>
      <motion.p 
       initial={{opacity: 0}}
       whileInView={{opacity: 1 }}
       transition={{ duration:0.5,delay: 0.7}}
      className='text-center max-w-2x1 mx-auto font-Ovo mb-12 mt-5'>I'd love to hear from you! If you have any question, comments, or feedback, please use from below.</motion.p>
      <motion.form 
       initial={{opacity: 0}}
       whileInView={{  opacity: 1 }}
       transition={{ duration:0.5,delay: 0.9}}
      onSubmit={onSubmit} className='max-w-2xl mx-auto '>
        <div className=' grid sm:grid-cols-2  gap-6 mt-10 mb-8 w-full'>
          <motion.input 
           initial={{x: -50, opacity: 0}}
       whileInView={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.6,delay: 1.1}}
          type='text' placeholder='Enter your name' className='flex-2  p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white text-black' name='name' required/>
          <motion.input
          initial={{x: 50, opacity: 0}}
       whileInView={{ x: 0, opacity: 1 }}
       transition={{ duration: 0.6,delay: 1.2}}
           type='email' className=' p-3  outline-none border-[0.5px] border-gray-400 rounded-md bg-white text-black' placeholder='Enter your email' name='email' required/>
        </div>
        <motion.textarea
        initial={{y: 100, opacity: 0}}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.6,delay: 1.3}}
         row='6' placeholder='Enter your message' className='w-full  p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white text-black mb-6' name='message'  required></motion.textarea>
        <motion.button
        whileHover={{scale: 1.05}}
       transition={{ duration: 0.3}}
       
         className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-black dark:border-1 dark:border-white dark:text-white  dark:hover:bg-[#636065]' type='submit'>Submit now<Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>
        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
    </div>
  )
}

export default Contact
