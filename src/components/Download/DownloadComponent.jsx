"use client"
import React from 'react'
import { FaDownload } from "react-icons/fa";

const DownloadComponent = () => {

    const handleDownload = (e, downloadUrl) => {
        e.preventDefault();

        const downloadLink = document.createElement('a');
        downloadLink.href = downloadUrl;
        downloadLink.target = '_blank';
        downloadLink.click();
    };

    return (
        <div className='mx-auto text-center w-full m-auto container my-10 p-4'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-7'>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
                    return (
                        <div className='flex flex-col gap-3 shadow-xl p-5 rounded-xl' key={value}>
                            <img src="bg.jpg" alt="Sat Associates" className='w-full h-40 object-cover' />
                            <h2 className='text-lg font-semibold'>Java</h2>
                            <p>Download Java Runtime Environment (64bit)</p>
                            <button
                                onClick={(e) => handleDownload(e, "https://www.filepuma.com/download/java_runtime_environment_64bit_8.0.3010.9-29392/download/")}
                                className='border hover:bg-primary hover:text-white duration-500 border-primary text-primary py-2 px-7 rounded-lg text-[16px] font-semibold tracking-wide flex items-center gap-4 justify-center'
                            >
                                <FaDownload /> Download
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DownloadComponent
