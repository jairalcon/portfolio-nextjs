import Image from 'next/image';
import React from 'react';
import headShot from '../public/assets/aboutMe.jpg';

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1280px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#4169E1]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>I am not your normal developer.</p>
                    <p className='py-2 text-gray-600'>In January of 2022, I decided to make a change for me and my family. I had been working at the same company for 6.5 years and there was much uncertainty in learning something completely new. I enrolled in an online Front End Software Development bootcamp at Promineo Tech in January 2022. Due to unforeseen hardships, I was allowed to restart the program at the end of May 2022. I completed the bootcamp and received my certificate of completion in November 2022! What a day!</p>
                    <p className='py-2 text-gray-600'>What I learned during this time-frame is that it is important to ask questions and to ask for help, when needed. As a photographer, I learned to capture great expressions by providing a positive experience. Now, I am learning to still provide a positive user experience but through the web pages I can create and change, unlike a photograph.</p>
                    <p className='py-2 text-gray-600'>I also learned that software development can feel overwhelming and impossible at times. When I encountered this, I listened to the advice from my Promineo Tech mentors and stepped away. More often than not I would come back, research my issue in a slightly different way, try something different, and voila! I&rsquo;m looking forward to see where this journey leads.</p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>In the mean time, check out some of my noob projects.</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src={headShot} width='500' height='500' alt="headshot image" />
                </div>
            </div>
        </div>
    )
}

export default About