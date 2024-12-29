import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

const SubscriptionCard = () => {
  return (
    <div className='my-10 md:mt-16 border flex flex-col  lg:flex-row gap-4 justify-center items-center lg:justify-between border-black p-4 lg:p-8'>
          <div className='flex flex-col justify-center items-center lg:items-start gap-2 lg:flex-row'>
            <span><FaTelegramPlane size={35} className='text-slate-900' /></span>
            <div className='space-2 md:space-y-4'>
                <h4 className='text-2xl text-center md:text-3xl text-slate-900 font-bold '>Sign Up for newletters</h4>
                <p className=' text-slate-700'>The best of Business news, in your inbox.</p>
            </div>
          </div>

          <div className='flex h-fit gap-2'>
            <input type="email" placeholder='Email address' className='placeholder:text-gray-500 bg-zinc-100 p-2 sm:p-4 border border-gray-400 focus:ring-0 focus:ring-offset-0' />
            <button className=" border font-medium border-black hover:bg-black hover:text-white px-6 sm:px-10 py-2">SubScribe</button>
          </div>
        </div>
  )
}

export default SubscriptionCard