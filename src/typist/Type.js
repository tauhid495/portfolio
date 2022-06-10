import React from 'react';
import Typed from "react-typed"



const Type = () => {
    return (
        <div className='flex text-xl md:text-2xl'>
            <p className='text-xl md:text-2xl'>I am a </p>
            <Typed className='text-primary font-semibold'
                strings={[
                    " Web Developer",
                    " Team Leader ",
                    " Pathological Lab Manager",
                ]}
                typeSpeed={150}
                backSpeed={100}
                loop
            />
        </div>
    );
};

export default Type;