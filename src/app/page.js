import AboutComponent from "@/components/Home/AboutComponent";
import Navbar from "@/components/common/Navbar";
import Subscribe from "@/components/Home/Subscribe";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import { Fragment } from "react";
import Schedule from "@/components/common/Schedule";
import Link from "next/link";

export default function Home() {
  return (
    <Fragment>
      <div className="hero-section">
        <Navbar />
        <div className="flex flex-col justify-start mt-24 items-start 2xl:max-w-[45%] w-full sm:gap-12 md:gap-10 gap-8 lg:p-24 p-10">
          <h1 className="text-lg text-white">CERTIFIED LIFE COACH</h1>
          <p className="sm:text-[52px] md:text-[42px] text-4xl text-white sm:leading-[1.3] font-semibold">
            Experience Reputation Result
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
        <div className="mt-10">
          <h2 className="text-3xl sm:text-4xl font-medium mb-8 text-center">About Us</h2>
          <AboutComponent />
        </div>
        <WhyChooseUs />
        <Subscribe />
        <Testimonials />
        <Schedule />
      </div>
    </Fragment>
  );
}
