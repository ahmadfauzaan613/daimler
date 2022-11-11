import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../Assets/Image/logoDaimler2.png'

function Navbar() {
  const [dropdown, SetDropdown] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      <div className="flex bg-[#272727] items-center justify-between px-[28px]">
        <p className="py-[1%] text-white font-bold text-[20px]">DCVI TechMasters 2022-2023</p>
        <div onClick={() => SetDropdown(!dropdown)} className="flex cursor-pointer items-center gap-x-3">
          <p className="font-bold text-white">Akbar Wahyu</p>
          <span className="material-symbols-outlined text-white text-[28px]">account_circle</span>
        </div>
      </div>
      {dropdown && (
        <div className="bg-[#f2f2f2] w-[12vw] absolute right-0 p-[7px] top-[6%] h-auto rounded-[5px]  z-10">
          <button onClick={() => navigate('/')} className="bg-black  flex items-center px-[10px] justify-between gap-x-5  w-[10vw] border-0 rounded-[5px] text-white font-bold py-[10px]">
            Log Out
            <span className="text-white  material-symbols-outlined">logout</span>
          </button>
        </div>
      )}
    </>
  )
}

export default Navbar
