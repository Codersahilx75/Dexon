import React from "react";
import star from "../assets/img/star-2.png";
//import man from "../assets/img/shape3.png";

export default function Content3() {
  return (
    <>
      {/* Popup Image with animation */}
      {/* <div className="popup-animation  left-1/2 top-1/2  hidden lg:block">
        <img src={man} alt="Zooming Man" className="animated-image" />
      </div> */}

      <div className="container mx-auto px-4 py-10">
        {/* Grid Layout */}
        <div className="lg:flex justify-center lg:mb-8">
          <img src={star} alt="" className="left-right-animation" />
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="left-section flex flex-col justify-between">
            <h3 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold text-left mb-4 md:mb-6">
              Improve your Business to the Next Levels
            </h3>
            <p className="text-white text-base md:text-xl mb-4 md:mb-6 leading-relaxed">
              Ullamcorper risus ultrices risus lorem. Mollis libero in pellentesque
              Vulputate ut aliquam, consectetur turpis.
            </p>
            <div className="background-img rounded-lg overflow-hidden">
              <div className="px-4 lg:py-8 space-y-4">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center md:text-left">
                  Social Media Mastery
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-center md:text-left">
                  Competently leverage other's diverse action items via vertical
                  to collaboratively harness ubiquitous materials.
                </p>
                <p className="text-sm md:text-base flex items-center gap-2 justify-center md:justify-start cursor-pointer hover:text-white">
                  <span className="underline">Read More</span>
                  <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-section flex flex-col gap-8">
            <div className="background-img2 rounded-lg overflow-hidden">
              <div className="px-4 py-4 space-y-4">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center md:text-left">
                  Customer Increasing
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-center md:text-left">
                  Competently leverage other's diverse action items via vertical
                  to collaboratively harness ubiquitous materials.
                </p>
                <p className="text-sm md:text-base flex items-center gap-2 justify-center md:justify-start cursor-pointer hover:text-white">
                  <span className="underline">Read More</span>
                  <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                </p>
              </div>
            </div>

            <div className="background-img3 rounded-lg overflow-hidden">
              <div className="px-4 py-4 space-y-4">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center md:text-left">
                  Sales Statistics
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-center md:text-left">
                  Competently leverage other's diverse action items via vertical
                  to collaboratively harness ubiquitous materials.
                </p>
                <p className="text-sm md:text-base flex items-center gap-2 justify-center md:justify-start cursor-pointer hover:text-yellow-400">
                  <span className="underline">Read More</span>
                  <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
