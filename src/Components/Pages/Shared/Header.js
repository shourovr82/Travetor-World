import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthContexts/AuthProvider';
import './Header.css'

const Header = () => {
  const [state, setState] = useState(false);

  const { user, handleSignOut } = useContext(AuthContext)

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "Reviews", path: "/reviews" }
  ]


  return (
    <nav className="header-bg relative z-10 w-full border-b md:border-0  md:static">
      <div className="items-center md:justify-between  px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 md:block">
          <Link to='/' className='text-2xl font-semibold text-blue-300'>
            TRAVETOR
          </Link>
          <div className="md:hidden">
            <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
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
        <div className={`flex-1 justify-self-center pb-3 mt-8 md:hidden md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {
              navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-white hover:text-indigo-600">
                    <Link to={item.path}>
                      {item.title}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="hidden  md:flex gap-5">

          <div>
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {
                navigation.map((item, idx) => {
                  return (
                    <li key={idx} className="text-white hover:text-indigo-600">
                      <Link to={item.path}>
                        {item.title}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div>
            {user === null ? <Link to='/login' className="py-2 rounded-3xl px-5 text-white bg-[#3848f1] hover:bg-indigo-700 shadow">
              Login
            </Link>
              : <Link
                className="py-2 rounded-3xl px-4 text-white bg-[#3848f1] hover:bg-indigo-700 shadow">
                LogOut
              </Link>

            }


          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;