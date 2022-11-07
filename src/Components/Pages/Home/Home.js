import React from 'react';
import Banner from './Banner';
import HomeServices from './HomeServices';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeServices></HomeServices>
      <div className='flex justify-center py-10'>
        <a
          class="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
          href="/download"
        >
          <span
            class="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
          ></span>
          <span
            class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
          >
            See All Services
          </span>
        </a>

      </div>
      <div>
        <section>
          <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div
              class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
            >
              <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
                <h2 class="text-3xl font-bold sm:text-4xl">Find your career path</h2>

                <p class="mt-4 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
                  aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
                  Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
                  Obcaecati, autem.
                </p>

                <a
                  class="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  href="/get-started"
                >
                  <span class="text-sm font-medium"> Get Started </span>

                  <svg
                    class="ml-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <a
                  class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="/accountant"
                >
                  <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                      class="h-6 w-6"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <h2 class="mt-2 font-bold">Accountant</h2>

                  <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </a>

                <a
                  class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="/accountant"
                >
                  <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                      class="h-6 w-6"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <h2 class="mt-2 font-bold">Accountant</h2>

                  <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </a>

                <a
                  class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="/accountant"
                >
                  <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                      class="h-6 w-6"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <h2 class="mt-2 font-bold">Accountant</h2>

                  <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </a>

                <a
                  class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="/accountant"
                >
                  <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                      class="h-6 w-6"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <h2 class="mt-2 font-bold">Accountant</h2>

                  <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </a>

                <a
                  class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="/accountant"
                >
                  <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                      class="h-6 w-6"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <h2 class="mt-2 font-bold">Accountant</h2>

                  <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </a>

                <a
                  class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                  href="/accountant"
                >
                  <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                      class="h-6 w-6"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <h2 class="mt-2 font-bold">Accountant</h2>

                  <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section class="bg-white">
          <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div class="mx-auto max-w-3xl text-center">
              <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
                Trusted by eCommerce Businesses
              </h2>

              <p class="mt-4 text-gray-500 sm:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
                laborum labore provident impedit esse recusandae facere libero harum
                sequi.
              </p>
            </div>

            <div class="mt-8 sm:mt-12">
              <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div
                  class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                >
                  <dt class="order-last text-lg font-medium text-gray-500">
                    Total Sales
                  </dt>

                  <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                    $4.8m
                  </dd>
                </div>

                <div
                  class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                >
                  <dt class="order-last text-lg font-medium text-gray-500">
                    Official Addons
                  </dt>

                  <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
                </div>

                <div
                  class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                >
                  <dt class="order-last text-lg font-medium text-gray-500">
                    Total Addons
                  </dt>

                  <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

      </div>



    </div>
  );
};

export default Home;