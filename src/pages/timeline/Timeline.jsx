import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/ContextFile';
import { IoIosArrowDown } from 'react-icons/io';
import { getActionImage } from '../../components/shared/Getimg';

const Timeline = () => {
  const { clicked } = useContext(DataContext);
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? clicked
      : clicked.filter((item) => item.action === filter);

  return (
    <div className='bg-[#f8fafc] min-h-screen'>
      <div className='w-11/12 sm:w-9/12 mx-auto pt-20'>
        <h2 className='text-3xl font-bold'>Timeline</h2>

        {/* Filter */}
        <div className="dropdown dropdown-bottom pt-6">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter Timeline <IoIosArrowDown />
          </div>

          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
            <li><button onClick={() => setFilter("all")}>All</button></li>
            <li><button onClick={() => setFilter("Meetup")}>Call</button></li>
            <li><button onClick={() => setFilter("Text")}>Text</button></li>
            <li><button onClick={() => setFilter("Video")}>Video</button></li>
          </ul>
        </div>

        <div className='pt-6 p-4'>
          {filteredData.length === 0 ? (
            <p className="text-gray-500 text-4xl flex text-center justify-center">No activity found</p>
          ) : (
            filteredData.map((profile, ind) => (
              <div
                key={ind}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow mb-3"
              >
                <img
                  src={getActionImage(profile.action)}
                  alt="icon"
                  className="w-10 h-10"
                />

                <div>
                  <p className="font-semibold">
                    <span className='text-[#33594c] text-2xl'>
                      {profile.action}
                    </span>
                    <span className='text-[16px] text-[#a7b0bd]'>
                      {' '}with {profile.name}
                    </span>
                  </p>

                  <p className="text-[14px] text-[#a7b0bd] font-semibold">
                    {new Date(profile.time).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;