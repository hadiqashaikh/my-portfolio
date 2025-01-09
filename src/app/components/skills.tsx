import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  return (
    <div id='Skills'>
      <section className="text-gray-600 body-font bg-yellow-100">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-yellow-400 tracking-widest font-medium title-font mb-1">
        Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
      {/*skills*/}
      <div className="p-4  w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-yellow-200 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
            <FaCheckCircle  className='text-black font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className='flex-grow'>
          <div  className='relative h-1 w-full bg-gray-400 rounded-xl'>
            <div className='absolute bg-green-700 h-1 rounded-xl-1 w-[90%]'></div>
            <p className='font-bold text-black text-right'>90%</p>
          </div>
          </div>
        </div>
      </div>
       <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-yellow-200 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
            <FaCheckCircle  className='text-black font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className='flex-grow'>
          <div  className='relative h-1 w-full bg-gray-400 rounded-xl'>
            <div className='absolute bg-green-700 h-1 rounded-xl-1 w-[75%]'></div>
            <p className='font-bold text-black text-right'>75%</p>
          </div>
          </div>
        </div>
      </div>
       <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-yellow-200 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
            <FaCheckCircle  className='text-black font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Typescript/JavaScript
            </h2>
          </div>
          <div className='flex-grow'>
          <div  className='relative h-1 w-full bg-gray-400 rounded-xl'>
            <div className='absolute bg-green-700 h-1 rounded-xl-1 w-[90%]'></div>
            <p className='font-bold text-black text-right'>90%</p>
          </div>
          </div>
        </div>
      </div>
   <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-yellow-200 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
            <FaCheckCircle  className='text-black font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              NEXT JS
            </h2>
          </div>
          <div className='flex-grow'>
          <div  className='relative h-1 w-full bg-gray-400 rounded-xl'>
            <div className='absolute bg-green-700 h-1 rounded-xl-1 w-[50%]'></div>
            <p className='font-bold text-black text-right'>50%</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}

export default Skills;
