import React, { useEffect, useState } from 'react';
import FriendCard from './FriendCard';

const Card = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = fetch('/data.json').then(res => res.json());
    const delay = new Promise(resolve => setTimeout(resolve, 1000));

    Promise.all([fetchData, delay]).then(([data]) => {
      setFriends(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen flex-col gap-3">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className='bg-[#f8fafc]'>
      <div className='w-11/12 sm:w-9/12 mx-auto'>
        <h2 className='text-center sm:text-left text-2xl font-semibold'>Your Friends</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;