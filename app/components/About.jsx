import { assets, infoList, toolsData } from '../../assets/assets.js';
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo"'>
            Introduction</h4>
            <h2 className='text-center mb-2 text-5xl font-Ovo"'>About me</h2>


            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div >
                    <Image src={assets.user_image} alt="user" className="w-full
                    rounded-3xl"/>
                </div>
                 <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        Hello! I'm Kunle Ajani, a Full Stack Developer based in Maryland. With a passion for creating dynamic and responsive web applications, I specialize in both frontend and backend development. My journey in tech has equipped me with a diverse skill set, allowing me to tackle complex challenges and deliver high-quality solutions. Whether it's building intuitive user interfaces or optimizing server-side performance, I strive to enhance user experiences through innovative design and efficient coding practices.
                    </p>
                    <ul>
                        {infoList.map(({icon,iconDark,title,description},
                            index
                        )=>(
                            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-amber-100 hover:translate-y-1 duration-500 hover:shadow-black' key={index}>
                                <Image src={icon} alt={title} className='w-7 mt-3'/>
                                <h3 className="my-4 font-semibold text-gray-700"></h3>
                                <h4 className='text-lg font-Ovo'>{title}</h4>
                                <p className='text-gray-500'>{description}</p>
                                
                                
                            </li>
                        ))}
                    </ul>
                    <h4 >Tools I use</h4>
                    <ul className='flex items-center gap-1 sm:gap-1.5'>
                        {toolsData.map((tool,index) => (
                            <li className='flex items-center justify-center w-12 sm:w-14 square-aspect border border-gray-400 rounded-lg cursor-pointer  hover:bg-amber-100 hover:translate-y-1 duration-500 hover:shadow-black' key={index}>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                            </li>
                        ))}
                            
                    </ul>
                    
                </div>
            </div>
        
    </div>
  )
}

export default About