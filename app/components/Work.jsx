


import { assets, workData } from '../../assets/assets.js'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id="work" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h2 className='text-center mb-2 text-5xl font-Ovo'>My portfolio</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Welcome to my web development portfolio! Showing my latest works, explore a collection of projects
            showcasing my expertise in development.
        </p>
        <a></a>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
            {workData.map((project, index) => (
                
                
                
                <div key={index}
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                    style={{backgroundImage: `url(${project.bgImage})`}}>
                        
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
                        py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-600'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center
    shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'
    onClick={(e) => {
        e.preventDefault();
        window.open(project.projectUrl, '_blank');
    }}
>
    <Image 
        src={assets.send_icon} 
        alt="send icon" 
        className='w-5'
        width={20}
        height={20}
    />
</div>
                        

                        
                    </div>
                    
                </div>
            ))}
        </div>
        <a href='' className='w-max flex items-center gap-2 mx-auto text-lg font-Ovo text-black border-gray-700 rounded-full'>
                            Show more<Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4 inline-block ml-2" />
                            
                        </a>
    </div>
  )
}

export default Work