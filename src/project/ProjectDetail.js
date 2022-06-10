import React from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { RiHomeGearLine } from 'react-icons/ri';
import Avatar from '../Avatar';
import CustomLink from '../CustomLink';

const ProjectDetail = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-start ">
                    {/* <!-- Page content here --> */}
                    <div className='flex items-center'>
                        <label for="my-drawer-2" class="btn text-primary btn-ghost drawer-button lg:hidden">
                            <BiDotsVerticalRounded className='w-5 h-5' />
                        </label>
                        <p className='md:hidden text-xl text-primary'>Portfolio of Shahidul Islam</p>
                    </div>
                    <p>tauhid Taiyaar</p>
                </div>

                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-56 bg-secondary mr-5 text-base-content h-screen">
                        {/* <!-- Sidebar content here --> */}
                        <div className='bg-secondary pb-3'>
                            <li className='block mx-auto'><Avatar /></li>
                            <p className='hover:text-primary text-center text-xl font-semibold '>Shahidul Islam</p>
                            <p className='text-center'>Jr Web Developer</p>
                            <p className='text-center'>Sales Team Leader</p>
                        </div>

                        <div className='bg-secondary mt-5 py-3'>
                            <li> <CustomLink to='/'> <div className='flex'><RiHomeGearLine className='w-6 h-6' /> Home </div></CustomLink> </li>

                            <li> <CustomLink to='/contact'> <div className='flex'><AiOutlineMail className='w-6 h-6' />  Contact </div></CustomLink> </li>

                            <li> <CustomLink to='/aboutme'> <div className='flex'><FaRegUser className='w-6 h-6' /> About Me </div></CustomLink> </li>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;