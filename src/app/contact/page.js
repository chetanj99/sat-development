import React, { Fragment } from "react";
import Navbar from "@/components/common/Navbar";
import { FaLinkedinIn, FaTwitter, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <Fragment>
      <div className="bg-primary rounded-br-[120px] text-white md:mb-20 mb-12">
        <Navbar />
        <div className="container mx-auto md:text-lg text-[16px] md:py-20 py-5 gap-10 px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-36 gap-20 mt-28 sm:mt-14">
            <div>
              <h2 className="text-4xl md:text-6xl tracking-wide mb-7">
                Contact Us
              </h2>
              <h3 className="text-2xl md:text-3xl tracking-wide">
                Feel free to contact me for any questions and doubts
              </h3>
              <p className="text-sm md:text-lg mt-4">
                At Sat Associates, we pride ourselves on offering personalized consulting and licensing services tailored to meet your needs.
              </p>
              <p className="text-sm md:text-lg mt-4">
                Our team of professionals ensures you receive expert guidance and support to achieve your business goals efficiently.
              </p>
              <p className='text-sm md:text-lg mt-12'>Stay in Touch</p>
              <div className='flex justify-between items-center text-xl md:text-2xl mt-8'>
                <div>
                  <FaLinkedinIn />
                  <p className='text-lg md:text-xl mt-5'>LinkedIn</p>
                </div>
                <div>
                  <FaTwitter />
                  <p className='text-lg md:text-xl mt-5'>Twitter</p>
                </div>
                <div>
                  <FaFacebook />
                  <p className='text-lg md:text-xl mt-5'>Facebook</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-[38px] tracking-wide mb-6">
                I would love to hear from you
              </h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="col-span-2 md:p-3 p-2 rounded border md:text-lg text-sm border-gray-300 text-black"
                  type="text"
                  placeholder="Name"
                />

                <input
                  className="col-span-2 md:p-3 p-2 rounded border md:text-lg text-sm border-gray-300 text-black"
                  type="email"
                  placeholder="Email address"
                />
                <input
                  className="col-span-2 md:p-3 p-2 rounded border md:text-lg text-sm border-gray-300 text-black"
                  type="text"
                  placeholder="Subject"
                />
                <textarea
                  className="col-span-2 md:p-3 p-2 rounded border md:text-lg text-sm border-gray-300 text-black resize-none"
                  placeholder="Your message"
                  rows="4"
                ></textarea>
                <button className="w-fit col-span-2 border-white border rounded-md text-white py-2.5 px-8 tracking-wider hover:bg-white hover:text-primary duration-500 font-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div className="flex items-center md:items-start gap-4 text-start">
            <div className="bg-gray-100 rounded-full p-4 text-primary">
              <FaLocationDot className="sm:text-3xl text-xl" />
            </div>
            <div>
              <h4 className="font-bold uppercase mb-2">Find Us</h4>
              <p className="sm:text-lg text-[16px]">
                Sat Associates, 523, The Corporate World, Near Suvarna bhoomi Chowk, 80 Feet Ring Road, Rajkot Gujarat - 360005, India
              </p>
            </div>
          </div>
          <div className="flex items-center md:items-start gap-4 text-start">
            <div className="bg-gray-100 rounded-full p-4 text-primary">
              <MdEmail className="sm:text-3xl text-xl" />
            </div>
            <div>
              <h4 className="font-bold uppercase mb-2">Timing</h4>
              <p className="sm:text-lg text-[16px]">
                Monday - Friday: 9 AM to 7 PM
              </p>
              <p className="sm:text-lg text-[16px]">Saturday : 9 AM to 5 PM</p>
            </div>
          </div>
          <div className="flex items-center md:items-start gap-4 text-start">
            <div className="bg-gray-100 rounded-full p-4 text-primary">
              <FaPhone className="sm:text-3xl text-xl" />
            </div>
            <div>
              <h4 className="font-bold uppercase mb-2">Contact</h4>
              <p className="sm:text-lg text-[16px]">+91 7878050553</p>
              <p className="sm:text-lg text-[16px]">info@Satgroup.co.in</p>
            </div>
          </div>
        </div>
        <div className="md:my-20 my-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41929.25666185443!2d70.77687707210411!3d22.285028903663033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbde245fdd41%3A0xa12caf1ea68307b9!2sZUDIO%20-%20Rajkot%2C%20R%20K%20Prime!5e0!3m2!1sen!2sin!4v1697886819641!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
