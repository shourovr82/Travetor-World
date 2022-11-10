import React from 'react';
import toast from 'react-hot-toast';
import { FaArrowRight } from 'react-icons/fa';
import useSiteTitle from '../../../../Hooks/useSiteTitle';

const AddService = () => {
  // set title
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
    const date = new Date().toLocaleString();
    const newData = { price, picture, title, about, Duration, ratings, date }
    fetch('http://localhost:5000/addService', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
      .then(res => res.json())
      .then(data => {
        form.reset();
        toast.success('Congratulations ! your Service Added Successfull');
      })
  }



  return (
    <div>
      <section className="bg-gray-100">
        <h2 className='text-center pt-12 font-bold text-2xl'>Add  a New Service ...</h2>

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className=''>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95206.47128584987!2d90.42086240655664!3d23.811535061334293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1668054487491!5m2!1sen!2sbd" width="500" height="400" className='mt-2   rounded-xl shadow-xl  shadow-slate-300' title='map' allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <p className='text-blue-700 font-semibold  font-sm mt-4'>Select Your Place</p>
              </div>

              <div className="mt-8">
                <p>Need Help ?</p>
                <p className="text-2xl font-bold text-pink-800">
                  +8801317441769
                </p>

                <address className="mt-2 not-italic">

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
                      type="number"
                      max={5}
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