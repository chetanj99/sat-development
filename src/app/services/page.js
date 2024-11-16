import Navbar from "@/components/common/Navbar";
import ServicesComponent from "@/components/Services/ServicesComponent";
import Link from "next/link";
import React, { Fragment } from "react";

const Services = () => {
  return (
    <Fragment>
      <div className="hero-section">
        <Navbar />
        <div className="flex mt-24 flex-col justify-start items-start 2xl:max-w-[45%] w-full sm:gap-4 md:gap-8 gap-3 lg:p-20 p-10">
          <h1 className="text-lg text-white">Welcome to Sat Associates</h1>
          <p className="sm:text-4xl text-3xl text-white sm:leading-[1.3] font-semibold">
            Choose right services for your business
          </p>
          <p className="sm:text-lg text-[16px] md:max-w-[72%] leading-relaxed text-white">
            "we know how precious your time is"
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
