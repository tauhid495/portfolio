import React from 'react';
import { Link } from 'react-router-dom';

const WebCard3 = () => {
    return (
        <div>
            <div class="card w-full bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://i.ibb.co/ssjj0qc/rev-1.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Gadget Review</h2>
                    <p>* Gadget Review website.</p>
                    <p>* Review section added.</p>
                    <p>* Statistics chart used</p>
                    <div class="card-actions">
                        <Link to='/projectDetail'><button class="btn btn-primary">Show Detail</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebCard3;