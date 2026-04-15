import React from 'react';
import { FaPlus } from "react-icons/fa";
const Banner = () => {
    return (
        <div className='pt-20 bg-[#f8fafc] space-y-5'>
            <h2 className='text-5xl font-bold text-center'>Friends to keep close in your life</h2>
            <p className='text-center text-[#707f94]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br />
            relationships that matter most.</p>
            <div className='flex items-center justify-center'>
                <button className='btn bg-[#244d3f] text-white'><FaPlus />Add a Friend</button>
            </div>
        </div>
    );
};

export default Banner;