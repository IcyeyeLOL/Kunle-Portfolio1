import Image from 'next/image'
import React from 'react'
import { assets } from '../../assets/assets.js';

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>
        </div>
        <div  className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            lime17451@gmail.com
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>Ⓒ 2025 Kunle Ajani. All rights reserved.</p>
            <ul className='flex items-center gap-2 justify-center mt-4 sm:mt-0'>
                <Image src={assets.github} alt="github" className='w-6'  width={24} height={24} /><li><a href="https://github.com/IcyeyeLOL">GitHub</a></li>
                <Image src={assets.linkedin} alt="linkedin" className='w-6'  width={24} height={24} /><li><a href="https://www.linkedin.com/in/olakunleajani/">LinkedIn</a></li>
                <Image src={assets.leetcode} alt="leetcode" className='w-6'  width={24} height={24} /><li><a href="https://leetcode.com/u/Olakunle-Ajani/">LeetCode</a></li>
                </ul>
        </div>
    </div>
    
  )
}

export default Footer