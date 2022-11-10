import React from 'react';
import { FaStar } from 'react-icons/fa';

const Reviews = ({ review }) => {
  const { message, authorName, ratings, img, title, date } = review;
  return (
    <div className="mx-auto bg-gray-100 p-3 rounded-md shadow-lg max-w-screen-xl md:px-4  border sm:px-6 lg:px-8 w-full">

      <div className="gap-x-16 gap-y-12 lg:grid-cols-2">
        <h2 className='mb-3 text-sm text-gray-400'>Service  : <span className='font-semibold'>
          {title}
        </span></h2>
        <blockquote>
          <div>
            <header className="sm:flex sm:items-center">
              <div className=" -ml-1 flex items-center gap-3">
                <div className='flex'>
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-yellow-400' />
                  <FaStar className='text-gray-400' />
                </div>
                <div>
                  <p className='text-sm font-semibold'>{ratings}</p>
                </div>
              </div>
            </header>
          </div>
          <div>
            <p className="mt-2 text-gray-700 ">
              {message}
            </p>
          </div>

          <footer className="mt-4 flex justify-between">
            <div className='flex items-center justify-between gap-3'>
              <div className='flex items-center gap-3'>
                <img className='w-[30px] rounded-full' src={img ? img : 'https://i.ibb.co/xscgpJP/202-2024580-png-file-profile-icon-vector-png.jpg'} alt="" />
                <p className="text-xs text-gray-500">Author : {authorName === '' ? authorName : 'Anonymous'}</p>
              </div>

            </div>
            <p className='text-xs text-end mt-2  text-gray-400'>{date}</p>
          </footer>
        </blockquote>
      </div>
    </div>


  );
};

export default Reviews;