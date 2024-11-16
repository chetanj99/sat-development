import React from 'react'
import Navbar from '@/components/common/Navbar'
import Textarea from '@/components/NumberConverter/Textarea'

const page = () => {
    return (
        <div className='mt-32'>
            <div className='bg-primary rounded-br-[120px] text-white sm:mb-20 mb-4'>
                <Navbar />
            </div>
            <div className='sm:m-10 m-2'>
                <Textarea />
            </div>
        </div>
    )
}

export default page
