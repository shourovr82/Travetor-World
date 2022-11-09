import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import useSiteTitle from '../../../../Hooks/useSiteTitle';

const AddService = () => {

  useSiteTitle('Add Service')

  const handleSubmitService = event => {

    event.preventDefault();
    const form = event.target;
    const title = form.serviceName.value;
    const price = form.price.value;
    const Duration = form.duration.value;
    const ratings = form.ratings.value;
    const about = form.details.value;
    const picture = form.photoUrl.value;
    const newData = { price, Duration, about, picture, ratings, title }
    fetch('http://localhost:5000/addService', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }



  return (
    <div>
      <section className="bg-gray-100">
        <h2 className='text-center pt-12 font-bold text-xl'>Add  a New Service ...</h2>

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="/" className="text-2xl font-bold text-pink-600">
                  0151 475 4450
                </a>

                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form
                onSubmit={handleSubmitService}
                className="space-y-4">
                <div>
                  <label className="sr-only  " htmlFor="serviceName">serviceName</label>
                  <input
                    className="w-full border border-blue-300 rounded-lg  p-3 text-sm"
                    placeholder="Service Name" required
                    type="text"
                    id="serviceName"
                    name='serviceName'
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="price">Price</label>
                    <input
                      className="w-full rounded-lg border border-blue-300 p-3 text-sm"
                      placeholder="Your Service Price"
                      type="text"
                      id="price"
                      name='price'
                      required
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="duration">Duration</label>
                    <input
                      className="w-full rounded-lg border border-blue-300 p-3 text-sm"
                      placeholder="Your Service duration"
                      type="text"
                      name='duration'
                      required
                      id="duration"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="ratings">Ratings</label>
                    <input
                      className="w-full rounded-lg border border-blue-300 p-3 text-sm"
                      placeholder="Ratings"
                      required
                      type="text"
                      name='ratings'
                      id="ratings"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="photoUrl">Photo Url</label>
                    <input
                      className="w-full rounded-lg border border-blue-300 p-3 text-sm"
                      placeholder="Serice Photo URL"
                      type="text"
                      required
                      name='photoUrl'
                      id="photoUrl"
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="about">Service Description</label>
                  <textarea
                    className="w-full rounded-lg border border-blue-300 p-3 text-sm"
                    placeholder="Service Description"
                    rows="8"
                    id="about"
                    name='details'
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="py-2 rounded-3xl px-6  flex items-center text-white bg-[#3848f1] hover:bg-indigo-700 shadow"
                  >
                    <span className="font-medium"> Submit Service </span>
                    < FaArrowRight className='ml-3' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AddService;