import React from 'react';
import { FaJs, FaNode, FaUserSecret } from 'react-icons/fa';
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='w-full '>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Programming Knowledge</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Interviews Questions for Full Stack Develeopers</h1>
          </div>
          <div className=" -m-4">

            {/* blogs sections */}
            {/*  first question */}

            <div className="p-4 w-4/5 mx-auto">
              <div className="flex rounded-2xl py-10 h-full bg-blue-700 blog-card  text-[#444] p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-transparent border text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-white  title-font font-serif font-bold  text-xl "> Difference between SQL and NoSQL...  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-white font-mono">NoSQL (“non SQL” or “not only SQL”) databases were developed in the late 2000s with a focus on scaling, fast queries, allowing for frequent application changes, and making programming simpler for developers. Relational databases accessed with SQL (Structured Query Language) were developed in the 1970s with a focus on reducing data duplication as storage was much more costly than developer time. SQL databases tend to have rigid, complex, tabular schemas and typically require expensive vertical scaling.</p>

                </div>
              </div>
            </div>
            {/* second  question */}

            <div className="p-4 w-4/5 mx-auto">
              <div className="flex rounded-2xl py-10 h-full bg-blue-700 blog-card  text-[#444] p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-transparent border text-white flex-shrink-0">
                    <FaUserSecret />
                  </div>
                  <h2 className="text-white  title-font font-serif font-bold  text-xl "> What is JWT, and how does it work?</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-white font-mono">JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.

                    JWT authentication is a token-based stateless authentication mechanism. It is popularly used as a client-side-based stateless session, this means the server doesn’t have to completely rely on a data store (or) database to save session information.

                    JWTs can be encrypted, but they are typically encoded & signed.  We will be focusing on Signed JWTs. The purpose of Signed JWT is not to hide the data but to ensure the authenticity of the data. And that is why it’s highly recommended to use HTTPS with Signed JWTs.</p>

                </div>
              </div>
            </div>

            <div className="p-4 w-4/5 mx-auto">
              <div className="flex rounded-2xl py-10 h-full bg-blue-700 blog-card  text-[#444] p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-transparent border text-white flex-shrink-0">
                    < FaJs className='text-lg' />
                  </div>
                  <h2 className="text-white  title-font font-serif font-bold  text-xl "> What is the difference between javascript and NodeJS?</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-white font-mono"> JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted.On the other hand, Node Js is a server-side scripting language built on the V8 engine.   JavaScript is a simple programming language that runs on any browser's JavaScript engine. While Node JS is a JavaScript interpreter or runtime environment, it requires libraries readily available from JavaScript programming to be more helpful..</p>

                </div>
              </div>
            </div>

            <div className="p-4 w-4/5 mx-auto">
              <div className="flex rounded-2xl py-10 h-full bg-blue-700 blog-card  text-[#444] p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-transparent border text-white flex-shrink-0">
                    <FaNode className='text-2xl' />
                  </div>
                  <h2 className="text-white  title-font font-serif font-bold  text-xl "> How does NodeJS handle multiple requests at the same time? </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-white font-mono">NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
                    NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
                    So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
                    The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
                    If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.</p>

                </div>
              </div>
            </div>


            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Subscribe to get Latest Update of upcoming Interview  Questions and my Services</h1>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
                </div>
                <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                  <div class="relative flex-grow w-full">
                    <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                    <input type="text" id="full-name" name="full-name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                  <div class="relative flex-grow w-full">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                  <button class="rounded-xl text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-blue-800  text-lg">Subscribe</button>
                </div>
              </div>
            </section>

          </div>
        </div>
      </section >
    </div >


  );
};

export default Blogs;