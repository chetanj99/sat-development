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
        <div className="flex flex-col justify-start mt-24 items-start 2xl:max-w-[45%] w-full sm:gap-4 md:gap-8 gap-3 lg:p-20 p-10">
          <h1 className="text-lg text-white">Welcome to Sat Associates</h1>
          <p className="sm:text-4xl text-3xl text-white sm:leading-[1.3] font-semibold">
            We help take your business to the next level
          </p>
          <p className="sm:text-lg text-[16px] md:max-w-[72%] leading-relaxed text-white">
            We are a group of professional advocate, CA and CS
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
        <Schedule />
      </div>
    </Fragment>
  );
}
