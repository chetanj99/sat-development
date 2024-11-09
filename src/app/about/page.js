import Certification from '@/components/About/Certification'
import Navbar from '@/components/common/Navbar'
import Schedule from '@/components/common/Schedule'
import AboutComponent from '@/components/Home/AboutComponent'
import React, { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
            <div className='bg-primary rounded-br-[120px] text-white sm:mb-20 mb-4'>
                <Navbar />
                <div className='container mx-auto py-28 gap-10 px-4 md:px-0'>
                    <h2 className='text-4xl md:text-6xl tracking-wide mb-7 text-center'>About Us</h2>
                    <h3 className='text-[16px] md:text-lg tracking-wide text-center m-auto sm:max-w-[50%]'>At Sat Association, our experienced team is dedicated to helping you. We have a strong record of assisting thousands of clients in Texas and are here to support you and your family during this challenging time.c​</h3>
                </div>
            </div>
            <div className='lg:mb-24 mb-14'>
                <AboutComponent />
            </div>
            <Certification />
            <Schedule />
        </Fragment>
    )
}

export default About
