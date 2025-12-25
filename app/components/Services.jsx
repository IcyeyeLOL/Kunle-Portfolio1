import { assets, serviceData } from '../../assets/assets.js'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
        
        <h2 className='text-center text-5xl font-Ovo'>My Services</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-7 lg:grid-cols-4 gap-6 my-10'>
            {serviceData.map(({icon, title, description, link}, index) => (
                <div key={index} 
                className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-amber-100 hover:-translate-y-1 duration-500'>
                    <Image 
                        src={icon} 
                        alt={title} 
                        className='w-10'
                        width={40}
                        height={40}
                    />
                    <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                    <p className='text-sm text-gray-500 leading-5'>{description}</p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read more 
                        <Image 
                            src={assets.right_arrow} 
                            alt="arrow"
                            className="w-4"
                            width={16}
                            height={16}
                        />
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services