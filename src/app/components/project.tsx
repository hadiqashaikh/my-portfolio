import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import image from "../../../public/all pick/assests/project1.jpg";
import project from "../../../public/all pick/assests/project2.jpg"
import card from "../../../public/all pick/assests/project3.jpg"

const Project = () => {
  return (
    <div id='Project' className='bg-yellow-100'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-0 mt-8 text-black">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-8 -mt-[5rem]">
            {/* Projects */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative" >
                <Image src={image}
                 alt="project" 
                 className='absolute inset-0 w-full h-full object-cover object-center'
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-black bg-yellow-300 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest title-font text-sm font-medium text-blue-600 mb-1">
                    CLI project
                  </h2>
                  <h1 className="title-font sm:text-2xl text-lg font-medium text-black mb-3">
                    CALCULATOR
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    A simple calculator made with the help of the inquirer package.
                  </p>
                  <p className="leading-relaxed text-blue-600">
                    <Link target='blank' href="https://github.com/hadiqashaikh/my-simple-calculator.git">
                      View Project  
                    </Link>                

                  </p>
                </div>
              </div>
            </div>
             {/* Projects */}
             <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image src={project}
                 alt="project" 
                 className='absolute inset-0 w-full h-full object-cover object-center'
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-black bg-yellow-300 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest title-font text-sm font-medium text-blue-600 mb-1">
                  1st Hackathone project
                  </h2>
                  <h1 className="title-font sm:text-2xl text-lg font-medium text-black mb-3">
                    STATIC RESUME
                  </h1>
                  <p className='leading-relaxed line-clamp-2'>
                   this is a project which i've created static resume with the help of html css and typescript
                  </p>
                  <p className="leading-relaxed text-blue-600">
                    <Link target='blank' href="https://github.com/hadiqashaikh/GIAIC-milestone.git">
                      View Project  
                    </Link>                
                  </p>
                </div>
              </div>
            </div>
            {/* Projects */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative " >
                <Image src={card}
                 alt="project" 
                 className='absolute inset-0 w-full h-full object-cover object-center'
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-black bg-yellow-300 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest title-font text-sm font-medium text-blue-600 mb-1">
                    Class project
                  </h2>
                  <h1 className="title-font sm:text-2xl text-lg font-medium text-black mb-3">
                    ID CARD
                  </h1>
                  <p className="leading-relaxe line-clamp-2">
                    I have created 3 student id cards with the help props in nextjs
                  </p>
                  <p className="leading-relaxed text-blue-600">
                    <Link target='blank' href="https://github.com/hadiqashaikh/my-4th-assignment.git">
                      View Project  
                    </Link>                
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
