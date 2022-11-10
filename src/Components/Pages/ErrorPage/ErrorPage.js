import React from 'react';
import { Link } from 'react-router-dom';
import './Erropage.css'


const ErrorPage = () => {
  return (
    <div className='error-bg relative'>
      <div className='absolute z-10 w-full  top-1/3 '>
        <div className='flex  justify-center mx-auto'>
          <div className='text-center'>

            <h2 className='text-6xl text-slate-300 font-bold font-serif'>ERROR</h2>
            <h2 className='text-9xl text-slate-300 font-extrabold font-serifs'>404</h2>
            <p className='text-5xl text-slate-300 font-thin '>PAGE NOT FOUND</p>
            <Link to='/' className='mt-10'>
              <button className='mt-10 text-slate-200 btn btn-outline hover:bg-blue-500' >Go to Home Page</button>

            </Link>
          </div>



        </div>
      </div>
    </div>
  );
};

export default ErrorPage;