import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useSiteTitle from '../../../Hooks/useSiteTitle';
import spinner from '../../../Assets/spinner.svg'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const Services = () => {
  const [services, setServices] = useState([]);
  useSiteTitle('Services');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    fetch("https://travetor-world-server.vercel.app/services")
      .then(res => res.json())
      .then(data => {
        setServices(data)
      })
  }, [])


  return (
    <div>
      <section className="mt-12 mb-10 mx-auto px-4 max-w-screen-xl lg:px-8">


        <div className="text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">
            Our Services
          </h1>
          <p className="mt-3 text-gray-500">
            Blogs that are loved by the community. Updated every hour.
          </p>
        </div>
        {
          services.length === 0 && <>
            <div className='flex justify-center'>
              <img src={spinner} alt="" />
            </div>
          </>
        }
        <div className="mt-12  grid gap-3 sm:grid-cols-2 lg:grid-cols-3">



          {
            services.map((service, key) => (

              <div key={key} className="card card-compact  bg-base-100 shadow-xl">
                <figure>
                  {/* react photo view method */}
                  <PhotoProvider>
                    <PhotoView src={service.picture} >
                      <img className='h-[250px] w-full' src={service.picture} alt="Shoes" />
                    </PhotoView>
                  </PhotoProvider>


                </figure>
                <div className="card-body">
                  <h2 className="card-title">{service.title}</h2>
                  <p>{service.about ? service.about.slice(0, 100) : service.about}</p>


                  <div className="card-actions items-center justify-between ">
                    <div>
                      <p className='border px-2 rounded bg-blue-100'>Price : <span className='text-lg font-bold'>${service.price}</span></p>
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
        </div>
      </section >
    </div >
  );
};

export default Services;