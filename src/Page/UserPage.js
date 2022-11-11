import React from 'react'
import Card from '../Components/Card'

function UserPage() {
  return (
    <div className="bg-[#f2f2f2] w-full pt-[2%] pb-[5%] px-[2%] h-[98.8vh]">
      <div className="bg-white rounded-[5px] h-full">
        <div className="flex items-center justify-between border-b border-[#f2f2f2]">
          <p className="font-bold text-[24px] px-8 py-3">Online Test</p>
        </div>
        <div className="p-[2%] grid grid-cols-2 gap-x-10">
          <Card round={'Round I'} duration={'60 minutes'} teamm={'All registered Teams'} question={`40 questions of multiple choice with 5 possible answers`} waktu2={'14:00-16:00'} judul={'Round I'} tanggal={'30 November 2022'} time={'00:90:00'} />
          <Card judul={'Round II'} teamm={'50% from 1st Round'} duration={'75 minutes'} question={`50 questions of multiple choice with 5 possible answers`} tanggal={'19 December 2022'} time={'00:90:00'} />
        </div>
      </div>
    </div>
  )
}

export default UserPage
