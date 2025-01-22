import React from "react";
import hero from "../assets/img/hero-shp1.png";
import circle from "../assets/img/circle.png";
import client from "../assets/img/hero-shap3.png";
import right from "../assets/img/shap4.png";
import line from "../assets/img/hero-shp4.png";
import man from "../assets/img/hero-shp2.png";
import line2 from "../assets/img/5.png";

export default function Content1() {
  return (
    <>
   
        <div className=" h-screen flex flex-col lg:flex-row justify-center items-center mt-20 lg:mt-20 px-4 ">
          {/* Left section */}
          <div className="relative mt-36 lg:mt-36  lg:flex justify-center ">
            <div className="w-full max-w-xs lg:max-w-[600px]">
              <img src={hero} alt="" className="w-full h-auto" />
            </div>
            <div className="absolute bottom-3  right-3 rotate-infinite lg:right-8 lg:bottom-7 ">
              <img src={circle} alt="" className="w-16 lg:w-26 h-auto " />
            </div>
          </div>

          {/* Middle section */}
          <div className=" flex flex-col items-center lg:mt-20 lg:items-start text-center lg:text-left w-full lg:w-auto">
            <div className="w-full lg:w-auto">
              <div className="flex items-center justify-center lg:justify-start">
                <h2 className="font-bold text-3xl sm:text-5xl lg:text-7xl">
                  Digital Products
                </h2>
                <img src={client} alt="" className="h-12 sm:h-14 ml-2" />
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-8 lg:mt-8">
                <img src={right} alt="" className="h-12 sm:h-15" />
                <h3 className="font-bold text-2xl sm:text-4xl lg:text-6xl">
                  Use Marketing
                </h3>
              </div>

              <div className="lg:mt-2">
                <img src={line} alt="" className="w-full" />
              </div>
            </div>

            <div className="lg:mt-4">
              <p className="text-gray-500 text-sm sm:text-base">
                Distinctively supply exceptional services after uniquely
                integrate alternative markets rather emerging initiatives.
              </p>

              <div className="flex  mt-3 bg-black text-white justify-center space-x-2 items-center p-3 lg:py-5 rounded-md hover:bg-yellow-400 hover:text-black transition-all duration-300 mx-auto w-64 sm:w-72 lg:w-80">
                <p className="text-xl">Get Started</p>
                <h4 className="text-lg">
                  <i className="fa-solid fa-square-arrow-up-right"></i>
                </h4>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex lg:mt-20 justify-center lg:justify-start mt-8 pb-12  w-full lg:w-auto relative">
            {/* First Image */}
            <div className="w-full max-w-xs lg:max-w-none">
              <img src={man} alt="" className="w-full h-auto" />
            </div>

            {/* Second Image Positioned Further Down */}
            <div className="absolute bottom-36 sm:bottom-36 lg:bottom-48 right-2">
              <img src={line2} alt="" className="w-36  lg:w-auto" />
            </div>
          </div>
        </div>
 
    </>
  );
}
