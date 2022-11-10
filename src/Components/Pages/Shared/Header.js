import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthContexts/AuthProvider';
import './Header.css'
import siteLogo from '../../../Assets/sitelogo.png'
import toast from 'react-hot-toast';

const Header = () => {
  const [state, setState] = useState(false);
  const { user, handleSignOut } = useContext(AuthContext)

  const handleLogOut = () => {
    handleSignOut()
      .then(result => {
        toast.success('Logout Successfull')
      })
      .catch(err => {
        console.log(err)
        toast.error(err.message)
      })
  }



  return (
    <nav className="header-bg relative z-10 w-full border-b md:border-0  md:static">
      <div className="items-center md:justify-between  px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-2 md:block">
          <Link to='/' className=''>
            <img className='w-32' src={siteLogo} alt="" />
          </Link>

          <div className="md:hidden">
            <button className="text-white outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {
                state ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )
              }
            </button>

          </div>
        </div>

        {/* for mobile device responsive navbar items */}

        <div className={`flex-1 justify-self-center pb-3 mt-8 md:hidden md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>



          <ul className="justify-center flex flex-col pb-10 items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-white hover:text-indigo-600">
              <Link to='/'>
                Home</Link>
            </li>

            <li className="text-white hover:text-indigo-600">
              <Link to='/services'>
                Services</Link>
            </li>

            {user &&
              <>

                <li className="text-white hover:text-indigo-600">
                  <Link to='/addservice'>
                    Add Service</Link>
                </li>


                <li className="text-white hover:text-indigo-600">
                  <Link to='/myReviews'>
                    My Reviews</Link>
                </li>
              </>
            }



            <li className="text-white hover:text-indigo-600">
              <Link to='/blogs'>
                Blogs</Link>
            </li>

            {user === null ? <Link to='/login' className="py-2 rounded-3xl px-5 text-white bg-[#3848f1] hover:bg-indigo-700 shadow">
              Login
            </Link>
              : <Link
                onClick={handleLogOut}
                className="py-2 rounded-3xl px-4 text-white bg-[#3848f1] hover:bg-indigo-700 shadow">
                LogOut
              </Link>
            }

          </ul>
        </div>

        {/* for large device navbar items */}


        <div className="hidden  md:flex gap-5">
          <div>
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-600">
                <Link to='/'>
                  Home</Link>
              </li>

              <li className="text-white hover:text-indigo-600">
                <Link to='/services'>
                  Services</Link>
              </li>

              {user &&
                <>

                  <li className="text-white hover:text-indigo-600">
                    <Link to='/addservice'>
                      Add Service</Link>
                  </li>


                  <li className="text-white hover:text-indigo-600">
                    <Link to='/myReviews'>
                      My Reviews</Link>
                  </li>
                </>
              }



              <li className="text-white hover:text-indigo-600">
                <Link to='/blogs'>
                  Blogs</Link>
              </li>

              {user === null ? <Link to='/login' className="py-2 rounded-3xl px-5 text-white bg-[#3848f1] hover:bg-indigo-700 shadow">
                Login
              </Link>
                : <Link
                  onClick={handleLogOut}
                  className="py-2 rounded-3xl px-4 text-white bg-[#3848f1] hover:bg-indigo-700 shadow">
                  LogOut
                </Link>
              }

            </ul>
          </div>

          <div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;