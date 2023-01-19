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
                    <h3>React JS / Bootstrap</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        For Promineo Tech's Final Coding Project, our objective was to create a React App of our choice, which utilizes all CRUD operations with a back-end API of our choosing.
                    </p>
                    <Link href='https://main.d7xensven6o6k.amplifyapp.com/'>
                        <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                    </Link>
                    <Link href='https://github.com/jairalcon/week16-final-project'>
                        <button className='px-8 py-2 mt-4' href='https://github.com/jairalcon/week16-final-project'>Code</button>
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