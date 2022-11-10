import React from 'react';

const TrustedClient = () => {
  return (
    <section className="bg-white rounded-md ">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by
            More Than
            5500+
            Clients
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            I  only choose the best one for you
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div
              className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
            >
              <dt className="order-last text-lg font-medium text-gray-500">
                Professional Tour Guides
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                640+
              </dd>
            </div>

            <div
              className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
            >
              <dt className="order-last text-lg font-medium text-gray-500">
                Tours are Completed
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">6100+</dd>
            </div>
            <div
              className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
            >
              <dt className="order-last text-lg font-medium text-gray-500">
                Travelling Experience
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">10k+</dd>
            </div>

            <div
              className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
            >
              <dt className="order-last text-lg font-medium text-gray-500">
                Happy Customers
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">5k+</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

  );
};

export default TrustedClient;