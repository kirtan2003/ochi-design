import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login flex items-center justify-center w-full h-screen bg-zinc-900 text-slate-50 font-["Novatica"]'>
        <div className='h-[72vh] w-full md:px-56 flex gap-10'>
            <div className='w-1/2 flex flex-col items-start pt-36 hover:scale-105 transition-transform '>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="logo" className='pb-5 w-[25%] object-cover transition-transform hover:scale-105' />
                <p className='text-[1.7vw] leading-none tracking-normal hover:scale-95 transition-transform'>Ochi helps you create eye-opening Presentations.</p> 
                <p className='text-[1.7vw] leading-none tracking-normal hover:scale-95 transition-transform'>We are a strategic partner for fast-growing tech </p>
                <p className='text-[1.7vw] leading-none tracking-normal hover:scale-95 transition-transform'>businesses</p>
            </div>
            <div className='page w-1/2 flex items-center justify-center'>
                <div className='px-7 py-7 border-[1.1px] border-zinc-400 shadow-lg shadow-zinc-500 w-full h-[80%] flex flex-col gap-4 rounded-lg'>
                    <input className='border-[1.1px] border-zinc-500 pl-3 py-3 rounded-lg placeholder-zinc-400 text-lg' type="text" placeholder='Email address or phone number' />
                    <input className='border-[1.1px] border-zinc-500 pl-3 py-3 rounded-lg placeholder-zinc-400 text-lg' type="text" placeholder='Password' />
                    <button className='w-full pl-3 py-3 text-black rounded-lg bg-[#CDEA68] text-lg font-semibold tracking-wide'>Log in</button>
                    <div>
                        <p className='w-full px-3 py-2 text-lg flex items-center justify-center'>Forgotten password?</p>
                    </div>
                    <div className='w-full flex items-center justify-center px-5 pb-5 pt-5 h-full border-t-2 border-t-red-400'>
                        <button className='font-semibold px-4 py-3 text-black text-[1.2vw] rounded-lg bg-[#CDEA68]'><Link to='/register'>Create new account</Link></button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Login