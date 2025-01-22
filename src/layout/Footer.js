import React from "react";

export default function Footer() {
  return (
    <div className="footer bg-gray-100 py-10">
      {/* Main Footer Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 border-b-2 pb-6">
        {/* Dexon Section */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Dexon</h1>
          <p className="text-gray-600 mb-4">
            Ullamcorper risus ultrices in lorem. Vulputate aliquam, consecte
            error free scenarios done.
          </p>
          <ul className="flex text-2xl space-x-4 text-gray-400 ">
            <li className="hover:text-yellow-500">
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li className="hover:text-yellow-500">
              <i className="fa-brands fa-twitter"></i>
            </li>
            <li className="hover:text-yellow-500">
              <i className="fa-brands fa-linkedin-in"></i>
            </li>
            <li className="hover:text-yellow-500">
              <i className="fa-brands fa-pinterest-p"></i>
            </li>
          </ul>
        </div>

        {/* Informations Section */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Informations</h1>
          <ul className="text-gray-600 space-y-4">
            <li className="hover:text-yellow-500">About Company</li>
            <li className="hover:text-yellow-500">Latest Work</li>
            <li className="hover:text-yellow-500">Team Member</li>
            <li className="hover:text-yellow-500">Latest Blog</li>
            <li className="hover:text-yellow-500">Contact Us</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <ul className="text-gray-600 space-y-4">
            <li>Royels, Street Road 27, New York, USA - 87453</li>
            <li>example@gmail.com</li>
            <li>+98 069 (2350) 020</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Newsletter</h1>
          <div className="flex items-center border-2 border-gray-300 rounded-md overflow-hidden mb-4 hover:border-yellow-500 focus-within:border-yellow-400 transition-colors duration-300">
            <input
              type="search"
              placeholder="search here"
              className="flex-grow px-4 py-2 outline-none"
            />
            <button className="px-4 bg-white py-2">
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </div>

          <p className="text-gray-600">
            When do they work well, and when do they on us and finally,
          </p>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Left Section */}
            <div>
              <h3 className="text-gray-600 text-center sm:text-left lg:text-xl">
                2023 - 2030 | All rights reserved by Dream IT
              </h3>
            </div>

            {/* Right Section */}
            <div>
              <ul className="flex flex-wrap justify-center sm:justify-end space-x-6 text-gray-600 lg:text-lg" >
                <li className="hover:text-yellow-500 cursor-pointer">About</li>
                <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
                <li className="hover:text-yellow-500 cursor-pointer">Career</li>
                <li className="hover:text-yellow-500 cursor-pointer">Faq</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
