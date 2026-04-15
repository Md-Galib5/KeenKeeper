import React from 'react';

const Box = () => {
    return (
        <div className='bg-[#f8fafc] pb-10'>
        <div className='pt-10 w-11/12 sm:w-9/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='text-center p-8 bg-white space-y-2 shadow-sm'>
                <h2 className='text-3xl font-semibold'>10</h2>
                <p className='text-md text-[#707f94]'>Total Friends</p>
            </div>
            <div className='text-center p-8 bg-white space-y-2 shadow-sm'>
                <h2 className='text-3xl font-semibold'>3</h2>
                <p className='text-md text-[#707f94]'>On Track</p>
            </div>
            <div className='text-center p-8 bg-white space-y-2 shadow-sm'>
                <h2 className='text-3xl font-semibold'>6</h2>
                <p className='text-md text-[#707f94]'>Need Attention</p>
            </div>
            <div className='text-center p-8 bg-white space-y-2 shadow-sm'>
                <h2 className='text-3xl font-semibold'>12</h2>
                <p className='text-md text-[#707f94]'>Interactions This Month</p>
            </div>
            
        </div>
        </div>
        <div className='border border-b-2 w-9/12 mx-auto mt-10 text-[#eef0f2]'></div>
        </div>
    );
};

export default Box;