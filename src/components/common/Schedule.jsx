import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Schedule = () => {
  return (
    <div className="m-4">
      <div className="container my-14 mt-0 mx-auto bg-primary text-white rounded-xl sm:py-20 px-2.5 py-10">
        <h2 className="sm:text-4xl text-3xl text-center mb-7">
          Change Starts with a Single Step
        </h2>
        <p className="sm:text-xl text-lg text-center">
          We are a group of professional advocate, CA and CS
        </p>
        <Link href="/contact">
          <button className="hover:bg-white flex items-center m-auto gap-5 hover:text-primary duration-500 border border-white py-2.5 px-7 rounded-lg text-[16px] font-semibold tracking-wide mt-10">
            Schedule a Call <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Schedule;
