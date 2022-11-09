import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFirefoxBrowser, FaGithub, FaGoogle, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import { AuthContext } from '../../../AuthContexts/AuthProvider';
import useSiteTitle from '../../../Hooks/useSiteTitle';
import spinner from '../../../Assets/spinner.svg'
import toast from 'react-hot-toast';

const SignUp = () => {

  const { handleRegister, handleSignOut, loginWithGoogle, handleUpdateProfile } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  useSiteTitle('Register')

  const handleCreateAccount = (event) => {
    setLoading(true)
    event.preventDefault();
    const form = event.target;
    const name = (form.firstName?.value) + ' ' + (form.lastName?.value);
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL?.value;
    const newDetails = ({ name: name, photoURL: photoURL });


    handleRegister(email, password)
      .then(result => {
        form.reset();
        setLoading(false)
        handleUpdateProfile(newDetails)
          .then(result => { })
          .catch(e => console.log(e))
        toast.success('Registration Successfull.  Please login Now')
        handleSignOut().then(result => { })
          .catch(e => console.log(e))
        navigate('/login');
      })
      .catch(e => console.log(e))
  }




  const handleGoogleLogin = () => {
    setLoading(true)
    loginWithGoogle()
      .then(result => {
        const user = result.user;
        setLoading(false)
        navigate(from, { replace: true });
      })
      .catch(e => console.log(e))
  }


  return (
    <div className='login-bg h-[100vh]'>
      <br />

      {loading ? <><br /><br /></> : <><br /><br /> <br /></>}


      <div className='md:grid gap-5 w-full mt-5 grid-cols-3 md:px-10 md:w-11/12  mx-auto'>
        {/* get in touch section */}
        <div className='col-span-1 hidden border border-[#4735e71e] shadow-[#0d057934] shadow-2xl  rounded bg-[#16076149] text-white h-[75vh] p-8 md:flex flex-col gap-16'>

          <div className='pt-3'>
            <h2 className='text-2xl mb-8 text-blue-500 font-bold uppercase '>Get  in Touch ...</h2>
            <p className='text-slate-400  text-sm font-semibold'>We are here to help and answer any questions you might have . We will answer your inquiries in a maximum of 48 hours.  </p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='flex items-center gap-2 '><FaGoogle className='text-[#79046f]' /> <span className='text-sm text-slate-400'>shafinur512@gmail.com</span></p>
            <p className='flex items-center gap-2 '><FaPhoneAlt className='text-[#79046f]' /> <span className='text-sm text-slate-400'>+8801317441769</span></p>
            <p className='flex items-center gap-2 '><FaFirefoxBrowser className='text-[#79046f]' /> <span className='text-sm text-slate-400'>shourovr82@gmail.com</span></p>
            <p className='flex items-center gap-2 '><FaLocationArrow className='text-[#79046f]' /> <span className='text-sm text-slate-400'>Sirajganj, Bangladesh</span></p>

          </div>
        </div>

        <div className='col-span-2   md:mr-10 '>
          <div className='text-center flex items-center mb-16 justify-center'><h2 className='text-white text-lg  md:text-2xl font-bold uppercase'>CREATE A NEW ACCOUNT</h2>

            {/*  loading spinner */}
            {loading &&
              <>

                <div className='flex relative justify-end ml-16'>
                  <img className='w-52 md:w-28' src={spinner} alt="" />
                  <h2 className='absolute text-blue-500 md:text-xs top-6 right-3 text-sm md:top-10 md:right-8'>Creating <br /> Account...</h2>
                </div>
              </>
            }
          </div>

          {/*  input sign in form */}

          <form
            onSubmit={handleCreateAccount}
            className='flex flex-col md:mt-20 gap-5 md:gap-10'>
            <div className='flex justify-around'>
              <input type="text" className='w-2/5 px-2 py-2 bg-transparent border-b rounded  focus:outline-indigo-700 focus:text-white text-slate-400' name="firstName" id="" placeholder='First Name' />
              <input type="text" className='w-2/5 px-2 py-2 bg-transparent border-b focus:outline-indigo-700 focus:text-white text-slate-400' name="lastName" id="" placeholder=' Your last Name' />
            </div>

            <div className='flex justify-around'>
              <input type="text" className='w-full mx-5 md:mx-10 px-2 rounded py-2 bg-transparent border-b focus:outline-indigo-700 focus:text-white text-slate-400' name="photoURL" id="" placeholder='Your Photo Link' />
            </div>

            <div className='flex flex-col gap-6 md:gap-2 justify-around mx-5'>
              <input type="email" className='md:w-2/5 px-2 rounded py-2 bg-transparent border-b focus:outline-indigo-700 focus:text-white text-slate-400' name="email" id="" placeholder='Type Your Email' />
              <input type="password" className='md:w-2/5 px-2 py-2 bg-transparent border-b rounded focus:outline-indigo-700 focus:text-white text-slate-400' name="password" id="" placeholder='Type your Password' />
            </div>
            <div className=' md:flex gap-10 items-center justify-between mx-10'>
              <button type="submit" className="py-2 w-full md:w-56 rounded-3xl px-8 text-white bg-[#3848f1] hover:bg-indigo-700 shadow"> Register</button>

              <p className='text-slate-400 mt-2'>Already Have an Account? <Link to='/login' className='underline text-blue-500 '>Login..</Link></p>
            </div>
          </form>

          <div className='flex justify-start ml-10 pt-3'>
            <div>
              <h2 className='text-blue-500  text-xs py-2' >or Sign up with...</h2>
              <div className='flex flex-col gap-3'>
                <button onClick={handleGoogleLogin} className='flex items-center gap-3 border px-6 py-2 text-sm rounded border-[#1140db77] text-white bg-[#2826b893] md:bg-[#2826a013] hover:border-[#425cee]'><FaGoogle className='text-white text-lg ' /> Continue With Google</button>
                <button className='flex items-center gap-3 border hover:border-[#425cee] px-6 py-2 text-sm rounded border-[#1140db77] text-white bg-[#2826b893] md:bg-[#2826a013]'><FaGithub className=' text-lg text-white ' />Continue With GitHub</button>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;