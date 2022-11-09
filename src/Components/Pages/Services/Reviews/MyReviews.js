import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../AuthContexts/AuthProvider';
import useSiteTitle from '../../../../Hooks/useSiteTitle';
import MyReviewItems from './MyReviewItems';

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  useSiteTitle('My Reviews')

  useEffect(() => {
    const url = `http://localhost:5000/myreview?email=${user?.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setReviews(data)
      })
  }, [user?.email, reviews])



  return (
    <div className=''>
      <h2 className='text-center text-2xl pt-10 font-bold '> My reviews</h2>

      <div className='grid grid-cols-1 gap-5 w-11/12 md:w-3/4 mx-auto py-10 mt-3 '>

        {reviews.length ?
          reviews.map(review => (
            <MyReviewItems
              key={review._id}
              review={review}
            ></MyReviewItems>
          )) : <><h2 className='text-center text-2xl font-semibold text-gray-500'>You havent added any reviews</h2></>
        }
      </div>

    </div >
  );
};

export default MyReviews;