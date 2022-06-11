import React from 'react';

const DecoFurn = () => {
    return (
        <div className='pr-7 my-5'>
            <div className='pl-3 bg-secondary mb-5 md:mb-0'>
                <p className='text-primary text-xl md:text-3xl relative top-10 md:top-16 drop-shadow-md font-semibold '>DecoFurn</p>
                <p className='text-4xl md:text-6xl font-semibold text-gray-700'>Inventory Management </p>
            </div>

            {/* content */}
            <div className='md:flex items-center bg-secondary '>
                <div className='pl-7 mb-5 md:w-1/2'>
                    <p className='text-primary text-xl'>Description : </p>
                    <p>* It's a inventory management website of unique furnitures.</p>
                    <p>* Valid users can post their products, add products, place order. </p>
                    <p>* Fully functional firebase authentication system implimented. </p>
                    <p>* Registered users can see all products. They can delete or update product.</p>
                    <p>* Update section users can see present stock. Here they can add stock or reduce stock items.</p>
                    <p>* My items section users can see their all ordered products.</p>
                    <p>* Users validity checked by using JWT</p>
                    <p className='text-primary text-xl'>Tecnology used : </p>
                    <p > ReactJs, React router, Firebase, React-firebase-hooks, Tailwind,
                        JWT, MongoDB, Heroku, Firebase Hosting.</p>
                    <p className='text-primary text-xl'>Links : </p>

                    <p >
                        <a target='blank' className='hover:text-primary' href="https://assignment-11-18a82.web.app/">Live Link</a> ||
                        <a target='blank' className='hover:text-primary' href="https://github.com/tauhid495/assignment-11-client"> Github-Client-side</a> ||
                        <a target='blank' className='hover:text-primary' href="https://github.com/tauhid495/assignment-11-server"> Github-Server-side</a>

                    </p>
                </div>
                {/* gallary */}
                <div className='pl-5 md:w-1/2'>
                    <section class="overflow-hidden text-gray-700">
                        <div class="container  py-2 mx-auto lg:pt-16 lg:pb-10 lg:px-14">
                            <div class="flex flex-wrap -m-1 md:-m-2">

                                <div class="w-full p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://i.ibb.co/tQtWkfM/deco-1.jpg" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://i.ibb.co/QDQR4LH/deco-3.jpg" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://i.ibb.co/qg2wZwk/deco-2.jpg" />
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div >
        </div >
    );
};

export default DecoFurn;