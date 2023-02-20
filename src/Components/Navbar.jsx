import React from 'react'
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className='bg-transparent flex justify-between items-center h-[120px] w-[100vw] px-[80px] absolute top-0 text-[#CFD2C6]'>
        <div className='flex items-center gap-[40px] nav-left text-[16px] font-normal'>
            <BiMenu className='w-[40px] h-[40px]'/>
             <span>Menu</span>
             <span>Team</span>
        </div>
        <div>
            <span className='logo font-black text-[32px] '>Cibo gustoso</span>
        </div>
        <div className='nav-right flex items-center text-[16px] gap-[40px]'>
          <span>Events</span>
          <span>Contact</span>
          <span><u>EN</u></span>
        </div>
    </div>
  )
}

export default Navbar