import React from 'react';
import { FaEdit, FaStar } from 'react-icons/fa';

const MyReviewItems = ({ review }) => {
  const { message } = review;

  return (
    <div className="mx-auto pb-3 rounded-md shadow-lg max-w-screen-xl px-4  border sm:px-6 lg:px-8 w-full">

      <div className="py-6 gap-x-16 flex justify-between items-center gap-y-12 lg:grid-cols-2">
        <blockquote>
          <div>
            <header className="sm:flex sm:items-center">
              <div className="-ml-1 flex">
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <FaStar className='text-yellow-400' />
                <FaStar className='text-gray-400' />
              </div>
            </header>
            <p className="mt-2 text-gray-700">
              {message}
            </p>
          </div>
          <div></div>

          <footer className="mt-4">
            <p className="text-xs text-gray-500"> shafin 12th January, 2024</p>
          </footer>
        </blockquote>
        <div className='flex flex-col gap-3 items-center'>
          <button type="submit" className="py-2 rounded-3xl px-6 bg-white  hover:text-white hover:border-[#fff0] border-[#9a06d467] hover:bg-[#3848f1] flex  gap-2 items-center btn-outline btn shadow"> Update <FaEdit className='text-xl' /></button>



          <button className="btn btn-circle btn-outline hover:bg-blue-600 hover:border-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewItems;