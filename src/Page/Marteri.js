import React from 'react'
import CardMateri from '../Components/CardMateri'

function Marteri() {
  return (
    <div className="bg-[#f2f2f2] w-full pt-[2%] pb-[5%] px-[2%] h-[98.8vh]">
      <div className="bg-white rounded-[5px] h-full">
        <div className="flex items-center justify-between border-b border-[#f2f2f2]">
          <p className="font-bold text-[24px] px-8 py-3">Materi</p>
        </div>
        <div className="flex justify-end mr-[4%] my-[2%]">
          <input type="search" placeholder="Search" className="w-[20%] outline-none border py-[3px] px-[4px] border-black rounded-[5px]" />
        </div>
        <div className="grid grid-cols-3 gap-y-5 pl-[2%]">
          <CardMateri judul={'judul'} tanggal={'20 November 2022'} link={'/user-exam/materi/detail'} materi={'Materi Exam Round I '} />
        </div>
      </div>
    </div>
  )
}

export default Marteri
