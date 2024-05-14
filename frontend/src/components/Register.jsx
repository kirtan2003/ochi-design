import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='bg-zinc-900 w-full h-screen flex items-center justify-center font-["Ibarra_Real_Nova"]'>
      <div className='h-[100%] w-[35%] flex flex-col gap-3'>
        <div className='w-full py-5 flex items-center justify-center'>
            <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="image" />
        </div>
        <div className='pt-3 pb-7 px-6 w-full h-full'>
            <div className='rounded-lg border-[1.1px] border-zinc-400 shadow-lg shadow-zinc-500 px-10 w-full h-full'>
                <div className='flex flex-col items-center justify-center py-2'>
                    <h1 className='font-semibold text-[1.4vw] tracking-[1.5px] text-slate-200 font-["Ibarra_Real_Nova"]'>Create a new account</h1>
                    <h5 className='text-sm text-zinc-400 mb-3'>It's quick and easy</h5>
                </div>
                <div className='border-t-[1px] w-full py-4'>
                    <div className='flex gap-3 w-[100%]'>
                        <input className='w-1/2 border-[1.1px] border-zinc-500 pl-3 py-3 rounded-lg placeholder-zinc-600 text-sm' type="text" placeholder='First name' />
                        <input className='w-1/2 border-[1.1px] border-zinc-500 pl-3 py-3 rounded-lg placeholder-zinc-600 text-sm' type="text" placeholder='Surname' />
                    </div>
                    <div className='flex flex-col gap-3 mt-3'>
                        <input className='w-full border-[1.1px] border-zinc-500 pl-3 py-3 rounded-lg placeholder-zinc-600 text-sm' type="text" placeholder='Mobile number or email address' />
                        <input className='w-full border-[1.1px] border-zinc-500 pl-3 py-3 rounded-lg placeholder-zinc-600 text-sm' type="text" placeholder='New Password' />
                    </div>
                    <div className='pt-3 text-zinc-300'>
                        <div className='flex flex-col gap-3 w-full'>
                            <label htmlFor="">Date of Birth</label>
                            <input type="date" name="birthdate" id="date_of_birth" className='text-zinc-300 px-3 py-2 rounded-lg'/>
                        </div>
                        <div className='flex flex-col gap-3 w-full pt-3'>
                            <label htmlFor="">Gender</label>
                            <div className='w-full flex gap-2 '>
                                <span className='flex gap-3 justify-between  px-3 py-3 w-1/3 border-[1.1px] border-zinc-500 rounded-lg'>
                                    <label htmlFor="">Male</label>
                                    <input type="radio" className='text-zinc-300 px-3 py-2 rounded-lg '/>
                                </span>
                                <span className='flex gap-3 justify-between  px-3 py-3 w-1/3 border-[1.1px] border-zinc-500 rounded-lg'>
                                    <label htmlFor="">Female</label>
                                    <input type="radio" className='text-zinc-300 px-3 py-2 rounded-lg'/>
                                </span>
                                <span className='flex gap-3 justify-between  px-3 py-3 w-1/3 border-[1.1px] border-zinc-500 rounded-lg'>
                                    <label htmlFor="">Other</label>
                                    <input type="radio" className='text-zinc-300 px-3 py-2 rounded-lg'/>
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 w-full items-center justify-center pt-8'>
                            <button className='px-6 py-3 text-lg font-semibold bg-[#CDEA68] rounded-lg text-black'>Sign Up</button>
                            <p><Link to='/login'>Already have an account? Click here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
