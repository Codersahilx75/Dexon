import React, { useState, useEffect, useRef } from "react";
import flower from "../assets/img/sml-shape2.png";
import star from "../assets/img/shape4.png";
import border2 from "../assets/img/border2.png";
import amazonLogo from "../assets/img/amazon.png";
import newData from "../assets/data/newdata";
import dexon from "../assets/img/dexon.png";

export default function Content4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const counterRef = useRef(null);

  const cardsToShow = window.innerWidth >= 1024 ? 3 : 1; // 3 cards on large, 1 on small
  const totalSlides = Math.ceil(newData.length / cardsToShow);

  // Handling dot click to change cards
  const handleDotClick = (index) => {
    setCurrentIndex(index * cardsToShow);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounting(true);
        }
      },
      { threshold: 0.5 }
    );
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, []); // Removed `isCounting` from the dependencies

  // Counter logic
  const useCounter = (start, end, duration) => {
    const [value, setValue] = useState(start);

    useEffect(() => {
      if (isCounting) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          setValue(Math.floor(progress * (end - start) + start));
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };
        requestAnimationFrame(step);
      }
    }, [isCounting, start, end, duration]); // Keep `isCounting` as a dependency here for the counter logic

    return value;
  };

  const contentStrategy = useCounter(0, 50, 3000); // 1.5 seconds
  const audienceGrowth = useCounter(0, 70, 4000); // 2 seconds

  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-10 relative">
        {/* Flower Image */}
        <div className="mb-10 sm:w-1/6 w-full flex justify-center">
          <img
            src={flower}
            alt="flower"
            className="w-auto h-auto rotate-infinite"
          />
        </div>

        <div className="relative w-full h-full">
          {/* Centered Text with Background Image */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center sm:text-left px-8 sm:px-8 md:px-16 lg:px-22 z-10">
            <div>
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                What Say Our Customers About Dexon
              </h1>
              <p className="mt-4 text-sm text-gray-500 sm:text-base md:text-lg">
                Distinctively supply exceptional services after uniquely
                integrate alternative markets rather merging initiatives.
              </p>
            </div>
          </div>

          {/* Background Image */}
          <img
            src={border2}
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Star Image */}
        <div className="lg:w-1/6 flex justify-center">
          <img src={star} alt="star" className="w-auto h-auto move-star" />
        </div>
      </div>

      {/* Cards Section (Carousel) */}
      <div className="mb-6">
        {/* Card Container */}
        <div className="flex justify-center gap-6 mb-6">
          {newData
            .slice(currentIndex, currentIndex + cardsToShow)
            .map((card, index) => (
              <div
                key={index}
                className={`group card w-full ${
                  cardsToShow === 3 ? "lg:w-1/3" : "w-full"
                } p-6 bg-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105`}
                style={{ minHeight: "300px", minWidth: "300px" }}
              >
                <div className="flex items-center space-x-6 mb-6">
                  <img
                    src={card.img}
                    alt="customer"
                    className="w-20 h-20 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  />
                  <div>
                    <h2 className="font-bold text-lg">{card.firstName}</h2>
                    <p>{card.lastName}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-4 border-b-2 pb-2">
                  {card.information}
                </p>
                <div className="flex justify-between items-center">
                  <img
                    src={amazonLogo}
                    alt="amazon"
                    className="w-24 h-10 mr-2"
                  />
                  <ul className="flex space-x-1 text-yellow-500">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt"></i>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
        </div>

        {/* Dots for Navigation */}
        <div className="flex justify-center space-x-2 border-b-2 pb-10">
          {totalSlides > 1 &&
            Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 lg:h-4 lg:w-4 rounded-full ${
                  index === Math.floor(currentIndex / cardsToShow)
                    ? "bg-yellow-400"
                    : "bg-green-500"
                }`}
              ></button>
            ))}
        </div>
      </div>

      {/* Marketing Section */}
      <div
        className="mt-20 flex flex-col lg:flex-row justify-between lg:space-x-10"
        ref={counterRef}
      >
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6 sm:space-y-8 lg:space-y-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            We use various marketing channels to reach Sales
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl">
            Ullamcorper risus ultrices risus lorem. Mollis libero in
            pellentesque potenti. Vulputate ut aliquam, consectetur turpis odio.
          </p>

          <div className="flex flex-col sm:flex-row border-b-2 border-t-2 space-x-0 sm:space-x-10 py-6 mb-10">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <h4 className="text-4xl font-semibold">{contentStrategy} %</h4>
              <p className="text-gray-600 text-2xl">|</p>
              <p className="text-gray-600 text-lg">Content Strategy</p>
            </div>
            <div className="flex items-center space-x-4">
              <h4 className="text-4xl font-semibold">{audienceGrowth} %</h4>
              <p className="text-gray-600 text-2xl">|</p>
              <p className="text-gray-600 text-lg">Audience Growth</p>
            </div>
          </div>

          <div className="hover:text-yellow-400 text-lg lg:text-xl">
            <span className="underline">Learn More </span>
            <i className="fa-solid fa-square-arrow-up-right"></i>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src={dexon} alt="Marketing" className="w-full h-auto" />
          <img src={flower} alt="flower" className="zoom-animation" />
        </div>
      </div>
    </div>
  );
}
