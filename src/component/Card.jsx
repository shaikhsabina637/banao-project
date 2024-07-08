import React from 'react'
import { IoIosPeople } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { GiBeachBag } from "react-icons/gi";
import { PiStickerFill } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
import { GiPlayButton } from "react-icons/gi";
import { FaMicrophone } from "react-icons/fa6";


function Card() {
    return (
        <>
            <div className='  flex justify-center items-center'>
                <div className=' xs:w-full  flex flex-wrap items-center px-4 justify-evenly  gap-3 w-[65vw] py-3 sm:flex-col lg:flex-row'>
                    <div className='border-2 xs:items-center group hover:bg-custom_purple   transition-all duration-700 lg:w-[30vw] flex flex-col items-start justify-center px-5 py-4 rounded-md sm:w-full xs:w-full'>
                        <div className='flex   justify-center items-center gap-4 mb-2 '>
                            <p className='text-3xl text-custom_purple group-hover:text-white'>
                                <IoIosPeople />
                            </p>
                            <p className='capitalize font-bold group-hover:text-white'>people</p>
                        </div>
                        <div className='mb-3 group-hover:text-white xs:text-center'>
                            <p >Find a teacher,coach,or expert for your hobby interest in your locality.find a partner,
                                teammate,accompanist or collaborator.
                            </p>
                        </div>
                        <div>
                            <button className='border-2 group-hover:text-white group-hover:border-white capitalize border-custom_purple px-5 py-2 rounded-md'>connect</button>
                        </div>
                    </div>
                    <div className='border-2 xs:items-center group hover:bg-green-500  transition-all duration-700 lg:w-[30vw] flex flex-col items-start justify-center px-5 py-4 rounded-md sm:w-full xs:w-full'>
                        <div className='flex   justify-center items-center gap-4 mb-2 '>
                            <p className='text-3xl text-green-500 group-hover:text-white'>
                                <IoLocationSharp />
                            </p>
                            <p className='capitalize font-bold group-hover:text-white'>place</p>
                        </div>
                        <div className='mb-3 group-hover:text-white xs:text-center'>
                            <p>Find a class, scholl, playground, auditorium, studio, shop or
                                an event venue.book a slot at venues that allow booking through hobbycue.
                            </p>
                        </div>
                        <div>
                            <button className='capitalize border-2 border-green-500 group-hover:text-white px-5 py-2 rounded-md group-hover:border-white'>meet up</button>
                        </div>
                    </div>
                    <div className='border-2 xs:items-center group hover:bg-red-700  transition-all duration-700 lg:w-[30vw] flex flex-col items-start justify-center px-5 py-4 rounded-md sm:w-full xs:w-full'>
                        <div className='flex   justify-center items-center gap-4 mb-2 '>
                            <p className='text-3xl text-red-700 group-hover:text-white'>
                                <GiBeachBag />
                            </p>
                            <p className='capitalize font-bold group-hover:text-white'>product</p>
                        </div>
                        <div className='mb-3 group-hover:text-white xs:text-center'>
                            <p>Find equipment or supplies required for your hobby.buy,rent or borrow from shops,
                                online stores or from community members.
                            </p>
                        </div>
                        <div>
                            <button className='border-2 capitalize group-hover:text-white group-hover:border-white border-red-700 px-5 py-2 rounded-md'>get it</button>
                        </div>
                    </div>
                    <div className='border-2  xs:items-center group hover:bg-custom_blue transition-all duration-700 lg:w-[30vw] flex flex-col items-start justify-center px-5 py-4 rounded-md sm:w-full xs:w-full'>
                        <div className='flex  justify-center items-center gap-4 mb-2 '>
                            <p className='text-3xl text-custom_blue group-hover:text-white'>
                                <PiStickerFill />
                            </p>
                            <p className='capitalize font-bold group-hover:text-white'>program</p>
                        </div>
                        <div className='mb-3 group-hover:text-white xs:text-center'>
                            <p>Find events,meetups and workshops related to your hobby. register or buy tickets online
                            </p>
                        </div>
                        <div>
                            <button className='border-2 border-custom_blue group-hover:text-white group-hover:border-white px-5 py-2 rounded-md capitalize'>attend</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* add listing section starts */}
            <div className=' flex justify-center items-center py-5 '>
                <div className='bg-blue-200 flex justify-center items-center px-8 py-7 lg:w-[60vw] md:w-[80vw] sm:w-full xs:w-full'>
                    <div className='bg-white flex justify-center items-start  flex-col p-3 rounded-md xs:items-center'>
                        <div className='flex gap-4 justify-center items-center mb-3'>
                            <p className='text-white  text-2xl bg-custom_purple rounded-full p-2 '><FaPlus /></p>
                            <p className='capitalize font-bold'>add your own</p>
                        </div>
                        <div className='mb-3 xs:text-center'>
                            <p>Are you a teacher or expert? do you sell or rent out equipment,venue or event tickets? or,you know someone who should be on hobbycue? go ahead and add your own page</p>
                        </div>
                        <div>
                            <button className='border-2 border-custom_purple px-5 py-2 rounded-md capitalize text-custom_purple'>add new </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* add listing sections ends */}
            {/* testimonals sections starts */}
            <div className=' p-3 flex justify-center items-center' >
                <div className='bg-purple-200 lg:w-[60vw] p-4 flex justify-center items-start flex-col rounded-md xs:w-full md:w-[80vw] sm:w-full '>
                    <div className='flex gap-4 justify-center items-center mb-3 '>
                        <p className='text-2xl p-2 bg-custom_purple rounded-full text-white'><ImQuotesLeft /></p>
                        <p className='capitalize font-bold'>testimonals</p>
                    </div>
                    <div className='mb-3'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quam ut, tenetur magni quibusdam officia delectus! Incidunt recusandae minima repellat quae expedita iste neque eos dignissimos porro voluptatibus delectus earum, dicta corrupti eaque ullam doloremque eveniet! Soluta porro doloremque praesentium reiciendis, earum autem pariatur. Pariatur recusandae exercitationem deleniti iste rem illo porro facilis culpa. Fuga dolor modi ex? Deleniti laboriosam corporis animi perferendis velit nisi.
                        </p>
                    </div>
                    <div className=' flex gap-8  sm:w-full xs:w-full  lg:flex-row sm:gap-4 xs:gap-3 xs:flex-col'>
                        <div className='lg:w-[40vw] md:w-[90vw] sm:w-[100vw] xs:px-2  bg-purple-400 flex justify-evenly items-center rounded-lg xs:justify-around  '>
                            <div>
                                <p className='bg-white p-2 rounded-full xs:p-1'><GiPlayButton /></p>
                            </div>
                            <div className=' w-[24vw] flex justify-center items-center  xs:w-[50vw] '>
                                <div className='bg-custom_purple w-3 h-3 rounded-full -mr-3 z-20  xs:w-7 '></div>
                                <div className='bg-white w-[22vw] h-2 rounded-md mr-2 xs:w-[90vw] '></div>
                                <div className='xs:text-sm'>0.00</div>
                            </div>
                            <div className='flex relative'>
                                <img src='img/classic.jpg' alt='Classic' className='rounded-full lg:w-[2vw] md:w-[4vw] sm:w-[6vw] xs:w-[12vw]' />
                                <p className='absolute bottom-0 text-gray-200'><FaMicrophone /></p>
                            </div>
                        </div>
                        <div className=' flex justify-center items-center  sm:w-full gap-4 lg:w-[30vw] ms:w-[80vw] '>
                            <div className='xs:w-[10vw]'>
                                <img src='img/classic.jpg' alt='classic' className='w-[5vw] sm:w-[8vw] rounded-full xs:w-[50vw]' />
                            </div>
                            <div>
                                <p className='font-bold capitalize text-custom_purple sm:text-sm xs:text-sm'>shubha nagarajan</p>
                                <p className='text-custom_blue sm:text-sm xs:text-sm'>classical dancer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonals sections ends */}
        </>
    )
}

export default Card
