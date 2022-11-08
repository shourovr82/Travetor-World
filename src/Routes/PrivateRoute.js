import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContexts/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className='flex justify-center py-10'>
        <progress className="progress w-80 "></progress>
      </div>
    )
  }
  if (user && user?.uid) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;