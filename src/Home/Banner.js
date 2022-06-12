import React from 'react';
import Type from '../typist/Type';

const Banner = () => {
    return (
        <div className='block w-full mt-4 pr-5'>
            <div className=" hero  bg-cover h-[400px] bg-[url('https://i.ibb.co/LdcDpkH/bg.png')]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-auto block">
                        <h1 className="mb-5 text-4xl md:text-5xl font-bold">Shahidul Islam</h1>
                        <Type className='' />
                        <a target="_blank" href="https://drive.google.com/file/d/1AUi0FOKdBMMhx0te6BLqLXu7kRNfSK3g/view?usp=sharing">
                            <button className="btn btn-primary mt-10">
                                My Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;