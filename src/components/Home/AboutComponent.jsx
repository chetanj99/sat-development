import React from 'react'

const AboutComponent = () => {
    return (
        <div className='w-full m-auto container p-4'>
            <div className='flex flex-wrap items-start gap-10 justify-between'>
                <div className='lg:w-1/2'>
                    <img src="/hero.jpg" alt="Sat Associates" className='rounded-2xl' />
                </div>
                <div className='lg:w-[45%]'>
                    <p className='text-[18px]'>Sat Associates was established in the year 2015. It is a leading consulting and licensing rendering comprehensive professional services which include export import consulting, industrial licensing, digital signature certificate provision, tax consultancy, accounting services, FSSAI certificate etc.</p>
                    <p className='text-[18px] mt-4'>Sat Associates is a professionally managed firm. The firm represents a combination of specialized skills, which are geared to offers sound consulting advice and personalized proactive services. Those associated with the firm have regular interaction with industry and other professionals which enables the firm to keep pace with contemporary developments and to meet the needs of its clients.
                    </p>
                    <h2 className='text-primary text-xl mt-5 font-semibold mb-1'>We are committed to:</h2>
                    <li className='text-lg'>Place the Interest of Clients before ours</li>
                    <li className='text-lg'>Uphold High Standards of Honesty and Integrity</li>
                    <li className='text-lg'>Endeavour to Improve the Quality of Services</li>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
