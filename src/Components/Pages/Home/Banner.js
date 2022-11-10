import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
  return (
    <section className="banner-image md:mt-[-100px] md:h-[105vh] h-[100vh] text-white">
      <div
        className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-[#2466e9] via-blue-500 to-purple-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl uppercase"
          >
            Travelling with a companion

            <span className="sm:block pb-4 ">can give you peace of mind </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            DISCOVER THE WORLD WITH MY GUIDE
          </p>
          <small className='font-light text-slate-300'>Find your next tour
            Where would you like to go?</small>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#latest"
            >
              Get Latest Services
            </a>

            <Link to='/services'
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="/about"
            >
              All Services
            </Link>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Banner;