import React from 'react'
import Logo from '../Assets/Image/logoDaimler2.png'

function Footer() {
  return (
    <div>
      <div className="bg-[#f2f2f2] py-[0%] ">
        <div className="px-[2%] flex items-center justify-between py-[1%] ">
          <img src={Logo} className="w-[12vw] h-full" alt="" />
          <div>
            <div className="flex items-center gap-x-4">
              <span class="material-symbols-outlined">location_on</span>
              <p className="font-bold">Lorem ipsum dolor Lorem ipsum dolor</p>
            </div>
            <div className="flex items-center gap-x-4 py-[4%]">
              <span class="material-symbols-outlined">mail</span>
              <p className="font-bold">Lorem ipsum dolor Lorem ipsum dolor</p>
            </div>
            <div className="flex items-center  gap-x-4">
              <span class="material-symbols-outlined">call</span>
              <p className="font-bold">Lorem ipsum dolor Lorem ipsum dolor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
