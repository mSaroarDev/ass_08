import React from "react";
import AppNav from "../components/AppNav";

const Homepage = () => {
  return (
    <div>
      <AppNav />
      <div className="mt-[-80px] h-screen w-full flex items-center justify-center">
        <div>
          <div className="logo-container flex items-center justify-center mb-6">
            <img
              className="rotate-infinite w-52"
              src="./../../src/assets/logo.png"
              alt="React Logo"
            />
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
