import React from 'react';
import { FaStar } from 'react-icons/fa';

const Reviews = ({ review }) => {
  console.log(review);
  const { message } = review;
  return (
    <div className="mx-auto p-3 rounded-md shadow-lg max-w-screen-xl px-4  border sm:px-6 lg:px-8 w-full">

      <div className="mt-8 gap-x-16 gap-y-12 lg:grid-cols-2">
        <blockquote>
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

          <footer className="mt-4">
            <p className="text-xs text-gray-500">John Doe - 12th January, 2024</p>
          </footer>
        </blockquote>
      </div>
    </div>


  );
};

export default Reviews;