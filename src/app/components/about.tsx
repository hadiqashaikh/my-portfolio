import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import profile from "../../../public/all pick/assests/logo.jpg"


const About = () => {
    return (
        <div id='about'>
            <section className="text-gray-600 body-font bg-yellow-200">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <Image
                        className='object-cover object-center rounded mx-auto'
                        src={profile}
                        alt="Hero"
                        width={300}
                        height={300} />

                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                            About me
                        </h1>
                        <p className="mb-5 leading-relaxed text-gray-800">
                            I am a dedicated learner currently exploring the world of web development. I have completed my intermediate education and am pursuing an IT course in Karachi. With a keen interest in programming, I have already learned TypeScript and am now working on building projects using Next.js.
                            My journey in tech is driven by curiosity and a passion for creating innovative solutions.

                        </p>
                        <div className="flex justify-center">
                            <Link href={"/all pick/assests/cv.jpg"}>
                        <button className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-lg">
                            View Cv
                        </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;
