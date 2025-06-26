'use client'
import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'
const Contact = () => {
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
       <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className=' text-center mb-2 text-lg font-Ovo '>Connect with me</h4>
      <h2 className=' text-center text-5xl font-Ovo'>Get in touch</h2>
      <p className='text-center max-w-2x1 mx-auto font-Ovo mb-12 mt-5'>I'd love to hear from you! If you have any question, comments, or feedback, please use from below.</p>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto '>
        <div className=' grid sm:grid-cols-2  gap-6 mt-10 mb-8 w-full'>
          <input type='text' placeholder='Enter your name' className='flex-2  p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name' />
          <input type='email' className=' p-3  outline-none border-[0.5px] border-gray-400 rounded-md bg-white' placeholder='Enter your email' name='email' />
        </div>
        <textarea row='6' placeholder='Enter your message' className='w-full  p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'  ></textarea>
        <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500' type='submit'>Submit now<Image src={assets.right_arrow_white} alt='' className='w-4'/></button>
        <p className='mt-4'>{result}</p>
      </form>
    </div>
    </div>
  )
}

export default Contact
