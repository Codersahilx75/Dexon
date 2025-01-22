import React, { useState, useEffect, useRef } from "react";
import star from "../assets/img/icon.png";
import border from "../assets/img/border2.png";
import cards from "../assets/data/Cards";
import img from "../assets/img/about.png";
import img2 from "../assets/img/shape-1.png";
import star2 from "../assets/img/shape-2.png";

export default function Content2() {
  // State for each counter
  const [counterPartners, setCounterPartners] = useState(0);
  const [counterSales, setCounterSales] = useState(0);
  const [counterCampaigns, setCounterCampaigns] = useState(0);
  const [counterMarketingTools, setCounterMarketingTools] = useState(0);

  // Reference for the counters section
  const countersRef = useRef(null);
  useEffect(() => {
    // Store the current ref in a local variable
    const countersNode = countersRef.current;
  
    // Function to animate counters
    const animateCounter = (startValue, endValue, setCounter, duration) => {
      let start = startValue;
      const increment = (endValue - startValue) / (duration / 16);
  
      const updateCounter = () => {
        if (start < endValue) {
          start += increment;
          setCounter(Math.floor(start));
          requestAnimationFrame(updateCounter);
        }
      };
  
      updateCounter();
    };
  
    // Create Intersection Observer to trigger counters animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start animations when the section is in view
          animateCounter(0, 16, setCounterPartners, 5000); // Total Advertising Partners
          animateCounter(0, 16, setCounterSales, 5000); // Sales Increasements
          animateCounter(0, 5, setCounterCampaigns, 5000); // Social Campaigns
          animateCounter(0, 12, setCounterMarketingTools, 5000); // Paid Marketing Tools
          observer.disconnect(); // Stop observing once animation starts
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is in view
  
    // Start observing the counters section
    if (countersNode) {
      observer.observe(countersNode);
    }
  
    // Cleanup observer
    return () => {
      if (countersNode) {
        observer.disconnect();
      }
    };
  }, []);
  

  return (
    <div className="h-screen">
      {/* Header Section */}
      <div className="container lg:flex justify-between">
        <div className="lg:mt-20 mt-10">
          <div className="absolute lg:mt-14 ml-10">
            <h1 className="lg:text-4xl text-xl font-semibold">
              Growing your Revenue using
            </h1>
            <h1 className="lg:text-4xl text-xl font-semibold">
              Dexon Services
            </h1>
          </div>
          <div className="relative">
            <img src={border} alt="" className="" />
          </div>
        </div>
        <div className="lg:mt-20 mt-4">
          <img src={star} alt="Star" className="left-right-animation " />
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-20 lg:mt-28 container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl w-full h-auto lg:h-[130%] flex flex-col justify-center items-center text-center p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-20 h-24 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {card.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <div className="lg:mt-48 mt-20">
        <div className="container flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-10">
          <div className="w-full lg:w-1/2">
            <img src={img} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full lg:w-1/2 lg:text-left space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Specialize in helping Companies Promote Your Business
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 border-b-2 pb-4">
              Ullamcorper risus ultrices risus lorem. Mollis libero in
              pellentesque potenti. Vulputate ut aliquam, consectetur turpis
              odio.
            </p>
            <div>
              <ul className="mt-6 sm:mt-8 lg:mt-10 list-disc list-inside text-sm sm:text-base lg:text-xl text-gray-600 space-y-4 sm:space-y-6 lg:space-y-8">
                <li>Continually engineer ethical partnership</li>
                <li>Seamlessly pursue orthogonal customer service</li>
                <li>Dynamically reconceptualize value</li>
              </ul>
            </div>
            <div className="">
              <p className="font-semibold hover:text-yellow-400 underline text-sm sm:text-base lg:text-lg lg:flex items-center justify-center lg:justify-start">
                Learn More{" "}
                <i className="fa-solid fa-up-right-from-square ml-2"></i>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative" ref={countersRef}>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
          <div className="lg:text-center">
            <h2 className="lg:text-7xl text-4xl font-bold">{counterPartners} M+</h2>
            <p className="text-gray-600 text-lg">Total Advertising Partners</p>
          </div>

          <div className="lg:text-center">
            <h2 className="lg:text-7xl text-4xl font-bold">{counterSales} %</h2>
            <p className="text-gray-600 text-lg">Sales Increasements</p>
          </div>

          <div className="lg:text-center">
            <h2 className="lg:text-7xl text-4xl font-bold">{counterCampaigns} K+</h2>
            <p className="text-gray-600 text-lg">Social Campaigns</p>
          </div>

          <div className="lg:text-center">
            <h2 className="lg:text-7xl text-4xl font-bold">{counterMarketingTools} K+</h2>
            <p className="text-gray-600 text-lg">Paid Marketing Tools</p>
          </div>
        </div>

        {/* Image 1: Positioned at bottom-left with visibility on larger screens */}
        <div className="absolute bottom-0 left-0 z-10 hidden sm:block md:block">
          <img src={img2} alt="" />
        </div>

        {/* Image 2: Positioned at bottom-right with responsiveness */}
        <div className="absolute right-14 lg:bottom-28 lg:right-20 lg:bottom-24 md:right-10 md:bottom-20 sm:right-5 sm:bottom-16 z-20">
          <img src={star2} alt="" className="left-right-animation" />
        </div>
      </div>
    </div>
  );
}
