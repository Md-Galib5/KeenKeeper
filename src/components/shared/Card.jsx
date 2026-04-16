import React, { use } from 'react';
import FriendCard from './FriendCard';

const friendPromise = fetch('/data.json').then((res) => res.json());

const Card = () => {
    const friends = use(friendPromise);
    // console.log(friends);
    return (
       <div className='bg-[#f8fafc]'>
  <div className='w-11/12 sm:w-9/12 mx-auto'>
    <h2 className='text-center sm:text-left text-2xl font-semibold'>Your Friends</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
      {friends.map((friend) => {
        return (
         <FriendCard friend = {friend}/>
        );
      })}
    </div>
  </div>
</div> 
    );
};

export default Card;