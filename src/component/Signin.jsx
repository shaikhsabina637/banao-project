import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from "react-icons/md";

function Signin() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='bg-purple-200 py-2 flex flex-col w-[30vw] px-4 gap-4'>
      <div className='flex border-custom_purple border-2 py-2 justify-between px-4 items-center rounded-md'>
        <p className='text-2xl'><FcGoogle /></p>
        <p className='capitalize font-bold'>continue with google</p>
      </div>
      <div className='flex border-custom_purple border-2 py-2 justify-between px-4 items-center rounded-md'>
        <p className='text-2xl'><BiLogoFacebookCircle /></p>
        <p className='capitalize font-bold'>continue with facebook</p>
      </div>
      <div className='relative flex items-center'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-black'></div>
        </div>
        <div className='relative bg-purple-200 px-2 z-10'>
          <p className='capitalize text-center'>or connect with</p>
        </div>
      </div>
      <div className='flex flex-col gap-3 relative'>
        <input type='text' placeholder='Email' className='p-2 rounded-md outline-none' />
        <div className='relative'>
          <input 
            type={passwordVisible ? 'text' : 'password'} 
            placeholder='Password' 
            className='p-2 rounded-md outline-none w-full' 
          />
          <p 
            className='absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl cursor-pointer' 
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <MdOutlineVisibilityOff /> : <MdOutlineRemoveRedEye />}
          </p>
        </div>
      </div>
      <div className='flex bg-red-200 items-center px-2 py-2 justify-between'>
        <div className='flex justify-center items-center gap-2'>
          <input type='checkbox' className='size-4' />
          <p className='capitalize mr-2'>remember me</p>
        </div>
        <div className='flex items-center gap-2'>
          <p><FaLock /></p>
          <p className='capitalize'>forgot password?</p>
        </div>
      </div>
      <div className='flex justify-center bg-red-200 py-2 rounded-md border-2 border-custom_purple capitalize'>
        <button className='capitalize font-bold' onClick={() => alert('Button clicked')}>continue</button>
      </div>
    </div>
  );
}

export default Signin;
