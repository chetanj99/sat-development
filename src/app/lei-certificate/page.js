import Navbar from "@/components/common/Navbar";
import React, { Fragment } from "react";

const LEICertificate = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container mx-auto">
        <div className="h-full my-40">
          <h2 className="text-center text-3xl mt-10 mb-4">
            Apply LEI Certificate
          </h2>
          <iframe
            id="leiframe"
            src="https://www.legalentityidentifier.in/?iframe=1&ref=LEInumber"
            onload='document.getElementById("leiframe").scrollIntoView();'
            className="w-full h-screen border-none lei-form my-8"
            loading="eager"
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
};

export default LEICertificate;
