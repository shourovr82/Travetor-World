import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useSiteTitle from '../../../Hooks/useSiteTitle';
import Banner from './Banner';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Home = () => {
  const [services, setServices] = useState([]);
  useSiteTitle('HOME')

  useEffect(() => {
    fetch('http://localhost:5000/servicesHome')
      .then(res => res.json())
      .then(data => {
        setServices(data)
      })
  }, [])



  return (
    <div>
      <Banner></Banner>
      <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">
            Our Services
          </h1>
          <p className="mt-3 text-gray-500">
            Blogs that are loved by the community. Updated every hour.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/*  all services  */}
          {
            services.map((service, key) => (
              <div key={key} className="card card-compact  bg-base-100 shadow-xl">
                <figure>





                  <PhotoProvider>
                    <PhotoView src={service.picture} >
                      <img className='h-[250px] w-full' src={service.picture} alt="Shoes" />
                    </PhotoView>
                  </PhotoProvider>



                </figure>
                <div className="card-body">
                  <h2 className="card-title">{service.title}!</h2>
                  <p>{service.about ? service.about.slice(0, 100) : service.about}</p>

                  <div className="card-actions items-center justify-between ">
                    <div>
                      <p>Price : <span className='text-lg font-bold'>{service.price}</span></p>
                    </div>
                    <div>
                      <p className='flex items-center gap-2'>Ratings : {service.ratings} <FaStar className='text-lg text-yellow-500' /></p>
                    </div>
                    <div>
                      <Link to={`/services/${service._id}`}>
                        <button className="py-2 rounded-3xl px-5 text-white bg-[#3848f1] hover:bg-indigo-700 flex  items-center  gap-2 shadow">See Details <FaArrowRight /> </button>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            ))
          }




        </div >
        <div className='flex justify-center py-10'>
          <button
            className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
            href="/download">
            <span
              className="absolute inset-x-0 bottom-0 h-[2px] bg-[#3848f1] transition-all group-hover:h-full group-active:bg-indigo-500"
            ></span>

            <Link to='/services'
              className="relative text-sm font-medium  text-blue-600

              transition-colors group-hover:text-white"
            >


              See All Services
            </Link>
          </button>
        </div>
        <div>

          <section>
            <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div
                className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
              >
                <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
                  <h2 className="text-3xl font-bold sm:text-4xl">Find your career path</h2>

                  <p className="mt-4 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
                    aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
                    Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
                    Obcaecati, autem.
                  </p>

                  <a
                    className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    href="/get-started"
                  >
                    <span className="text-sm font-medium"> Get Started </span>

                    <svg
                      className="ml-3 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <a
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="/accountant"
                  >
                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    </span>

                    <h2 className="mt-2 font-bold">Accountant</h2>

                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </a>

                  <a
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="/accountant"
                  >
                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    </span>

                    <h2 className="mt-2 font-bold">Accountant</h2>

                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </a>

                  <a
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="/accountant"
                  >
                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    </span>

                    <h2 className="mt-2 font-bold">Accountant</h2>

                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </a>

                  <a
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="/accountant"
                  >
                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    </span>

                    <h2 className="mt-2 font-bold">Accountant</h2>

                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </a>

                  <a
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="/accountant"
                  >
                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    </span>

                    <h2 className="mt-2 font-bold">Accountant</h2>

                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </a>

                  <a
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="/accountant"
                  >
                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    </span>

                    <h2 className="mt-2 font-bold">Accountant</h2>

                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>

          <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Trusted by eCommerce Businesses
                </h2>

                <p className="mt-4 text-gray-500 sm:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
                  laborum labore provident impedit esse recusandae facere libero harum
                  sequi.
                </p>
              </div>

              <div className="mt-8 sm:mt-12">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div
                    className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                  >
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Total Sales
                    </dt>

                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                      $4.8m
                    </dd>
                  </div>

                  <div
                    className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                  >
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Official Addons
                    </dt>

                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
                  </div>

                  <div
                    className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                  >
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Total Addons
                    </dt>

                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

        </div>
      </section>
    </div>
  );
};

export default Home;