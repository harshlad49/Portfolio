import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className=' text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>
        <div className=' flex items-center gap-2 mx-auto w-max'>
    <Image src={isDarkMode? assets.mail_icon_dark :assets.mail_icon} alt='' className='w-6'/>
    harshlad492002@gmail.com       
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Harsh Lad. All right reserved.</p>
        <ul className='flex items-center gap-10 ju mt-4 sm:mt-0'>
          <li><a target='_blank' href='https://github.com/harshlad49'>GitHub</a></li>
          <li><a target='_blank' href='www.linkedin.com/in/harsh-lad-739016166'>LinkenIn</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
