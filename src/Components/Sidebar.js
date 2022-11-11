import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../Assets/Image/logoDaimler2.png'

function Sidebar() {
  const navigate = useNavigate()
  const location = window.location.pathname
  return (
    <div className="overflow-y-hidden bg-white  w-full h-screen">
      <div onClick={() => navigate('/user-exam/materi')} className={`${location === '/user-exam/materi' ? 'font-bold' : 'font-normal'} flex items-center gap-x-3 cursor-pointer  w-full border-black px-[10%] py-[5%]`}>
        <span className="text-black material-symbols-outlined">collections_bookmark</span>
        <p className="text-black">Materi</p>
      </div>

      <div onClick={() => navigate('/user-exam')} className=" flex items-center gap-x-3 cursor-pointer  border-t w-full border-black px-[10%] py-[5%] ">
        <span className="material-symbols-outlined text-black">auto_stories</span>
        <p className={`${location === '/user-exam' ? 'font-bold' : 'font-normal'}`}>Online Test</p>
      </div>

      <div onClick={() => navigate('/admin')} className="border-t flex items-center gap-x-3 cursor-pointer w-full border-black px-[10%] py-[5%] ">
        <span className="material-symbols-outlined text-black">leaderboard</span>
        <p className={`${location === '/admin' ? 'font-bold' : 'font-normal'}`}>Ranking Table</p>
      </div>

      <div onClick={() => navigate('/admin/archive')} className="flex border-t items-center gap-x-3 cursor-pointer  border-b w-full border-black px-[10%] py-[5%] ">
        <span className="text-black material-symbols-outlined">inventory_2</span>
        <p className={`${location === '/admin/archive' ? 'font-bold' : 'font-normal'}`}>Archive Exam</p>
      </div>
      <div onClick={() => navigate('/home')} className="flex items-center gap-x-3 cursor-pointer  border-b w-full border-black px-[10%] py-[5%] ">
        <span className="text-black material-symbols-outlined">home</span>
        <p className="text-black">Exit</p>
      </div>
      <div className=" absolute bottom-3 pl-[1%]">
        <img src={Logo} className="w-[14vw]" alt="" />
      </div>
    </div>
  )
}

export default Sidebar
