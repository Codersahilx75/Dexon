import React from "react";
import star from "../assets/img/greenstar.png";
import line from "../assets/img/line1.png";
import call from "../assets/img/call.png";
import line2 from "../assets/img/line2.png";

export default function Content5() {
  return (
    <div className="relative py-4 sm:py-6 lg:py-10">
      {/* Star Image Animation */}
      <div className="flex justify-center container mt-10 lg:mt-0">
        <img src={star} alt="star icon" className="upDownAnimation" />
      </div>

      <div className="absolute left-0 right-0 top-[50%] mt-4 transform -translate-y-1/2 hidden lg:block">
        <img src={line} alt="line" className="left-animation" />
      </div>

      {/* Main Content */}
      <div className="container text-white flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-8 sm:space-y-0 relative">
        
        {/* Left Section */}
        <div className="space-y-8 sm:space-y-8 text-center sm:text-left px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Are You Ready for Your <br /> Business Success?
          </h2>
          <p className="text-lg sm:text-xl">
            Ullamcorper risus ultrices risus lorem. Mollis libero in
            pellentesque Vulputate ut <br className="hidden lg:block" /> aliquam, consectetur turpis odio.
          </p>

          <div className="text-yellow-300 hover:text-white text-xl">
            <span className="underline">Contact Us</span>{" "}
            <i className="fa-solid fa-square-up-right"></i>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center sm:items-start space-y-4 text-center mt-8 sm:mt-0 px-4 sm:px-0">
          <img src={call} alt="call icon" className="mb-4" />
          <h2 className="text-3xl sm:text-4xl font-semibold">
            +98 069 (2350) 020
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">(What’s App/Call)</p>
        </div>

        {/* Line2 Image */}
        <div className="absolute right-0 bottom-0 sm:bottom-2 lg:bottom-6 transform translate-y-4 overflow-hidden sm:overflow-hidden md:overflow-visible">
          <img src={line2} alt="line 2" className="left-animation" />
        </div>
      </div>
    </div>
  );
}
