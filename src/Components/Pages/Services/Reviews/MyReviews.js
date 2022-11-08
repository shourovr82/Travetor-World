import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../AuthContexts/AuthProvider';
import MyReviewItems from './MyReviewItems';

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    const url = `http://localhost:5000/myreview?email=${user?.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setReviews(data)
      })
  }, [user?.email])

  return (
    <div>
      <h2>This is my reviews</h2>

      <div className='grid grid-cols-1 gap-5 w-2/3 mx-auto py-10 mt-3'>

        {reviews.length ?
          reviews.map(review => (
            <MyReviewItems
              key={review._id}
              review={review}
            ></MyReviewItems>
          )) : <><h2>You havent added any reviews</h2></>
        }


      </div>


    </div >
  );
};

export default MyReviews;