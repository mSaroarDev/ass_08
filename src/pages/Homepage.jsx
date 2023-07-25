import React from "react";
import AppNav from "../components/AppNav";

const Homepage = () => {
  return (
    <div>
      <AppNav />
      <div className="mt-[-80px] h-screen w-full flex items-center justify-center">
        <div>
          <div className="logo-container flex items-center justify-center mb-6">
            <svg
              width="100%"
              height="100%"
              viewBox="-10.5 -9.45 21 18.9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="text-[#61DBFB] rotate-infinite mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm mr-0 flex origin-center transition-all ease-in-out"
            >
              <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
              <g stroke="currentColor" stroke-width="1" fill="none">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
              </g>
            </svg>
          </div>
          <h1 className=" font-fontBn font-bold text-3xl text-center">
            রিয়েক্ট দিয়ে তৈরী করা সাধারন একটি অ্যাপ। <br /> যা আপনার উপার্জন এবং
            ব্যয়কে ট্র‌্যাকিং করতে পারে।
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
