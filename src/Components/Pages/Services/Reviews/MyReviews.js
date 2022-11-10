import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../AuthContexts/AuthProvider';
import useSiteTitle from '../../../../Hooks/useSiteTitle';
import MyReviewItems from './MyReviewItems';

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user, handleSignOut } = useContext(AuthContext);
  useSiteTitle('My Reviews')

  useEffect(() => {
    fetch(`http://localhost:5000/myreview?email=${user?.email}`, {
      headers: {
        authorization: `Travetor ${localStorage.getItem('Travetor Token')}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          toast.error(`Sorry  you have ${res.statusText} Access. Login again`)
          handleSignOut();
        }
        return res.json();
      })
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
              setReviews={setReviews}
              review={review}
            ></MyReviewItems>
          )) : <><h2 className='text-center text-2xl font-semibold text-gray-500'>You havent added any reviews</h2></>
        }
      </div>

    </div >
  );
};

export default MyReviews;