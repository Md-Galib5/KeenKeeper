import React from 'react';
import logo from '../../../assets/logo.png'
import { IoMdHome } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="
      navbar bg-base-100 w-11/12 mx-auto
      flex flex-col sm:flex-col md:flex-row lg:flex-row
      items-center justify-between gap-4 py-3
    ">
   <div className="flex justify-center md:justify-start w-full lg:w-auto">
    <img src={logo} alt="logo" />
  </div>
<div className="
        flex flex-row sm:flex-row md:flex-row lg:flex-row
        gap-3 items-center justify-center
      ">
  
  <NavLink 
    to="/" 
    className={({ isActive }) => 
      `btn font-semibold border-none ${isActive ? "bg-[#244d3f] text-white" : "bg-white text-[#64748b]"}`
    }
  >
    <IoMdHome /> Home
  </NavLink>

  <NavLink 
    to="/timeline" 
    className={({ isActive }) => 
      `btn font-semibold border-none ${isActive ? "bg-[#244d3f] text-white" : "bg-white text-[#64748b]"}`
    }
  >
    <RiTimeLine /> Timeline
  </NavLink>

  <NavLink 
    to="/statspage"
    className={({ isActive }) => 
      `btn font-semibold border-none ${isActive ? "bg-[#244d3f] text-white" : "bg-white text-[#64748b]"}`
    }
  >
    <ImStatsDots /> Stats
  </NavLink>

</div>
</div>
        </div>
    );
};

export default Navbar;