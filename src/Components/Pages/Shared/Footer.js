import React from 'react';
import { FaArrowRight, FaDribbble, FaFacebook, FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/sitelogo.png'

const Footer = () => {
  return (
    <div>
      <footer aria-label="Site Footer" className=" header-bg">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div
            className="flex flex-col items-center border border-[#43639e7a] gap-4 rounded-lg  p-6 shadow-lg sm:flex-row sm:justify-between"
          >
            <strong className="text-xl text-white sm:text-xl">
              Let's find your new Tour ,Trip !
            </strong>

            <Link to='/services'
              className="inline-flex items-center rounded-full border border-white  px-8 py-3 text-white hover:bg-blue-800 hover:text-white focus:outline-none focus:ring active:bg-white/90"

            >
              <span className="text-sm font-medium"> Let's Get Started </span>
              <FaArrowRight className='ml-3' />

            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-300">About Me</p>

              <nav aria-label="Footer About Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-100"
                      href="/"
                    >
                      Education History
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-100"
                      href="/"
                    >
                      Meet with Me
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-100"
                      href="/"
                    >
                      Reviews by Clients
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-100"
                      href="/"
                    >
                      Can say 3 Languages
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-300">My Services</p>

              <nav aria-label="Footer Services Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-100"
                      href="/"
                    >
                      Tour Guide
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-100"
                      href="/"
                    >
                      Tour Booking
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-100"
                      href="/"
                    >
                      Details about Tour Places
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-100"
                      href="/"
                    >
                      Full Safety
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-400">Extra Facilities</p>

              <nav aria-label="Footer Resources Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-100"
                      href="/"
                    >
                      Online Guides
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-100"
                      href="/"
                    >
                      Video Conference
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-100"
                      href="/"
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-100"
                      href="/"
                    >
                      Book Air Ticket
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-100"
                      href="/"
                    >
                      Upcoming Events
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-400">Helpful Links</p>

              <nav aria-label="Footer Helpful Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-100"
                      href="/"
                    >
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-100"
                      href="/"
                    >
                      Support
                    </a>
                  </li>

                  <li>
                    <a
                      className="group flex justify-center gap-1.5 sm:justify-start"
                      href="/"
                    >
                      <span
                        className="text-gray-400 transition hover:text-gray-100"
                      >
                        Live Chat
                      </span>

                      <span className="relative -mr-2 flex h-3 w-3">
                        <span
                          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75"
                        ></span>
                        <span
                          className="relative inline-flex h-3 w-3 rounded-full bg-emerald-600"
                        ></span>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="mt-16">
            <ul className="flex justify-center gap-6 sm:justify-end">
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-blue-700"
                >
                  <span className="sr-only ">Facebook</span>
                  <FaFacebookF className='h-6 w-6' />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-blue-700"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className='h-6 w-6' />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-blue-700"
                >
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className='h-6 w-6' />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-blue-700"
                >
                  <span className="sr-only">GitHub</span>
                  <FaGithub className='h-6 w-6' />
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-blue-700"
                >
                  <span className="sr-only">Dribbble</span>
                  <FaDribbble className='h-6 w-6' />
                </a>
              </li>
            </ul>

            <div className="mt-16 sm:flex sm:items-center sm:justify-between">
              <div className="flex justify-center text-teal-600 sm:justify-start">
                <Link to='/'>
                  <img className='w-44' src={logo} alt="" />

                </Link>
              </div>

              <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
                Copyright &copy; 2022. All rights reserved by shourovr82.
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Footer;