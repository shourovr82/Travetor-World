import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setServices(data)
      })
  }, [])








  return (
    <div>
      <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">
            Our Services
          </h1>
          <p className="mt-3 text-gray-500">
            Blogs that are loved by the community. Updated every hour.
          </p>
        </div>
        <div className="mt-12  grid gap-3 sm:grid-cols-2 lg:grid-cols-3">



          {
            services.map((service, key) => (

              <div key={key} className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className='h-[250px] w-full' src={service.picture} alt="Shoes" /></figure>
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
                        <button className="btn btn-primary">See Details</button>
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