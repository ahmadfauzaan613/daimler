import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Wrapper(props) {
  return (
    <>
      <div className="bg-[#FBFBFB]">
        <div>{props.isProtect && <Navbar />}</div>
        {props.isSidebar && <Sidebar />}
        <div>{props.children}</div>
      </div>
      {/* {location !== '/user-exam' ? (
        <div className="bg-[#FBFBFB]">
          <div>{props.isProtect && <Navbar />}</div>
          {props.isSidebar && <Sidebar />}
          <div>{props.children}</div>
        </div>
      ) : (
        <div className="bg-[#FBFBFB] ">
          <div>{props.isProtect && <Navbar />}</div>
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-2">{props.isSidebar && <Sidebar />}</div>
            <div className="col-span-10">{props.children}</div>
          </div>
        </div>
      )} */}
    </>
  )
}

export default Wrapper
