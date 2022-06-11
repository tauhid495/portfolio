import React from 'react';

const MOtools = () => {
    return (
        <div className='pr-7'>
            <div className='pl-3 bg-secondary mb-5 md:mb-0'>
                <p className='text-primary text-xl md:text-3xl relative top-10 md:top-16 drop-shadow-md font-semibold '>MOtools</p>
                <p className='text-4xl md:text-6xl font-semibold text-gray-700'>Manufacturers Website</p>
            </div>

            {/* content */}
            <div className='md:flex items-center bg-secondary '>
                <div className='pl-7 mb-5 md:w-1/2'>
                    <p className='text-primary text-xl'>Description : </p>
                    <p>* It's a B2B full stack manufacturer website of microwave woven tools.</p> <p>* Customers purchase tools from manufacturers at holesale price. </p>
                    <p>* Fully functional firebase authentication system implimented </p>
                    <p>* Secure payment gateway implemented by using stripe.</p>
                    <p>* Admin and customer roles implemented with different dashboards.</p>
                    <p>* Admin can view all customers and can make admin. Admin can add and delete products</p>
                    <p>* Customers can place order. Can pay by cards. Also can cancel order before shipping</p>
                    <p className='text-primary text-xl'>Tecnology used : </p>
                    <p > ReactJs, React router, Firebase, React-firebase-hooks, Tailwind,
                        Stripe, JWT, React query.</p>
                    <p className='text-primary text-xl'>Links : </p>

                    <p >
                        <a className='hover:text-primary' href="http://">Live Link</a> ||
                        <a className='hover:text-primary' href="http://"> Github-Client-side</a> ||
                        <a className='hover:text-primary' href="http://"> Github-Server-side</a>

                    </p>
                </div>
                {/* gallary */}
                <div className='pl-5 md:w-1/2'>
                    <section class="overflow-hidden text-gray-700">
                        <div class="container  py-2 mx-auto lg:pt-16 lg:pb-10 lg:px-14">
                            <div class="flex flex-wrap -m-1 md:-m-2">

                                <div class="w-full p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://i.ibb.co/TY71MVc/mo-1.jpg" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://i.ibb.co/7WcXJ4t/mo-2.jpg" />
                                </div>
                                <div class="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://i.ibb.co/ZLZtGRm/mo-3.jpg" />
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div >
        </div >
    );
};

export default MOtools;