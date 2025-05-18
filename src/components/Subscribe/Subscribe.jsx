import React from 'react'


const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gradient-to-r from-primary to-secondary dark:from-primary/30 dark:to-secondary/30 dark:bg-gray-900 text-white "

    >
      <div className="container py-10 mx-auto ">
        <div className="space-y-6 max-w-xl mx-auto  py-3 px-6 border-white bg-white/40 rounded-lg shadow-lg shadow-cyan-200/80">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 bg-white rounded text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;