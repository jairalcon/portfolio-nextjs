import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import contactImg from '../public/assets/contact.jpg';

const Contact = () => {

    // function handleSubmit() {
    //todo needs to clear form once submitted
    //? https://docs.getform.io/guides/nextjs/
    // }

    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#4169E1]'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <Image
                                    className='rounded-xl hover:scale-105 ease-in duration-300'
                                    src={contactImg}
                                    width='700'
                                    height='700'
                                    alt="contact photo"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                            </div>
                            <div>
                                {/* <h2 className='py-2'>Name here</h2> */}
                                <p>Front-End Developer</p>
                                <p>I am available for freelance of full-time positions. Contact me and let&rsquo;s talk.</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <a
                                        href='https://www.linkedin.com/in/jairalcon/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                    <a
                                        href='https://github.com/jairalcon'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <FaGithub />
                                        </div>
                                    </a>
                                    <Link href='/#contact'>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <AiOutlineMail />
                                        </div>
                                    </Link>
                                    <Link href='/resume'>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                            <BsFillPersonLinesFill />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right */}

                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <p>/ / Submit the form below or shoot me an email - jairalcon@gmail.com</p>
                        <div className='p-4'>

                            <form method='POST' action='https://getform.io/f/a025d003-cd9b-433e-aedc-3418d0c380f0'>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone number' />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' type="text" name='message' />
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4 hover:scale-105 ease-in duration-300'>Send Message to Jair</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Contact