import React from 'react';
import './landingpage.css';
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from 'framer-motion';


const LandingPage = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.4" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-40 px-20'>
                {/* <div className='masker'>
                    <h1 className='uppercase leading-none tracking-tight text-8xl font-semibold'>we create</h1>
                </div>
                <div className='masker'>
                    <h1 className='uppercase leading-none tracking-tight text-8xl font-semibold'>Eye Opening</h1>
                </div>
                <div className='masker'>
                    <h1 className='uppercase leading-none tracking-tight text-8xl font-semibold'>Presentations</h1>
                </div> */}
                {/* or */}
                {
                    ["We Create", "Eye Opening", "Presentations"].map((item, index) => (
                        <div key={index} className='masker'>
                            <div className='w-fit flex overflow-hidden'>
                                {index === 1 && (
                                    <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='img flex items-center justify-center w-[9vw] mr-[1vw] rounded-md h-[5.2vw] relative top-[0.9vw] bg-[#004D43] '>
                                        <img className='w-20' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                                    </motion.div>
                                )}
                                <h1 className='flex items-center uppercase leading-none tracking-tight text-[6.5vw] font-semibold'>{item}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='border-t-[2px] border-zinc-700 mt-24 flex justify-between items-center py-5 px-20'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>(
                    <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
                ))}
                <div className='start flex items-center gap-3'>
                    <div className='px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-sm uppercase'>start the project</div>
                    <div className='w-8 h-8 flex items-center justify-center border-[1px] border-zinc-500 rounded-full'>
                        <span className='rotate-[45deg]'><FaArrowUpLong/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
