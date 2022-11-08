import React from 'react';
import { FaStar } from 'react-icons/fa';

const Reviews = ({ review }) => {
  const { message, authorName, img, title } = review;
  console.log(review);
  return (
    <div className="mx-auto p-3 rounded-md shadow-lg max-w-screen-xl px-4  border sm:px-6 lg:px-8 w-full">

      <div className="gap-x-16 gap-y-12 lg:grid-cols-2">
        <h2 className='mb-3 text-sm text-gray-400'>Service  : <span className='font-semibold'>
          {title}
        </span></h2>
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

          <footer className="mt-4 flex justify-between">
            <div className='flex items-center gap-3'>
              <img className='w-[30px] rounded-full' src={img ? img : 'https://i.ibb.co/9pTrT1y/images.png'} alt="" />
              <p className="text-xs text-gray-500">Author Name : {authorName}</p>
            </div>
            <p className='text-xs text-gray-400'>12th January, 2024</p>
          </footer>
        </blockquote>
      </div>
    </div>


  );
};

export default Reviews;