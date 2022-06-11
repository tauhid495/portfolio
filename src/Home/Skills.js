import React from 'react';
import { FaHtml5, FaNodeJs, FaReact, FaStripe, } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { SiFirebase, SiHeroku, SiMongodb, SiNodemon, SiTailwindcss } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';

const Skills = () => {
    return (
        <div className='w-full pr-5'>
            <div className='bg-secondary bg-cover w-full my-7'>
                <div className='pl-3'>
                    <p className='text-primary text-xl md:text-3xl relative top-10 md:top-16 drop-shadow-md font-semibold '>Skills</p>
                    <p className='text-4xl md:text-6xl font-semibold text-gray-700'>My Skills</p>
                </div>

                {/* content */}
                <div className='my-10 pb-7 pl-3 grid gap-x-auto grid-cols-5 md:grid-cols-12'>
                    <FaHtml5 className='w-12 h-12 text-[#FF6633]'
                        data-bs-toggle="tooltip" title="HTML" />

                    <DiCss3 className='w-12 h-12 text-[#0066CC]'
                        data-bs-toggle="tooltip" title="CSS" />

                    <FaBootstrap className='w-12 h-12 text-[#9966CC]'
                        data-bs-toggle="tooltip" title="Bootstrap" />

                    <SiTailwindcss className='w-12 h-12 text-[#00CCCC]'
                        data-bs-toggle="tooltip" title="Tailwind" />

                    <TbBrandJavascript className='w-12 h-12 text-[#006699]'
                        data-bs-toggle="tooltip" title="Java Script" />

                    <FaReact className='w-12 h-12 text-[#59DCFA]'
                        data-bs-toggle="tooltip" title="React" />

                    <SiMongodb className='w-12 h-12 text-[#339933]'
                        data-bs-toggle="tooltip" title="MongoDB" />

                    <SiHeroku className='w-12 h-12 text-[#6666CC]'
                        data-bs-toggle="tooltip" title="Heroku" />

                    <SiFirebase className='w-12 h-12 text-[#FF9900]'
                        data-bs-toggle="tooltip" title="Firebase" />

                    <FaNodeJs className='w-12 h-12 text-[#669966]'
                        data-bs-toggle="tooltip" title="NodeJS" />

                    <FaStripe className='w-12 h-12 text-[#6666CC]'
                        data-bs-toggle="tooltip" title="Stripe" />

                    <SiNodemon className='w-12 h-12 text-[#66CC66]'
                        data-bs-toggle="tooltip" title="Nodemon" />
                </div>
            </div>
        </div>
    );
};

export default Skills;