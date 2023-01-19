import Image from "next/image";
import Link from 'next/link'
import React from 'react'

const NextPI = ({ title, backgroundImg, projectUrl }) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image
                className='rounded-xl group-hover:opacity-10 hover:scale-105 ease-in duration-300'
                src={backgroundImg}
                alt='/'
                style={{
                    maxWidth: "100%",
                    height: "auto"
                }} />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>NextJS</p>
                <Link href={projectUrl} >
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold tx-lg cursor-pointer hover:scale-110 ease-in duration-300'>More Info</p>
                </Link>
            </div>
        </div>
    );
}

export default NextPI