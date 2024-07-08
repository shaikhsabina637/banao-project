import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa";


function Footer() {
  return (
    <>
      <div className=' px-6 flex flex-col py-5 '>
        <div className='bg-blue-200 flex flex-col justify-center items-start py-4 px-2'>
          <p className='lg:text-3xl italic font-bold capitalize mb-3 xs:text-2xl'>your <span className='text-custom_purple'>hobby</span>, your <span className='text-custom_blue'>community....</span></p>
          <p className='p-2 rounded-md bg-custom_purple text-white capitalize w-auto'>get started</p>
        </div>
        <div className=' px-2  bg-blue-200   py-4'>
          <div className='flex justify-center items-center '>
            <img src='img/endsection2.png' alt='section1' className='lg:w-full md:w-[40vw] sm:w-[35vw] xs:w-[40vw]' />
            <img src='img/endsection1.png' alt='section2' className='lg:w-full md:w-[40vw]  sm:w-[35vw] xs:w-[40vw]' />
          </div>
        </div>
        <div className=' flex justify-between items-center lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-3'>
          <div className=' py-5 px-2 lg:w-[20vw]  sm:w-full xs:w-full justify-center items-start'>
            <ul className=' w-[18vw] sm:w-[30vw] xs:w-[80vw]  md:w-full flex flex-col  items-start px-24 justify-center xs:px-10'>
              <li className='font-bold capitalize mb-2'>hobbycue</li>
              <li className='capitalize'>about us</li>
              <li className='capitalize'>our services</li>
              <li className='capitalize'>work with us</li>
              <li className='capitalize'>FAQ</li>
              <li className='capitalize'>contact us</li>
            </ul>
          </div>
          <div className=' py-5 px-2 lg:w-[20vw] sm:w-full xs:w-full justify-center items-start'>
            <ul className=' w-[18vw] flex flex-col md:w-full sm:w-full xs:w-full items-start px-24 justify-center py-3 xs:px-10'>
              <li className='font-bold capitalize mb-2'>how do i</li>
              <li className='capitalize'>sign up</li>
              <li className=' w-[40vw] capitalize'>add a listing</li>
              <li className=' w-[40vw] capitalize'>claim listing</li>
              <li className=' w-[40vw] capitalize'>post a query</li>
              <li className=' w-[40vw] capitalize'>add a blog post</li>
              <li className=' w-[40vw] capitalize'>other queries</li>
            </ul>
          </div>
          <div className=' py-5 px-2 lg:w-[20vw] sm:w-full xs:w-full justify-center items-start'>
            <ul className=' w-[18vw] flex flex-col md:w-full items-start xs:w-full sm:w-full px-24 justify-center py-9 xs:px-10'>
              <li className=' w-[40vw] capitalize font-bold mb-3'>ouick links</li>
              <li className=' w-[10vw] capitalize'>listings</li>
              <li className=' w-[10vw] capitalize'>blog posts</li>
              <li className=' w-[10vw] capitalize'>shop/store</li>
              <li className=' w-[10vw] capitalize'>community</li>
            </ul>
          </div>
          <div className=' py-5 px-2 w-[30vw]  xs:px-1 xs:py-2 xs:w-full sm:w-full justify-center items-start '>
            <p className='font-bold capitalize mb-4'>social media</p>
            <div className='flex items-center gap-6 mb-9 xs:gap-3'>
              <p className='bg-gray-100 p-2 rounded-full'><FaFacebookF /></p>
              <p className='bg-gray-100 p-2 rounded-full'><CiTwitter /></p>
              <p className='bg-gray-100 p-2 rounded-full'><FaInstagram /></p>
              <p className='bg-gray-100 p-2 rounded-full'><FaPinterestP /></p>
              <p className='bg-gray-100 p-2 rounded-full'><FaGoogle /></p>
              <p className='bg-gray-100 p-2 rounded-full'><FiYoutube /></p>
              <p className='bg-gray-100 p-2 rounded-full'><FaTelegramPlane /></p>
              <p className='bg-gray-100 p-2 rounded-full'><CiMail /></p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-bold capitalize'>invite friends</p>
              <input className='capitalize p-2 outline-none relative border-2 border-custom_purple rounded-md ' type='text' placeholder='email id' />
            </div>
          </div>
        </div>
        <div className='bg-purple-200 flex justify-center items-center py-3 capitalize font-bold'>
          <div className=' flex gap-2 justify-center items-center'>
            <p><FaRegCopyright /></p>
            <p>purple cues private limited</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer
