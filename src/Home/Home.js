import React from 'react';

import { BiDotsVerticalRounded } from 'react-icons/bi';
import { RiHomeGearLine } from 'react-icons/ri';
import Avatar from '../Avatar';
import CustomLink from '../CustomLink';


const Home = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-start ">
                    {/* <!-- Page content here --> */}
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
                        <BiDotsVerticalRounded className='w-5 h-5' />
                    </label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='block mx-auto'><Avatar /></li>
                        <p className='hover:text-primary text-center text-xl font-semibold '>Shahidul Islam</p>
                        <p className='text-center'>Jr Web Developer</p>
                        <p className='text-center'>Sales Team Leader</p>
                        <li> <CustomLink to='/'> <div className='flex'><RiHomeGearLine className='w-6 h-6' />Home </div></CustomLink> </li>
                        <li> <CustomLink to='/contact'> <div className='flex'><RiHomeGearLine className='w-6 h-6' />Contact </div></CustomLink> </li>
                        <li> <CustomLink to='/aboutme'> <div className='flex'><RiHomeGearLine className='w-6 h-6' />About Me </div></CustomLink> </li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Home;