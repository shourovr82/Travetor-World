import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Reviews from './Reviews/Reviews';

const ServiceDetails = () => {
  const [details, setDetails] = useState({});
  const [reviews, setReviews] = useState([]);
  const service = useLoaderData();
  const { Duration, about, picture, price, ratings, title, _id } = service;

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data)
      })
  }, [])



  return (
    <div>
      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid  grid-cols-1 items-start gap-8 md:grid-cols-2">


            <div className="sticky top-0">
              <div className='pb-3'>
                <img src={picture} className='w-full rounded-md h-[350px]' alt="" />
              </div>


              <strong
                className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
              >
                Pre Order
              </strong>

              <div className="mt-8 mb-3 flex justify-between">
                <div className="max-w-[35ch]">
                  <h1 className="text-2xl font-bold">
                    {title}
                  </h1>

                  <p className="mt-0.5 text-sm">Duraration : {Duration}</p>

                  <div className="mt-2 -ml-0.5 flex items-center gap-3">
                    <div className='flex '>
                      <FaStar className='text-yellow-500' />
                      <FaStar className='text-yellow-500' />
                      <FaStar className='text-yellow-500' />
                      <FaStar className='text-yellow-500' />
                    </div>
                    <div>
                      <span className='font-semibold'>
                        {ratings}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-2xl font-bold">{price}</p>
              </div>
              <div>
                <div className="prose max-w-none">
                  <p>
                    {about}
                  </p>
                </div>
              </div>
            </div>




            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <h2 className='text-3xl text-center font-bold '>Customer Reviews...</h2>

              <section className='bg-red-50'>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                  <div className="flex items-center">
                    <p className="text-3xl font-medium">
                      3.8
                      <span className="sr-only"> Average review score </span>
                    </p>
                    <div className="ml-4">
                      <div className="-ml-1 flex">
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-yellow-400' />
                        <FaStar className='text-gray-400' />
                      </div>
                      <p className="mt-0.5 text-xs text-gray-500">Based on 48 reviews</p>
                    </div>
                  </div>
                  <div className='grid grid-cols-1 gap-3 mt-3'>

                    {
                      reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                      ></Reviews>)

                    }
                  </div>
                </div>
              </section>

            </div>
          </div>



        </div>
      </section >
    </div >
  );
};

export default ServiceDetails;