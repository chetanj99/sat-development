import Link from 'next/link';
import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-10 p-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 w-full text-xl md:gap-32">
                <div className="w-full mb-10 md:mb-0">
                    <h2 className="text-xl font-semibold mb-4 tracking-wide">Sat Associates</h2>
                    <p className="text-white text-lg">
                        Sat Associates was established in the year 2015. It is a leading consulting and licensing rendering comprehensive professional services.
                    </p>
                </div>
                <div className='flex md:gap-14 items-start w-full'>
                    <div className="w-full mb-10 md:mb-0">
                        <h3 className="font-semibold mb-4 text-xl tracking-wide">Quick Links</h3>
                        <ul>
                            <li className="mb-1 text-[16px] hover:font-bold duration-200">
                                <Link href="/services">Services</Link>
                            </li>
                            <li className="mb-1 text-[16px] hover:font-bold duration-200">
                                <Link href="/download">Download</Link>
                            </li>
                            <li className="mb-1 text-[16px] hover:font-bold duration-200">
                                <Link href="#">Notification</Link>
                            </li>
                            <li className="mb-1 text-[16px] hover:font-bold duration-200">
                                <Link href="#">Important</Link>
                            </li>
                            <li className="mb-1 text-[16px] hover:font-bold duration-200">
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full mb-10 md:mb-0">
                        <h3 className="font-semibold mb-4 text-xl tracking-wide">Useful Links</h3>
                        <ul>
                            <Link
                                href="https://www.dgft.gov.in/CP/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <li className='mb-1 text-[16px] hover:font-bold duration-200'>
                                    DGFT
                                </li>
                            </Link>
                            <Link
                                href="https://foservices.icegate.gov.in/#/services/viewExchangeRate"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <li className="mb-1 text-[16px] hover:font-bold duration-200">
                                    Exchange Rate
                                </li>
                            </Link>
                            <Link
                                href="https://www.incometax.gov.in/iec/foportal/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <li className="mb-1 text-[16px] hover:font-bold duration-200">
                                    Income
                                </li>
                            </Link>
                            <Link
                                href="https://www.gst.gov.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <li className="mb-1 text-[16px] hover:font-bold duration-200">
                                    GST
                                </li>
                            </Link>
                            <Link
                                href="https://www.fssai.gov.in/notifications.php?notification=notice-for-comments"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <li className="mb-1 text-[16px] hover:font-bold duration-200">
                                    FSSAI
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="w-full mb-10 md:mb-0">
                    <h3 className="font-semibold mb-4 text-xl tracking-wide">Contact Info</h3>
                    <p className="mb-2 text-[16px]">523, The Corporate World, Near Suvarna bhoomi Chowk, 80 Feet Ring Road, Rajkot Gujarat - 360005, India</p>
                    <p className="mb-2 text-[16px]">info@Satgroup.co.in</p>
                    <p className="mb-2 text-[16px]">+91 7878050553</p>
                </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:mt-14">
                <div>
                    Copyright &copy; 2024 Sat Associates
                </div>
                <div className="flex space-x-8 mt-4 md:mt-0">
                    <a href="#" className="text-2xl">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-2xl">
                        <FaFacebookSquare />
                    </a>
                    <a href="#" className="text-2xl">
                        <FaInstagramSquare />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
