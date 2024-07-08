import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from "react-icons/md";

function Hero() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='w-full h-full bg-purple-200 py-5 flex  lg:flex-row md:flex-col sm:flex-col xs:flex-col'>
      <div className=' lg:w-[75vw] md:w-full flex justify-center flex-col items-start px-10'>
        <p className='text-3xl font-bold italic mb-2 mt-3 md:mt-10'>
          Explore your <span className='text-custom_blue'>hobby</span> or <span className='text-custom_purple'>passion</span>
        </p>
        <p className='py-1 lg:w-[50vw]  leading-loose text-[17px]'>
          Sign in to interact with a community of below hobbyists and an ecosystem of experts, teachers, suppliers, classes, workshops, and places to practice, participate, or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities.
        </p>
        <p className='mb-2 py-1 lg:w-[50vw]  leading-loose text-[17px]'>
          If you are an expert or a seller, you can add your listing and promote yourself, your students, products, services, or events. Hop on your hobby and enjoy the ride.
        </p>
        <div className='w-full'>
          <img src='./img/hero.png' className='w-full' alt='Hero' />
        </div>
      </div>
      <div className=' lg:w-[35vw] md:w-full  flex flex-col justify-center items-start px-10 md:items-center md:py-5 sm:items-center xs:items-center'>
        <div className='flex gap-6 py-3 capitalize'>
          <div
            className={`font-bold px-3 py-2 ${!signIn ? 'text-custom_purple border-b-2 border-custom_purple' : 'text-gray-500'}`}
            onClick={() => { setSignIn(false); }}
          >
            sign in
          </div>
          <div
            className={`font-bold ${signIn ? 'text-custom_purple border-b-2 border-custom_purple' : 'text-gray-500'} px-3 py-2`}
            onClick={() => { setSignIn(true); }}
          >
            join us
          </div>
        </div>

        {signIn ?
          <div className=' py-2 flex flex-col lg:w-[32vw]  px-4 gap-4 md:w-[50vw] sm:w-[64vw] sm:px-4 xs:w-full '>
            <div className='flex border-custom_purple border-2 py-2 justify-between px-4 items-center rounded-md'>
              <p className='text-2xl'><FcGoogle /></p>
              <p className='capitalize font-bold'>continue with google</p>
            </div>
            <div className='flex border-custom_purple border-2 py-2 justify-between px-4 items-center rounded-md'>
              <p className='text-2xl'><BiLogoFacebookCircle /></p>
              <p className='capitalize font-bold'>continue with facebook</p>
            </div>
            <div className="relative flex items-center justify-center ">
              <div className="flex items-center w-full">
                <div className="flex-grow border-t border-black"></div>
                <span className="flex-shrink mx-4 capitalize">or connect with</span>
                <div className="flex-grow border-t border-black"></div>
              </div>
            </div>


            <div className='flex flex-col gap-3 relative'>
              <input type='text' placeholder='Email' className='p-2 rounded-md outline-none' />
              <div className='relative'>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder='Password'
                  className='p-2 rounded-md outline-none w-full '
                />
                <p
                  className='absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl cursor-pointer'
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <MdOutlineVisibilityOff /> : <MdOutlineRemoveRedEye />}
                </p>
              </div>
            </div>
            <div className=' items-center px-1 py-2 justify-between'>
              <p className='capitalize text-sm'>by continuing, you agree to our <span className='font-bold capitalize text-sm'>terms of service <span className='text-gray-600'>and</span> <span className='font-bold text-smcapitalize'>privacy policy.</span></span></p>
            </div>
            <div className='flex justify-center text-white py-2 rounded-md bg-custom_purple capitalize'>
              <button className='capitalize font-bold' onClick={() => alert('Button clicked')}>agree and continue</button>
            </div>
          </div> :
          <div className=' py-2 flex flex-col lg:w-[30vw] md:w-[50vw] md:px-4 gap-4 sm:w-[64vw] sm:px-4 xs:w-full'>
            <div className='flex border-custom_purple border-2 py-2 justify-between px-4 items-center rounded-md'>
              <p className='text-2xl'><FcGoogle /></p>
              <p className='capitalize font-bold'>continue with google</p>
            </div>
            <div className='flex border-custom_purple border-2 py-2 justify-between px-4 items-center rounded-md'>
              <p className='text-2xl'><BiLogoFacebookCircle /></p>
              <p className='capitalize font-bold'>continue with facebook</p>
            </div>
            <div className="relative flex items-center justify-center ">
              <div className="flex items-center w-full">
                <div className="flex-grow border-t border-black"></div>
                <span className="flex-shrink mx-4 capitalize">or connect with</span>
                <div className="flex-grow border-t border-black"></div>
              </div>
            </div>


            <div className='flex flex-col gap-3 relative'>
              <input type='text' placeholder='Email' className='p-2 rounded-md outline-none ' />
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
            <div className='flex  items-center px-2 py-2 justify-between'>
              <div className='flex justify-center items-center gap-2'>
                <input type='checkbox' className='size-4' />
                <p className='capitalize mr-2 xs:text-sm'>remember me</p>
              </div>
              <div className='flex items-center gap-2'>
                <p><FaLock /></p>
                <p className='capitalize xs:text-sm'>forgot password?</p>
              </div>
            </div>
            <div className='flex justify-center  py-2 rounded-md border-2 border-custom_purple capitalize'>
              <button className='capitalize font-bold' onClick={() => alert('Button clicked')}>continue</button>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Hero;
