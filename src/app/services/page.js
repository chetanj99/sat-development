import Navbar from "@/components/common/Navbar";
import ServicesComponent from "@/components/Services/ServicesComponent";
import Link from "next/link";
import React, { Fragment } from "react";

const Services = () => {
  return (
    <Fragment>
      <div className="hero-section">
        <Navbar />
        <div className="flex mt-24 flex-col justify-start items-start 2xl:max-w-[45%] w-full sm:gap-12 md:gap-10 gap-8 lg:p-24 p-10">
          <h1 className="text-lg text-white">CERTIFIED LIFE COACH</h1>
          <p className="sm:text-[52px] md:text-[42px] text-4xl text-white sm:leading-[1.3] font-semibold">
            Choose right services for your business
          </p>
          <p className="sm:text-lg text-[16px] md:max-w-[72%] leading-relaxed text-white">
            The Smart choice for Personal business and Beyond
          </p>
          <Link href="/contact">
            <button className="border hover:bg-white hover:text-primary duration-500 border-white text-white py-2.5 px-7 rounded-lg text-[16px] font-semibold tracking-wide">
              Schedule a Call
            </button>
          </Link>
        </div>
      </div>
      <div>
        <ServicesComponent />
      </div>
    </Fragment>
  );
};

export default Services;
