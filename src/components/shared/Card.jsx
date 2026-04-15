import React, { use } from 'react';

const friendPromise = fetch('/data.json').then((res) => res.json());

const Card = () => {
    const friends = use(friendPromise);
    console.log(friends);
    return (
       <div className='bg-[#f8fafc]'>
  <div className='w-11/12 sm:w-9/12 mx-auto'>
    <h2 className='text-center sm:text-left text-2xl font-semibold'>Your Friends</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
      {friends.map((friend, ind) => {
        return (
          <div key={ind} className="pt-6 card bg-base-100 shadow-sm space-y-2">
            <figure>
              <img
                className='h-20 w-20 rounded-full'
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="friend"
              />
            </figure>

            <h2 className="card-title flex items-center justify-center">
              {friend.name}
            </h2>

            <div className='text-center space-y-3'>
              <p>{friend.days_since_contact}d ago</p>
              <div>
  {friend.tags.map((tag, i) => (
    <span key={i} className="badge bg-[#cbfadb] mr-2 p-3 rounded-full font-medium">
      {tag.toUpperCase()}
    </span>
  ))}
</div>
              <div
  className={`badge rounded-full p-4 mb-6 ${
    friend.status === "Overdue"
      ? "bg-[#ef4444] text-white"
      : friend.status === "Almost Due"
      ? "bg-[#efad44] text-white"
      : friend.status === "On-Track"
      ? "bg-[#244d3f] text-white"
      : "badge-outline"
  }`}
>
  {friend.status}
</div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div> 
    );
};

export default Card;