import React, { useContext, useEffect, useState } from 'react';
import { BiMessageDots } from 'react-icons/bi';
import { PiArchiveBold, PiPhoneCallBold, PiVideoCameraBold } from 'react-icons/pi';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { useParams } from 'react-router';
import { DataContext } from '../../context/ContextFile';
import { toast } from 'react-toastify';




//const friendPromise = fetch('/data.json').then((res) => res.json());

const Details = () => {

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

 useEffect(() => {
  setLoading(true);

  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 5000);
    });

}, []);
    // const friends = use(friendPromise);

    const { id } = useParams();

    const filterFriend = friends.find(
        (friend) => friend.id === Number(id)
    );

    const {clicked,setClicked} = useContext(DataContext);

 if (loading) {
  return (
    <div className="flex items-center justify-center min-h-screen text-2xl">
      ⏳ Loading...
    </div>
  );
}

if (!filterFriend) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <span className="loading loading-dots loading-xl"></span>
    </div>
  );
}

const handleClick = (type) => {
  const newEntry = {
    ...filterFriend,
    action: type,
    time: new Date().toISOString(),
  };

  const exists = clicked.some(
    (item) => item.id === newEntry.id && item.action === newEntry.action
  );

  if (exists) {
    toast.error(`${type} already added`);
    return;
  }

  setClicked((prev) => [...prev, newEntry]);

  toast.success(`${type} added successfully`);
};


    return (
        <div className="bg-[#f8fafc] min-h-screen p-6">
  <div className="w-11/12 sm:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
    <div className="flex flex-col items-center md:items-stretch">
      
      <div className="bg-white rounded-2xl shadow p-6 space-y-3 w-full max-w-sm mx-auto">
        <div className="flex justify-center">
          <img
            className="h-20 w-20 rounded-full"
            src={filterFriend.picture}
            alt="friend"
          />
        </div>

        <h2 className="text-center text-lg font-semibold">
          {filterFriend.name}
        </h2>

        <div className="flex justify-center">
          <div
            className={`px-4 py-1 rounded-full text-sm ${
              filterFriend.status === "Overdue"
                ? "bg-red-500 text-white"
                : filterFriend.status === "Almost Due"
                ? "bg-yellow-400 text-white"
                : "bg-green-700 text-white"
            }`}
          >
            {filterFriend.status}
          </div>
        </div>

        <div className="text-center">
          {filterFriend.tags?.map((tag, i) => (
            <span
              key={i}
              className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs mr-2"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        <p className="text-center text-sm text-[#8f9bab] font-semibold">
          "{filterFriend.bio}"
        </p>

        <p className="text-center text-sm text-gray-400">
          Preferred: email
        </p>
      </div>

      <div className="w-full max-w-sm mx-auto space-y-3 mt-4">
        <button className="w-full flex items-center justify-center gap-2 py-2 bg-white rounded-lg shadow">
          <RiNotificationSnoozeLine /> Snooze 2 weeks
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-2 bg-white rounded-lg shadow">
          <PiArchiveBold /> Archive
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-2 bg-white rounded-lg shadow text-red-500">
          <RiDeleteBinLine /> Delete
        </button>
      </div>
    </div>

    <div className="sm:col-span-2 lg:col-span-2 space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-8 justify-center text-center">
          <p className="text-lg font-semibold">{filterFriend.days_since_contact}</p>
          <p className="text-xs text-gray-500">Days Since Contact</p>
        </div>
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <p className="text-lg font-semibold">{filterFriend.goal}</p>
          <p className="text-xs text-gray-500">Goal (Days)</p>
        </div>
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <p className="text-lg font-semibold">Feb 27, 2026</p>
          <p className="text-xs text-gray-500">Next Due</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">
        <div className='space-y-3'>
          <p className="text-sm text-black font-semibold">Relationship Goal</p>
          <p className="font-medium text-gray-500">Connect every <span className='text-black font-semibold'>{filterFriend.goal} days</span></p>
        </div>
        <button className="btn px-3 py-1 rounded-md text-sm hover:bg-gray-50">
          Edit
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-sm text-black font-semibold mb-4">Quick Check-in</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button onClick={() => handleClick("Meetup")} className="bg-[#f8fafc] rounded-lg p-4 text-center hover:bg-gray-50"><PiPhoneCallBold className="mx-auto mt-3 text-xl"/>Call</button>
          <button onClick={() => handleClick("Text")} className="bg-[#f8fafc] p-4 text-center rounded-lg  hover:bg-gray-50"><BiMessageDots className="mx-auto mt-3 text-xl"/> Text</button>
         <button onClick={() => handleClick("Video")} className="bg-[#f8fafc] rounded-lg p-4 text-center hover:bg-gray-50">
  <PiVideoCameraBold className="mx-auto mt-3 text-xl" />
  <span className="block text-sm mt-1">Video</span>
</button>
        </div>
      </div>

    </div>
  </div>
  
</div>
    )   
};

export default Details;