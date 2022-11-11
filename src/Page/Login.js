import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logoDaimler from '../Assets/Image/logoDaimler.png'

function Login() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  return (
    <div className="backgroundLogin ">
      <div className="flex justify-center">
        <div class=" grid place-items-center h-screen">
          <div className=" bg-white rounded-[5px] w-[28vw] h-auto">
            <div className=" flex justify-center gap-x-3 px-[4%] items-center drop-shadow-2xl pt-[36px] pb-[14px]">
              <img src={logoDaimler} className="w-[10vw] h-auto" alt="" />
            </div>
            <p className="text-center font-bold">DCVI TechMasters 2022-2023</p>
            <form action="">
              <div className=" pt-[3%] px-[10%]">
                <p className=" pb-[10px] font-bold">Username</p>
                <div className="flex items-center">
                  <input type="text" placeholder="username" className="border px-[2%] outline-none py-[2%] w-full rounded-[4px]" />
                  <span class="material-symbols-outlined fixed right-[40%]">person</span>
                </div>
              </div>
              <div className=" py-[5%] px-[10%]">
                <p className="pb-[10px] font-bold">Password</p>
                <div className="flex items-center">
                  <input type={`${!show ? 'password' : 'text'}`} placeholder="Password" className="border px-[2%] outline-none py-[2%] w-full rounded-[4px]" />
                  {!show ? (
                    <span onClick={() => setShow(!show)} class="material-symbols-outlined cursor-pointer fixed right-[40%]">
                      visibility_off
                    </span>
                  ) : (
                    <span onClick={() => setShow(!show)} class="material-symbols-outlined cursor-pointer fixed right-[40%]">
                      visibility
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-center pb-[5%] px-[10%]">
                <button onClick={() => navigate('/home')} className="bg-black text-white cursor-pointer h-[4.4vh] w-full rounded-[5px] border-none">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
