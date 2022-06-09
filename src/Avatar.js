import React from 'react';
import profile from './Images/profile.jpg'

const Avatar = () => {
    return (
        <div>
            <div class="avatar">
                <div class="w-40 mask mask-squircle">
                    <img src={profile} />
                </div>
            </div>
            
        </div>
    );
};

export default Avatar;