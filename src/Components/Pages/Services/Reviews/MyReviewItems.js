import React, { useContext, useState } from 'react';
import { FaBackspace, FaEdit, FaPlus, FaStar } from 'react-icons/fa';
import { AuthContext } from '../../../../AuthContexts/AuthProvider';

const MyReviewItems = ({ review }) => {
  const [newReview, setNewReview] = useState({})
  const { user } = useContext(AuthContext);
  const { message } = review;
  const email = user?.email;

  const handleDeleteReview = (details) => {
    fetch(`http://localhost:5000/deleteReview/${details._id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  const handleUpdateReview = event => {
    event.preventDefault();
    console.log(newReview);
    const url = `http://localhost:5000/userReview/${newReview._id}`
    console.log(url);
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newReview)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }



  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...review, email }
    newReview[field] = value;
    setNewReview(newReview);
  }



  return (
    <div className="mx-auto bg-blue-50 pb-3 rounded-md shadow-lg max-w-screen-xl px-4  border border-[#2812f30c] sm:px-2 lg:px-8 w-full">

      <div className="py-6  gap-x-16 flex justify-between items-center gap-y-12 lg:grid-cols-2">
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

          <label htmlFor="my-modal-6" className="py-2 font-bold rounded-3xl px-6 bg-white  hover:text-white hover:border-[#fff0] border-[#9a06d467] hover:bg-[#3848f1] flex  gap-2 items-center btn-outline btn shadow">
            Edit  <FaEdit className='text-xl' />
          </label>
          <div>
            {/*review modal*/}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <div className='flex  justify-between items-center pb-3'>     <h3 className="font-bold text-lg">Update Review</h3>
                  <label type='submit'
                    htmlFor="my-modal-6" className="border cursor-pointer px-3 py-2 rounded"><FaBackspace className='text-2xl' /></label></div>
                <div>
                  {/*  add review form */}
                  <form
                    onSubmit={handleUpdateReview}
                    className='flex flex-col gap-3'>

                    <input onBlur={handleInputBlur} type="text"
                      name='ratings' className='rounded placeholder:italic placeholder:text-blue-500 px-10 py-3 placeholder:text-lg   border bg-slate-50 shadow-inner' placeholder='Your Ratings' required />
                    <input
                      onBlur={handleInputBlur} type="text" required
                      name='message' className='rounded placeholder:italic placeholder:text-blue-500 px-10 py-3 placeholder:text-lg   border bg-slate-50 shadow-inner'
                      placeholder='Type your Review message'

                    />
                    <div className="modal-action">
                      <button className='py-2 rounded-3xl px-6 flex text-white items-center gap-2 bg-[#3848f1] hover:bg-indigo-700 shadow' type="submit">Update</button>
                    </div>
                  </form>
                </div>

              </div>

            </div>



            <button
              onClick={() => handleDeleteReview(review)}

              className="btn btn-circle btn-outline  hover:border-[#fff0] border-[#9a06d467] hover:bg-[#3848f1] ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewItems;