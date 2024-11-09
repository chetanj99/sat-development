import React from 'react'
import { FaCertificate } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const Certification = () => {
    return (
        <div className='container mx-auto flex justify-between items-start lg:gap-40 gap-10 lg:flex-nowrap flex-wrap p-4 mb-10'>
            <div className='lg:w-1/2 w-full'>
                <h2 className='text-4xl lg:mb-7 mb-4'>Certifications, Degrees, and Experience</h2>
                <p className='text-lg text-secondary'>Dui habitasse ut neque mauris lacus in magna sollicitudin enim velit magna mi scelerisque iaculis aliquet tempor risus vitae lorem leo tempus consequat imperdiet vel posuere mi sed sed sollicitudin malesuada tortor.</p>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex items-start gap-7'>
                    <div className='text-primary mt-1.5'>
                        <FaCertificate />
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold mb-1'>Professional Certified Coach, PCC</h2>
                        <p className='text-secondary'>Habitant sed nibh feugiat habitant amet volutpat feugiat. Orci mi, parturient bibendum vulputate viverra varius id.</p>
                    </div>
                </div>
                <div className='flex items-start gap-7'>
                    <div className='text-primary mt-1.5'>
                        <FaMedal />
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold mb-1'>ACCG Accredited ADHD Coach</h2>
                        <p className='text-secondary'>Diam aliquet egestas bibendum adipiscing ultricies fames semper aenean feugiat quam enim.</p>
                    </div>
                </div>
                <div className='flex items-start gap-7'>
                    <div className='text-primary mt-1.5'>
                        <FaCertificate />
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold mb-1'>Member of ABC, DEF</h2>
                        <p className='text-secondary'>Orci mi, parturient bibendum vulputate viverra varius id. Habitant sed nibh feugiat habitant amet volutpat feugiat.</p>
                    </div>
                </div>
                <div className='flex items-start gap-7'>
                    <div className='text-primary mt-1.5'>
                        <FaGraduationCap />
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold mb-1'>Career Specialty Services Provider, CSS</h2>
                        <p className='text-secondary'>Ullamcorper nisi adipiscing tempus, dictum iaculis tellus velit ornare odio eget morbi egestas ac pulvinar potenti..</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certification
