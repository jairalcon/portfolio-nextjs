import Image from 'next/image'
import React from 'react'
import f1QuizImg from '../public/assets/projects/f1quiz.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image
                    className='absolute z-1'
                    src={f1QuizImg}
                    alt='/'
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover"
                    }} />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Formula 1 - Quiz App</h2>
                    <h3>React JS</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        For Promineo Tech&rsquo;s Final Coding Project, our goal was to create a React App of our choosing, which should utilize all CRUD operations with a back-end API. We also needed to have at least 10 JSX components in the app. The most challenging part for me was writing JSON to connect to the back-end API. I tried axios and that seemed to work a little more clearly for me at the time. An issue I have with my app is that the react audio player restarts when navigating. I&rsquo;ve looked into it and might have an idea on how to debug.
                    </p>
                    <Link href='https://main.d7xensven6o6k.amplifyapp.com/'>
                        <button className='px-8 py-2 mt-4 mr-8 hover:scale-110 ease-in duration-300'>Demo</button>
                    </Link>
                    <Link href='https://github.com/jairalcon/week16-final-project'>
                        <button className='px-8 py-2 mt-4 hover:scale-110 ease-in duration-300' href='https://github.com/jairalcon/week16-final-project'>Code</button>
                    </Link>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />React</p>
                            {/* <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Tailwind</p> */}
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />JavaScript</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Bootstrap</p>
                            {/* <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Google API</p> */}
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Mock API</p>
                        </div>

                    </div>

                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>

            </div>

        </div>
    )
}

export default property