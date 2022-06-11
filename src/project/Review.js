import React from 'react';

const Review = () => {
    return (
        <div className='pr-7 my-5'>
            <div className='pl-3 bg-secondary mb-5 md:mb-0'>
                <p className='text-primary text-xl md:text-3xl relative top-10 md:top-16 drop-shadow-md font-semibold '>Gadget Review</p>
                <p className='text-4xl md:text-6xl font-semibold text-gray-700'>Gadget Review Website</p>
            </div>

            {/* content */}
            <div className='md:flex items-center bg-secondary '>
                <div className='pl-7 mb-5 md:w-1/2'>
                    <p className='text-primary text-xl'>Description : </p>
                    <p>* It's a review website of gadget like Nikon Z9.</p>
                    <p>* Real users put their experiences here. </p>
                    <p>* Users review and give rating. </p>
                    <p>* Users review shows in home page for visitors.</p>
                    <p>* All users review shows in another page.</p>
                    <p>* Rechart user for data analisys</p>
                    {/* <p>* Customers can place order. Can pay by cards. Also can cancel order before shipping</p> */}
                    <p className='text-primary text-xl mt-5'>Tecnology used : </p>
                    <p > ReactJs, React router, Tailwind, Rechart, Netlify.</p>
                    <p className='text-primary text-xl mt-5'>Links : </p>

                    <p >
                        <a target='blank' className='hover:text-primary' href="https://my-assignment-9.netlify.app/">Live Link</a> ||
                        <a target='blank' className='hover:text-primary' href="#"> Github-Client-side</a>

                    </p>
                </div>
                {/* gallary */}
                <div className='pl-5 md:w-1/2'>
                    <section class="overflow-hidden text-gray-700">
                        <div class="container  py-2 mx-auto lg:pt-16 lg:pb-10 lg:px-14">
                            <div class="flex flex-wrap -m-1 md:-m-2">

                                <div class="w-full p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://i.ibb.co/ssjj0qc/rev-1.jpg" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://i.ibb.co/wwfXX4Y/rev-2.jpg" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://i.ibb.co/yVrhG4g/rev-3.jpg" />
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div >
        </div >
    );
};

export default Review;