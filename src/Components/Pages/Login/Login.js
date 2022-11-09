import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFirefoxBrowser, FaGithub, FaGoogle, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import { AuthContext } from '../../../AuthContexts/AuthProvider';
import useSiteTitle from '../../../Hooks/useSiteTitle';
import spinner from '../../../Assets/spinner.svg'
import toast from 'react-hot-toast';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { handleLogin, loginWithGoogle } = useContext(AuthContext);
  useSiteTitle('Login')
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    //  handle login with email and password

    handleLogin(email, password)
      .then(result => {
        const user = result?.user;
        const currentUser = {
          email: user.email
        };
        form.reset();
        // jwt token
        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            // set token to localstorage
            localStorage.setItem('Travetor Token', data.token)
            setLoading(false)
            toast.success(`Welcome ${user?.displayName ? user.displayName : ''} , You have Successfully Logged In`)
            navigate(from, { replace: true });
          })
      })
      .catch(e => {
        console.log(e)
        setLoading(false)
        toast.error(e.message.slice(15, 100))
      })
  }

  const handleGoogleLogin = () => {
    setLoading(true)
    loginWithGoogle()
      .then(result => {
        const user = result.user;
        const currentUser = {
          email: user.email
        }

        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            // set token to localstorage
            localStorage.setItem('Travetor Token', data.token)
            setLoading(false)
            toast.success(`Welcome ${user?.displayName ? user.displayName : ''} , You have Successfully Logged In`)
            navigate(from, { replace: true });
          })
      })

      .catch(e => {
        console.log(e)
        toast.error(e.message.slice(15, 100))
        setLoading(false)
      })
  }



  return (
    <div>
      <div className='login-bg h-[100vh]'>
        <br />
        <br /><br />
        {loading ? <></> : <><br /><br /><br /></>}


        <div className='flex flex-col-reverse md:grid gap-2 md:gap-5 mt-5 grid-cols-3 px-10 w-full md:w-11/12  mx-auto'>
          <div className='col-span-1 hidden  border border-[#4735e71e] shadow-[#0d057934] shadow-2xl  rounded bg-[#16076149] text-white h-[75vh] p-8 md:flex flex-col gap-16'>

            <div className='pt-3'>
              <h2 className='text-2xl mb-8 text-blue-500 font-bold uppercase '>Get  in Touch ...</h2>
              <p className='text-slate-400  text-sm font-semibold'>I am here to help and answer any questions you might have . I will answer your inquiries in a maximum of 48 hours.  </p>
            </div>



            <div className='flex flex-col gap-4'>
              <p className='flex items-center gap-2 '><FaGoogle className='text-[#79046f]' /> <span className='text-sm text-slate-400'>shafinur512@gmail.com</span></p>
              <p className='flex items-center gap-2 '><FaPhoneAlt className='text-[#79046f]' /> <span className='text-sm text-slate-400'>+8801317441769</span></p>
              <p className='flex items-center gap-2 '><FaFirefoxBrowser className='text-[#79046f]' /> <span className='text-sm text-slate-400'>shourovr82.com</span></p>
              <p className='flex items-center gap-2 '>
                <FaLocationArrow className='text-[#79046f]' /> <span className='text-sm text-slate-400'>Sirajganj, Bangladesh</span></p>
            </div>
          </div>



          <div className='col-span-2  mr-10bg-purple-900'>
            <div className='text-center flex justify-center items-center'><h2 className='text-slate-300 text-lg  md:text-2xl font-bold uppercase'>YOU HAVE TO LOGIN FIRST..</h2>
              {loading &&
                <>
                  <div className='flex relative justify-end ml-16'>
                    <img className=' w-28' src={spinner} alt="" />
                    <h2 className='absolute text-blue-500 text-xs top-10 right-8'>Logging  <br />In...</h2>
                  </div>
                </>
              }
            </div>

            <div>

            </div>
            {/*  input form for login  */}

            <form
              onSubmit={handleSubmitLogin}
              className='flex mt-20 flex-col  md:mt-20 gap-5 md:gap-10'>
              <div className='flex justify-around'>
                <input type="email" className='w-full md:mx-10 px-2 rounded py-2 bg-transparent border-b focus:outline-indigo-700 focus:text-white text-slate-400' name="email" id="" placeholder='Type Your Email' />
              </div>

              <div className='flex justify-around'>
                <input type="password" className='w-full md:mx-10 px-2 py-2 bg-transparent border-b rounded focus:outline-indigo-700 focus:text-white text-slate-400' name="password" id="" placeholder='Type your Password' />
              </div>
              <div className=' md:flex md:gap-10 items-center justify-between  md:mx-10'>
                <button type="submit" className="py-2 mt-5  mb-4 rounded-3xl w-full md:w-40  px-8 text-white bg-[#3848f1] hover:bg-indigo-700 shadow"> Login</button>
                <p className='text-slate-400'>Forgot Password?</p>
                <p className='text-slate-400'>New Here?  <Link to='/register' className='underline text-blue-500 '>Create an Account..</Link></p>
              </div>


            </form>



            <div className='flex justify-start ml-10 pt-3'>
              <div>
                <h2 className='text-blue-500  text-xs py-2' >or Sign in with...</h2>
                <div className='flex flex-col gap-3'>
                  <button
                    onClick={handleGoogleLogin}
                    className='flex items-center gap-3 border px-6 py-2 text-sm rounded border-[#1140db77] text-white bg-[#2826a013] hover:border-[#425cee]'><FaGoogle className='text-white text-lg ' /> Continue With Google</button>
                  <button className='flex items-center gap-3 border hover:border-[#425cee] px-6 py-2 text-sm rounded border-[#1140db77] text-white bg-[#2826a013]'><FaGithub className=' text-lg text-white ' />Continue With GitHub</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;