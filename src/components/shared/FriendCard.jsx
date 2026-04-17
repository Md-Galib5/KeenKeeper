import React from 'react';
import { useNavigate } from 'react-router';


const FriendCard = ({friend}) => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${friend.id}`);
  };
    return (
         <div onClick={handleClick}
         className="pt-6 card bg-base-100 shadow-sm space-y-2">
            <figure>
              <img
                className='h-20 w-20 rounded-full'
                src={friend.picture}
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
};

export default FriendCard;