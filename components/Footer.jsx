import React from 'react'

const Footer = () => {
    const today = new Date();

    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-[#ecf0f3] border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; {today.getFullYear()} <a href="https://github.com/jairalcon" className="hover:underline">Jair Alcon</a>
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#home" className="mr-4 hover:underline md:mr-6 ">Home</a>
                </li>
                <li>
                    <a href="#about" className="mr-4 hover:underline md:mr-6">About</a>
                </li>
                <li>
                    <a href="#skills" className="mr-4 hover:underline md:mr-6">Skills</a>
                </li>
                <li>
                    <a href="#projects" className="mr-4 hover:underline md:mr-6">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="hover:underline md:mr-6">Contact</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer