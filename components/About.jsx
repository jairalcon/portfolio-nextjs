import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1280px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#4169E1]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>I am not your normal developer</p>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Aliquam vestibulum morbi blandit cursus risus at ultrices. Pretium vulputate sapien nec sagittis aliquam malesuada. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Tortor id aliquet lectus proin nibh nisl condimentum id. Varius quam quisque id diam vel. Sed adipiscing diam donec adipiscing. Sit amet facilisis magna etiam tempor orci.</p>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Aliquam vestibulum morbi blandit cursus risus at ultrices. Pretium vulputate sapien nec sagittis aliquam malesuada. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Tortor id aliquet lectus proin nibh nisl condimentum id. Varius quam quisque id diam vel. Sed adipiscing diam donec adipiscing. Sit amet facilisis magna etiam tempor orci.</p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src='/../public/assets/aboutMe.JPEG' width='500' height='500' alt="headshot of Jair" />
                </div>
            </div>
        </div>
    )
}

export default About