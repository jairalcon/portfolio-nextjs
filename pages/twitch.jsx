import Image from "next/image";
import React from 'react'
import twitchImg from '../public/assets/projects/twitch.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const twitch = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image
                    className='absolute z-1'
                    src={twitchImg}
                    alt='/'
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover"
                    }} />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Twitch App</h2>
                    <h3>React JS / Tailwind / Firebase</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices dui sapien eget mi proin sed libero enim. Purus sit amet luctus venenatis lectus magna. Semper viverra nam libero justo laoreet sit. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Elit pellentesque habitant morbi tristique. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Tortor consequat id porta nibh venenatis. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.
                    </p>
                    <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                    <button className='px-8 py-2 mt-4'>Code</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />React</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Tailwind</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />JavaScript</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Firebase</p>
                        </div>

                    </div>

                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>

            </div>

        </div>
    );
}

export default twitch