import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ImGoogle2 } from 'react-icons/im';

const SocialLink = () => {
    return (
        <div className='flex items-center'>
            <a href="https://www.linkedin.com/in/shahidul-islam-224049149/" target="_blank"> <FaLinkedin className='w-7 h-7 mx-2' /></a>
            <a href="mailto:tauhid495@gmail.com"><ImGoogle2 className='w-6 h-6 mx-2' /> </a>

            <a href="https://www.facebook.com/tauhid.49" target="_blank"> <FaFacebook className='w-7 h-7 mx-2' /></a>
            <a href="https://github.com/tauhid495" target="_blank"> <FaGithub className='w-7 h-7 mx-2' /></a>


        </div>
    );
};

export default SocialLink;