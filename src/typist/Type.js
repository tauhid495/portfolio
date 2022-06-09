import React from 'react';
import Typed from "react-typed"



const Type = () => {
    return (
        <div className='flex text-2xl'>
            <p className='text-2xl'>I am a </p>
            <Typed
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