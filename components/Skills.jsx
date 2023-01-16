import Image from 'next/image';
import React from 'react';
import AWS from '../public/assets/skills/aws.png';
import CSS from '../public/assets/skills/css.png';
import HTML from '../public/assets/skills/html.png';
import GITHUB from '../public/assets/skills/github1.png';
import NEXTJS from '../public/assets/skills/nextjs.png';
import NODE from '../public/assets/skills/node.png';
import REACT from '../public/assets/skills/react.png';
import JS from '../public/assets/skills/javascript.png';
import TW from '../public/assets/skills/tailwind.png';

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#4169E1]'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={HTML} width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={CSS} width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={JS} width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JAVASCRIPT</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={REACT} width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>REACT</h3>
                            </div>
                        </div>

                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={GITHUB} width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>GITHUB</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={NODE} width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NODE JS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={AWS} width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>AWS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={TW} width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>TAILWIND</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={NEXTJS} width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NEXT JS</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills