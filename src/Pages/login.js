import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",

  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    // const name = e.target.name
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault()
    axios.post('http://172.16.1.58:3000/login', { ...formData })
      .then(res => {
        console.log(res);
        if (res?.data?.success) {
          toast.success('Logged In Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/admin-dashboard")
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  return (
    <div id='loginPage' className='relative h-full '>
      <div className='h-screen'>
        <div className='flex justify-center align-middle h-full items-center'>
          <form id='formSec' className='w-[400px] p-[50px] bg-[#dfdee8] rounded-3xl'>
            <h3 className='h3 text-center mb-5 theme-dark-blue'>Sign In</h3>
            <div className="mb-3 ">
              <label for="email" className="form-label mb-0">Email address</label>
              <input type="email" name='email' onChange={handleChange} className="form-control rounded-none py-2" id="email" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-1 ">
              <label for="password" className="form-label mb-0">Password</label>
              <input type="password" name='password' onChange={handleChange} className="form-control rounded-none py-2" id="pass" required />
            </div>
            {/* <Link to={"/forgot-pass"}><span className='text-xs text-[#0081e7] font-bold hover:!underline'>Forgot Password?</span></Link> */}
            <button type="submit" onClick={(e) => handleLogin(e)} id="nxtBtnn" className="w-100 hover: duration-200 mt-3 btn btn-primary text-white">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login