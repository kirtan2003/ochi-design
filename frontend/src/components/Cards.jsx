import React from 'react'

const Cards = () => {
    return (
        <div className='w-full flex items-center px-10 gap-5 h-screen bg-zinc-200'>
            <div className='cardcontainer h-[55vh] w-1/2'>
                <div className='card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-4 py-1 border-2 border-[#b0f05d] text-[#b0ea63] rounded-full left-10 bottom-8 text-sm'>&copy;2019-2022</button>
                </div>
            </div>
            <div className='cardcontainer flex gap-5 w-1/2 h-[55vh] '>
                <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute px-4 py-1 border-2 border-zinc-500 rounded-full left-10 bottom-8 text-sm'>RATING 5.0 ON CLUTCH</button>
                </div>
                <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" className='w-50 h-auto'/>
                    <button className='absolute px-4 py-1 border-2 border-zinc-500 rounded-full left-10 bottom-8 text-sm'>BUSINESS BOOTCAMP ALUMNI </button>
                </div>
            </div>
        </div>
    )
}

export default Cards
