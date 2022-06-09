import React from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Avatar from '../Avatar';


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
                        <li><a>Sidebar Item 2</a></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Home;