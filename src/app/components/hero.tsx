"use client";
import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import logo from "../../../public/all pick/assests/logo.jpg"
import Link from 'next/link';


const Hero = () => {
    return (
        <section className="text-gray-600 body-font bg-yellow-100">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                        I am
                        <br className="hidden lg:inline-block" />
                        <Typewriter
                            options={{
                                strings: ['Hadiqa Shaikh'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p className="mb-8 leading-relaxed text-gray-800">
                        I am student at GIAIC,pursuing a course in Artificial Intelligence,Web 3.0 ,& Metaverse. passionate about technology and constantly learning
                        new skills to stay up-to-date withthe latest innovations.
                    </p>
                    <div className="flex justify-center">
                        <Link href={"#Contact"}>
                        <button className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-lg">
                            Contact
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                        className='object-cover object-center rounded mx-auto w-[15rem]'
                        src={logo}
                        alt="Hero"
                        width={300}
                        height={300} />
                </div>
            </div>
        </section>


    );
}

export default Hero;
