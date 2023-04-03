import React from 'react';
import { TypeAnimation } from 'react-type-animation'; 
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='main'>
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" 
                 src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" 
                 alt=""
            />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            {/* lg:items-start */}
                  <div className='maw-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:pl-15'>
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Hi, I'm Adi</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                        A
                        <TypeAnimation
                            sequence={[
                                'Developer', // Types 'One'
                                2000, // Waits 1s
                                'Product Manager', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'Tech Fan!', // Types 'Three' without deleting 'Two'
                                2000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: "5px" }}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'> 
                        <FaTwitter className='cursorPointer'/>
                        <FaFacebook />
                        <FaLinkedin />
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Main