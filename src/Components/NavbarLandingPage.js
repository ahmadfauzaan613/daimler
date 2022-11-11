import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../Assets/Image/logoDaimler2.png'
function NavbarLandingPage() {
  const location = window.location.pathname
  const navigate = useNavigate()
  const [dropdown, SetDropdown] = useState(false)
  return (
    <div>
      {/* ---------- */}
      <div className=" bg-white logo flex justify-between items-center px-[1%]">
        <a href="#home">
          <img src={Logo} className="w-[11vw] cursor-pointer  py-[20px] " alt="" />
        </a>
        <a href="#home" className="pr-[5%]">
          <p className="text-[20px] p-0 m-0 font-bold ">DCVI TechMasters 2022-2023</p>
        </a>
        <div onClick={() => SetDropdown(!dropdown)} className="flex cursor-pointer items-center gap-x-3">
          <p className="font-bold">Akbar Wahyu</p>
          <span className="material-symbols-outlined text-[28px]">account_circle</span>
        </div>
      </div>
      {dropdown && (
        <div className="bg-[#f2f2f2] w-[12vw] absolute right-0 p-[7px] top-[35%] h-auto rounded-[5px]  z-10">
          <button onClick={() => navigate('/')} className="bg-black  flex items-center px-[10px] justify-between gap-x-5  w-[10vw] border-0 rounded-[5px] text-white font-bold py-[10px]">
            Log Out
            <span className="text-white  material-symbols-outlined">logout</span>
          </button>
        </div>
      )}
      <div className="navbarS flex bg-[#F2F2F2] py-[20px] gap-x-12 items-center justify-center">
        {location !== '/home' ? (
          <>
            <ul className="nav-item">
              <p onClick={() => navigate('/home')} className={`${location === '/home' ? 'font-bold' : 'font-normal'} cursor-pointer hover:underline`}>
                Home
              </p>
            </ul>
            <ul className="nav-item">
              <p onClick={() => navigate('/home')} className="cursor-pointer hover:underline">
                About
              </p>
            </ul>
            <ul className="nav-item">
              <p onClick={() => navigate('/home/article')} to="article" className={`${location !== '/home/article' ? 'font-normal' : 'font-bold'} cursor-pointer hover:underline `}>
                Articles
              </p>
            </ul>
            <ul className="nav-item">
              <a href="#timeline" className="cursor-pointer hover:underline">
                Time Line
              </a>
            </ul>
            <ul className="nav-item">
              <a href="#article" className="cursor-pointer hover:underline">
                Regulation
              </a>
            </ul>
            <ul className="nav-item">
              <p onClick={() => navigate('/list-of-participants')} className={`${location === '/list-of-participants' ? 'font-bold' : 'font-normal'} cursor-pointer hover:underline`}>
                List of Participant
              </p>
            </ul>
          </>
        ) : (
          <>
            <ul className="nav-item">
              <a href="#home" className={`${location === '/home' ? 'font-bold' : 'font-normal'} cursor-pointer hover:underline`}>
                Home
              </a>
            </ul>
            <ul className="nav-item">
              <a href="#about" className="cursor-pointer hover:underline">
                About
              </a>
            </ul>
            <ul className="nav-item">
              <a href="#article" className="cursor-pointer hover:underline">
                Articles
              </a>
            </ul>
            <ul className="nav-item">
              <a href="#timeline" className="cursor-pointer hover:underline">
                Time Line
              </a>
            </ul>
            <ul className="nav-item">
              <a href="#regulation" className="cursor-pointer hover:underline">
                Regulation
              </a>
            </ul>
            <ul className="nav-item">
              <p onClick={() => navigate('/list-of-participants')} className={`${location === '/list-of-participants' ? 'font-bold' : 'font-normal'} cursor-pointer hover:underline`}>
                List of Participant
              </p>
            </ul>
          </>
        )}
      </div>
      {/* ---------- */}
      {/* <div className="bg-white navbar2 flex justify-between py-[2%] px-[5%] items-center">
        <img src={Logo} className="xs:w-[45vw] " alt="" />
        {!dropdown ? (
          <span onClick={() => setDropdown(!dropdown)} className="cursor-pointer material-symbols-outlined">
            menu
          </span>
        ) : (
          <span onClick={() => setDropdown(!dropdown)} className="cursor-pointer material-symbols-outlined">
            close
          </span>
        )}
      </div>
      {dropdown && (
        <>
          {location === '/home/article/detail' ? (
            <div className="bg-[#f2f2f2] navbar2 grid grid-cols-1  py-[2%] px-[5%]">
              <p onClick={() => navigate('/home')} href="#home" className="pb-[2%] cursor-pointer">
                Home
              </p>
              <p onClick={() => navigate('/home')} href="#about" className="pb-[2%] cursor-pointer">
                About
              </p>
              <p onClick={() => navigate('/home')} href="#article" className="pb-[2%] cursor-pointer">
                Articles
              </p>
              <p onClick={() => navigate('/home')} href="#list" className="pb-[2%] cursor-pointer">
                List Of Participant
              </p>
              <p onClick={() => navigate('/admin')} className="pb-[2%] cursor-pointer">
                Exam
              </p>
              <p onClick={() => navigate('/user-exam')} className="pb-[2%] cursor-pointer">
                Exam2
              </p>
            </div>
          ) : (
            <div className="bg-[#f2f2f2] navbar2 grid grid-cols-1  py-[2%] px-[5%]">
              <a href="#home" className="pb-[2%] cursor-pointer">
                Home
              </a>
              <a href="#about" className="pb-[2%] cursor-pointer">
                About
              </a>
              <a href="#article" className="pb-[2%] cursor-pointer">
                Articles
              </a>
              <a href="#list" className="pb-[2%] cursor-pointer">
                List Of Participant
              </a>
              <p onClick={() => navigate('/admin')} className="pb-[2%] cursor-pointer">
                Exam
              </p>
              <p onClick={() => navigate('/user-exam')} className="pb-[2%] cursor-pointer">
                Exam2
              </p>
            </div>
          )}
        </>
      )} */}
    </div>
  )
}

export default NavbarLandingPage
