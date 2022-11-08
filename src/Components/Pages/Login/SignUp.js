import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFirefoxBrowser, FaGithub, FaGoogle, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import { AuthContext } from '../../../AuthContexts/AuthProvider';

const SignUp = () => {

  const { handleRegister, handleSignOut, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';



  const handleCreateAccount = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = (form.firstName.value) + ' ' + (form.lastName.value);

    const email = form.email.value;
    const password = form.password.value;
    handleRegister(email, password)
      .then(result => {
        form.reset();
        handleSignOut().then(result => { }).catch(e => console.log(e))
        navigate('/login');
      })
      .catch(e => console.log(e))
  }


  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch(e => console.log(e))
  }




  return (
    <div className='login-bg h-[100vh]'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='grid gap-5 mt-5 grid-cols-3 px-10 w-11/12  mx-auto'>

        <div className='col-span-1  border border-[#4735e71e] shadow-[#0d057934] shadow-2xl  rounded bg-[#16076149] text-white h-[75vh] p-8 flex flex-col gap-16'>

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



        <div className='col-span-2  mr-10bg-purple-900'>
          <div className='text-center'><h2 className='text-white text-3xl font-bold uppercase'>CREATE A NEW ACCOUNT</h2></div>


          <form
            onSubmit={handleCreateAccount}
            className='flex flex-col md:mt-20  gap-10'>

            <div className='flex justify-around'>
              <input type="text" className='w-2/5 px-2 py-2 bg-transparent border-b rounded  focus:outline-indigo-700 focus:text-white text-slate-400' name="firstName" id="" placeholder='First Name' />
              <input type="text" className='w-2/5 px-2 py-2 bg-transparent border-b focus:outline-indigo-700 focus:text-white text-slate-400' name="lastName" id="" placeholder=' Your last Name' />
            </div>

            <div className='flex justify-around'>
              <input type="text" className='w-full mx-10 px-2 rounded py-2 bg-transparent border-b focus:outline-indigo-700 focus:text-white text-slate-400' name="photoURL" id="" placeholder='Your Photo Link' />
            </div>

            <div className='flex justify-around'>
              <input type="email" className='w-2/5 px-2 rounded py-2 bg-transparent border-b focus:outline-indigo-700 focus:text-white text-slate-400' name="email" id="" placeholder='Type Your Email' />
              <input type="password" className='w-2/5 px-2 py-2 bg-transparent border-b rounded focus:outline-indigo-700 focus:text-white text-slate-400' name="password" id="" placeholder='Type your Password' />
            </div>
            <div className=' flex gap-10 items-center justify-between mx-10'>
              <button type="submit" className="py-2 rounded-3xl px-8 text-white bg-[#3848f1] hover:bg-indigo-700 shadow"> Register</button>

              <p className='text-slate-400'>Already Have an Account? <Link to='/login' className='underline text-blue-500 '>Login..</Link></p>

            </div>




          </form>
          <div className='flex justify-start ml-10 pt-3'>
            <div>
              <h2 className='text-blue-500  text-xs py-2' >or Sign up with...</h2>
              <div className='flex flex-col gap-3'>
                <button onClick={handleGoogleLogin} className='flex items-center gap-3 border px-6 py-2 text-sm rounded border-[#1140db77] text-white bg-[#2826a013] hover:border-[#425cee]'><FaGoogle className='text-white text-lg ' /> Continue With Google</button>
                <button className='flex items-center gap-3 border hover:border-[#425cee] px-6 py-2 text-sm rounded border-[#1140db77] text-white bg-[#2826a013]'><FaGithub className=' text-lg text-white ' />Continue With GitHub</button>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;