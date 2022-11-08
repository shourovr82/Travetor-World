import React, { useContext, useEffect, useState } from 'react';
import { FaArrowRight, FaBackspace, FaPlus, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthContexts/AuthProvider';
import Reviews from './Reviews/Reviews';

const ServiceDetails = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState({})
  const service = useLoaderData();
  const { Duration, about, picture, price, ratings, title, _id } = service;
  const email = user?.email;
  const img = user?.photoURL;
  const authorName = user?.displayName;
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?serviceName=${title}`)
      .then(res => res.json())
      .then(data => {
        setReviews(data)
      })
  }, [title])




  const handleAddReview = event => {
    event.preventDefault();
    fetch('http://localhost:5000/postReview', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => res.json())
      .then(data => {
        setReviews([data, ...reviews])
        event.target.reset();
      })
  }


  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...review, email, title, img, authorName }
    newReview[field] = value;
    const id = 'id';
    newReview[id] = _id;
    setReview(newReview);
  }



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
                <p className="text-2xl font-bold">${price}</p>
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

              <section className='bg-blue-50 rounded-md shadow-[#2e0a7217] shadow-lg'>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">

                  <div className="flex items-center justify-between ">
                    {
                      reviews.length ? <>
                        <div className='flex items-center'>
                          <p className="text-3xl font-medium">
                            4.5
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
                            <p className="mt-0.5 text-xs text-gray-500">Based on {reviews.length} reviews</p>
                          </div>
                        </div>
                      </>
                        :
                        <>
                          <h2 className='text-lg font-semibold'>No Reviews Found On this Service !</h2>
                        </>
                    }




                    {/* The button to open modal */}


                    <div>
                      {user ? <>
                        <label htmlFor="my-modal-6" className="py-2 justify-end rounded-3xl px-6 flex text-white items-center gap-2 bg-[#3848f1] hover:bg-indigo-700 shadow cursor-pointer">    Add Review <FaPlus /></label>



                        {/*review modal*/}
                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                          <div className="modal-box">
                            <div className='flex  justify-between items-center pb-3'>     <h3 className="font-bold text-lg">Add a Review</h3>
                              <label type='submit'
                                htmlFor="my-modal-6" className="border cursor-pointer px-3 py-2 rounded"><FaBackspace className='text-2xl' /></label></div>
                            <div>
                              {/*  add review form */}
                              <form
                                onSubmit={handleAddReview}
                                className='flex flex-col gap-3'>

                                <input onBlur={handleInputBlur} type="text"
                                  name='ratings' className='rounded placeholder:italic placeholder:text-blue-500 px-10 py-3 placeholder:text-lg   border bg-slate-50 shadow-inner' placeholder='Your Ratings' required />
                                <input
                                  onBlur={handleInputBlur} type="text" required
                                  name='message' className='rounded placeholder:italic placeholder:text-blue-500 px-10 py-3 placeholder:text-lg   border bg-slate-50 shadow-inner'
                                  placeholder='Type your Review message'

                                />
                                <div className="modal-action">
                                  <button className='py-2 rounded-3xl px-6 flex text-white items-center gap-2 bg-[#3848f1] hover:bg-indigo-700 shadow'
                                    type="submit">Submit</button>
                                </div>
                              </form>
                            </div>

                          </div>

                        </div></> : <>
                        <h2 className='text-lg border px-3 rounded py-2'>Login to add Review <br /> <Link to='/login' className='text-blue-400 text-lg flex  gap-2 items-center  font-semibold'>Login Here  <FaArrowRight className='text-sm mt-1' />
                        </Link></h2>

                      </>}
                    </div>

                  </div>
                  <div className='grid grid-cols-1 gap-5 mt-3'>

                    {reviews.length ?
                      reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                      ></Reviews>)

                      :
                      <></>
                    }
                  </div>
                </div>
              </section>

            </div>
          </div >



        </div >
      </section >
    </div >
  );
};

export default ServiceDetails;