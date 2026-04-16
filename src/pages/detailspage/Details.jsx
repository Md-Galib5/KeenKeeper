import React, { use } from 'react';
import { BiMessageDots } from 'react-icons/bi';
import { PiArchiveBold, PiPhoneCallBold, PiVideoCameraBold } from 'react-icons/pi';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { useParams } from 'react-router';

const friendPromise = fetch('/data.json').then((res) => res.json());

const Details = () => {
    const friends = use(friendPromise);
    const { id } = useParams();

    const filterFriend = friends.find(
        (friend) => friend.id === Number(id)
    );

    if (!filterFriend) {
        return <h2>Loading or Friend not found...</h2>;
    }

    return (
        <div className="bg-[#f8fafc] min-h-screen p-6">
  <div className="w-11/12 sm:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
    
    {/* LEFT SECTION */}
    <div className="flex flex-col items-center md:items-stretch">
      
      <div className="bg-white rounded-2xl shadow p-6 space-y-3 w-full max-w-sm mx-auto">
        <div className="flex justify-center">
          <img
            className="h-20 w-20 rounded-full"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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

        <p className="text-center text-sm text-gray-500 italic">
          "{filterFriend.bio}"
        </p>

        <p className="text-center text-sm text-gray-400">
          Preferred: email
        </p>
      </div>

      {/* ACTION BUTTONS */}
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

    {/* RIGHT SECTION */}
    <div className="sm:col-span-2 lg:col-span-2 space-y-6">
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-8 justify-center text-center">
          <p className="text-lg font-semibold">62</p>
          <p className="text-xs text-gray-500">Days Since Contact</p>
        </div>
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <p className="text-lg font-semibold">30</p>
          <p className="text-xs text-gray-500">Goal (Days)</p>
        </div>
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <p className="text-lg font-semibold">Feb 27, 2026</p>
          <p className="text-xs text-gray-500">Next Due</p>
        </div>
      </div>

      {/* Goal */}
      <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">
        <div className='space-y-3'>
          <p className="text-sm text-gray-500">Relationship Goal</p>
          <p className="font-medium">Connect every 30 days</p>
        </div>
        <button className="border px-3 py-1 rounded-md text-sm hover:bg-gray-50">
          Edit
        </button>
      </div>

      {/* Quick Check-in */}
      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-sm text-gray-500 mb-4">Quick Check-in</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button className="border rounded-lg p-4 text-center hover:bg-gray-50"><PiPhoneCallBold className="mx-auto mt-3 text-xl"/>Call</button>
          <button className="border p-4 text-center rounded-lg  hover:bg-gray-50"><BiMessageDots className="mx-auto mt-3 text-xl"/> Text</button>
         <button className="border rounded-lg p-4 text-center hover:bg-gray-50">
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