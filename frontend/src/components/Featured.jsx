import { motion, useAnimation } from 'framer-motion'
import React from 'react';

const Featured = () => {

   const cards = [useAnimation(), useAnimation()] 
    // const [isHovering, setisHovering] = useState(false);
    const handleHover=(index)=>{
        cards[index].start({
            y:"0"
        }) 
    }

    const handleHoverEnd=(index)=>{
        cards[index].start({
            y:"100%"
        }) 
    }

    return (
        <div className='w-full pt-20'>
            <div className='w-full px-16 border-b-[1px] border-zinc-600 pb-12'>
                <h1 className='text-[5.5vw] font-["PT Sans Narrow"] tracking-tight'>Featured Projects</h1>

            </div>
            <div className='flex gap-5 w-full px-16 py-16'>
                <div className='w-1/2'>
                    <div className='flex gap-3 items-center'>
                        <div className='w-2 h-2 bg-zinc-200 rounded-full'></div>
                        <p className='uppercase'>Fyde</p>
                    </div>


                    <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className='relative card-container mt-4 h-[33rem]  rounded-lg '>
                        <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-semibold text-[#CDEA68] text-[7vw] font-["Oswald"] uppercase tracking-tight leading-none'>
                            {"FYDE".split('').map((item, index)=> (

                                <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36, 1], delay:index*.05}} className='inline-block '>{item}</motion.span>
                            )
                            )}
                        </h1>
                        <div className='card w-full h-full rounded-lg  overflow-hidden hover:scale-95'>
                            <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" srcset="" className='w-full h-full bg-cover' />
                        </div>
                    </motion.div>


                    <div className='py-6 pr-10 flex gap-5 items-center justify-start'>
                        <button className='border-zinc-600 border-2 rounded-full px-3 py-2 text-sm'>AUDIT</button>
                        <button className='border-zinc-600 border-2 rounded-full px-3 py-2 text-sm'>COPY WRITING</button>
                        <button className='border-zinc-600 border-2 rounded-full px-3 py-2 text-sm'>SALES DECK</button>
                        <button className='border-zinc-600 border-2 rounded-full px-3 py-2 text-sm'>SLIDES DESIGN</button>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='flex gap-3 items-center'>
                        <div className='w-2 h-2 bg-zinc-200 rounded-full'></div>
                        <p className='uppercase'>Vise</p>
                    </div>


                    <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className='relative card-container mt-4 h-[33rem]  rounded-lg'>
                        <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] text-[7vw] font-["Oswald"] uppercase tracking-tight leading-none font-semibold'>
                            {"VISE".split('').map((item, index)=> (
                                <motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.22, 1, 0.36, 1], delay:index*.05}} className='inline-block '>{item}</motion.span>
                            ))}
                        </h1>
                        <div className='card border-zinc-700 border-[.2px] w-full h-full rounded-lg  overflow-hidden hover:scale-95'>
                            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" srcset="" className='w-full h-full bg-cover ' />
                        </div>
                    </motion.div> 


                    <div className='py-6 pr-10 flex gap-5 items-center justify-start'>
                        <button className='border-zinc-600 border-2 rounded-full px-3 py-2 text-sm'>AGENCY</button>
                        <button className='border-zinc-600 border-2 rounded-full px-3 py-2 text-sm'>COMPANY PRESENTATION</button>
                    </div>          
                 </div>
            </div>
            <div className='pb-10 flex items-center justify-center'>
                <button className='rounded-full border-zinc-600 border-2 px-5 py-4 flex items-center justify-center gap-4 text-sm'>
                    VIEW ALL CASE STUDIES
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
        </div>
    )
}

export default Featured
