import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/all pick/assests/laptop.jpg';
import { FaDownload } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div className='z-50 sticky top-0 '>
      <header className="text-yellow-100 body-font bg-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

            <Image src={logo} alt="logo" width={40} height={40} />
            <span className="ml-3 text-xl text-yellow-400">Student</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-white">Home</Link>
            <Link href="#about" className="mr-5 hover:text-white">About</Link>
            <Link href="#Skills" className="mr-5 hover:text-white">Skills</Link>
            <Link href="#Project" className="mr-5 hover:text-white">Project</Link>
            <Link href="#Contact" className="mr-5 hover:text-white">Contact</Link>
            
          </nav>
          <a href="/all pick/assests/cv.jpg" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center text-black bg-white py-1 px-3 focus:outline-none hover:bg-yellow-300 text-base mt-4 md:mt-0">
              DownloadCv
              <FaDownload />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
