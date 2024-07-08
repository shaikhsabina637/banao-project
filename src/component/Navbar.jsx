import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoStarFill } from "react-icons/go";
import { FaBookmark } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";

function Navbar() {
    const [showDropDown, setShowDropDown] = useState(false);
    const [showCross, setShowCross] = useState(false);

    const handlerDropDown = () => {
        setShowDropDown(prev => !prev);
    }

    const showCrossIcon = () => {
        setShowCross(prev => !prev);
    }


    return (
        <>
            <nav className=' flex justify-evenly items-center relative'>
                <div className=' flex xs:w-[55vw] lg:w-[25vw] md:w-[28vw] sm:w-[35vw] xs:py-3'>
                    <div className='lg:px-3 py-1 border-4 m-2 text-2xl border-custom_purple/100 xs:px-2 md:px-3 md:py-4 sm:px-3 sm:py-2' >
                        <p className='italic font-bold text-custom_blue text-center'>h</p>
                    </div>
                    <div className='m-2 italic xs:m-1'>
                        <p className='text-custom_blue font-bold lg:text-2xl xs:text-sm'>hobby<span className='text-custom_purple font-bold'>cue</span></p>
                        <p className='capitalize text-gray-400 xs:text-sm  '>your hobby, your community</p>
                    </div>
                </div>
                <div className='bg-custom_purple flex justify-between items-center rounded-lg xs:bg-white lg:bg-custom_purple md:bg-custom_purple'>
                    <input
                        type='text'
                        placeholder='Search here...'
                        className='outline-none p-2 rounded-l-lg lg:block md:block sm:block xs:hidden bg-gray-200'
                    />
                    <p className='px-3 text-2xl lg:text-white md:text-white xs:text-custom_purple '><IoSearch /></p>
                </div>
                <div className=' flex items-center justify-center gap-12 hidden lg:flex xs:hidden'>
                    <div className='flex justify-center items-center gap-2'>
                        <p className='bg-custom_purple text-white rounded-full text-2xl'><MdOutlineExplore /></p>
                        <p className='capitalize font-bold'>explore</p>
                        <p className='text-3xl text-custom_purple'><RiArrowDropDownLine onClick={handlerDropDown} /></p>
                    </div>
                    {showDropDown &&
                        <div className=' lg:w-[17vw] absolute top-20 -mt-2 rounded-b-md bg-white'>
                            <ul className='capitalize text-gray-600 w-[100%]'>
                                <li className='px-3 py-2 border-b-2 border-gray-300'>people- community</li>
                                <li className='px-3 py-2 border-b-2 border-gray-300'>places- venues</li>
                                <li className='px-3 py-2 border-b-2 border-gray-300'>programs- events</li>
                                <li className='px-3 py-2 border-b-2 border-gray-300'>products- store</li>
                                <li className='px-3 py-2 border-b-2 border-gray-300'>blogs</li>
                            </ul>
                        </div>
                    }
                    <div className='flex items-center justify-between gap-2'>
                        <p className='bg-custom_purple text-white rounded-full text-xl p-1'><GoStarFill /></p>
                        <p className='capitalize font-bold'>hobbies</p>
                        <p className='text-3xl text-custom_purple'><RiArrowDropDownLine /></p>
                    </div>
                </div>
                <div className=' flex justify-between gap-5 text-custom_purple text-xl items-center'>
                    <p className='lg:block md:hidden sm:hidden xs:hidden'><FaBookmark /></p>
                    <p className='lg:block md:block sm:block md:text-3xl sm:text-3xl xs:block lg:text-xl'><FaBell /></p>
                    <p className='lg:block md:hidden sm:hidden xs:hidden'><FaShoppingCart /></p>
                </div>
                <div>
                    <button className='bg-white border-custom_purple text-custom_purple px-4 py-2 rounded-md border-2 font-bold capitalize lg:block md:hidden sm:hidden xs:hidden'>sign up</button>
                </div>
                <div className='lg:hidden md:block sm:block'>
                    {showCross ?
                        <p className='text-3xl xs:text-2xl'><ImCross onClick={showCrossIcon} /></p> :
                        <p className='text-4xl '><IoMenu onClick={showCrossIcon} /></p>
                    }
                </div>
            </nav>
        </>
    );
}

export default Navbar;
