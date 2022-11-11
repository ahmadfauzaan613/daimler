import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Wrapper2(props) {
  return (
    <div className="bg-[#FBFBFB] overflow-hidden">
      <div>{props.isProtect && <Navbar />}</div>
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-2">{props.isSidebar && <Sidebar />}</div>
        <div className="col-span-10">{props.children}</div>
      </div>
    </div>
  )
}

export default Wrapper2
