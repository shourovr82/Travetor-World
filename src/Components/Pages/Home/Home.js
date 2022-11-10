import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useSiteTitle from '../../../Hooks/useSiteTitle';
import Banner from './Banner';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import TouristSport from './TouristSport';
import TrustedClient from './TrustedClient';


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
        <div id='latest' className="text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">
            My Services
          </h1>
          <p className="mt-3 text-gray-500">
            Here you can find my services . Updated every Month.
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
                      <p>Price : <span className='text-lg font-bold'>${service.price}</span></p>
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


          <Link to='/services'>

            <button
              className="group relative inline-block overflow-hidden border border-blue-600 px-8 py-3 focus:outline-none focus:ring"
              href="/download">
              <span
                className="absolute inset-x-0 bottom-0 h-[2px] bg-[#3848f1] transition-all group-hover:h-full group-active:bg-blue-600"
              ></span>

              <span to='/services'
                className="relative text-sm font-medium  text-blue-600

              transition-colors group-hover:text-white"
              >

                See All Services
              </span>
            </button>
          </Link>

        </div>
        <div>
          {/* section for find your tour  */}
          <TouristSport></TouristSport>
        </div>
        <div className='mb-10'>

          {/*  section for trusted clients */}

          <TrustedClient></TrustedClient>
          {/*  section for trusted clients */}


        </div>
      </section>
    </div>
  );
};

export default Home;