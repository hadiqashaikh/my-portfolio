import React from 'react';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import logo from '../../../public/all pick/assests/laptop.jpg';
import Image from 'next/image';
const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-black">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={logo} alt="coder" width={40} height={40} />
      <span className="ml-3 text-xl text-yellow-400">my_prtfolio</span>
    </a>
    <p className="text-sm text-yellow-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
     2024 hadiqa
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
      target='blank'
      href={"https://github.com/hadiqashaikh"} className="text-gray-500">
      <FaGithubSquare className='text-3xl hover:text-gray-800' />
      </Link>
      <Link
      target='blank'
      href={"https://www.linkedin.com/in/hadiqa-shaikh-b639b4337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="ml-3 text-gray-500">
      <FaLinkedin className='text-3xl hover:text-blue-500' />
      </Link>
    </span>
  </div>
</footer>

    </div>
  );
}

export default Footer;
