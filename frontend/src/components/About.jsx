import React from 'react'

const About = () => {
  return (
    <>
      <div className='w-full p-20 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl text-black '>
        <h1 className='font-["PT_Sans_Narrow"] text-[4vw] leading-none tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>

      </div>
      <div className='w-full border-t-[1px] border-zinc-400 bg-[#CDEA68] flex gap-6'>
          <div className='w-1/2 px-20 pb-20 pt-5'>
              <h1 className='text-black text-[3.4vw] tracking-tight leading-none font-["PT Sans Narrow"]'>Our Approach :</h1>
              <button className='mt-8 flex justify-between items-center gap-8 uppercase px-8 py-5 text-[1vw] bg-zinc-900 rounded-full'>
                Read More
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
              </button>
          </div>
          <div className='w-1/2 h-[70vh] bg-[#CDEA68] rounded-lg m-12 hover:scale-105'>
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" srcset="" className='rounded-xl' />

          </div>
      </div>
    </>
  )
}

export default About
