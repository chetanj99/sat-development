import React from 'react'

const Subscribe = () => {
    return (
        <div className='m-4'>
            <div className='w-full m-auto text-white bg-primary container rounded-2xl flex justify-between items-center py-14 px-12 my-12 flex-wrap lg:flex-nowrap gap-4'>
                <div className='w-full xl:w-1/2'>
                    <h2 className='sm:text-4xl text-3xl 2xl:mb-0 2xl:max-w-[60%] mb-7 leading-snug'>Get My Free Essential Mindset Exercises</h2>
                </div>
                <div className='w-full xl:w-1/2'>
                    <div className='flex'>
                        <input type="email" placeholder='Email address' className='text-primary outline-none text-[16px] sm:text-xl sm:py-3 sm:px-10 py-1 px-3 mr-2 rounded-lg w-full' />
                        <button className='border hover:bg-white hover:text-primary duration-500 border-white text-white py-2.5 sm:px-7 px-4 rounded-lg sm:text-xl font-semibold tracking-wide'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
