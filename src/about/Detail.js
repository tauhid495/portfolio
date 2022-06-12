import React from 'react';

const Detail = () => {
    return (
        <div className='w-full pr-5'>
            <div className='bg-secondary bg-cover w-full my-7'>
                <div className='pl-7'>
                    <p className='text-primary text-xl md:text-3xl relative top-10 md:top-16 drop-shadow-md font-semibold '>About</p>
                    <p className='text-4xl md:text-6xl font-semibold text-gray-700'>About Me</p>
                </div>

                {/* content */}
                <div className='my-10 p-7 '>
                    <p>
                        My career experience starts from my childhood. I was the captain of my class. I led them and my practice made me a team leader. <br /><br />

                        I've started my career as Showroom Manager in a reputed electronics company. Where I lead my sales team and retail sales team. I've to manage all showroom operations and also controle inventory. The experience there was nice. <br /> <br />
                        Then I joined as a business development manager at a diagnostic laboratory.  Though the track is not the same as previous, my role is the same. I've to manage all operations and lead them for a smooth transition. I have a marketing team and as usual I lead them. <br /> <br />
                        But my passion and goal is the IT sector. I am very keen to learn graphics design and also become a web developer. I learnt graphics design at my own effort. <br />
                        Then I've completed a web programming course at 'Programming Hero' and  finally my dream goal became true.  I am a quick learner and always ready to take on challenges. I always learn new technologies and try to keep update myself.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Detail;