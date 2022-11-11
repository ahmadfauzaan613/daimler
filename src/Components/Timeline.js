import React from 'react'
import { useNavigate } from 'react-router-dom'

function Timeline(props) {
  const navigate = useNavigate()
  return (
    <div id="timeline" className="pt-[1%] pb-[3%] h-full">
      <div className="bg-black timeline h-[27vh] w-full px-[1%] rounded-[5px]">
        <p className="text-center text-[28px] pt-[1%] text-white tracking-wide">{props.exam}</p>
        <p className="text-center text-[50px] text-white tracking-wide">{props.tanggal}</p>
        <p className="text-center pt-[5px] text-[16px] pb-[2%] text-white">{props.keterangan}</p>
        {props.button && (
          <div className="flex justify-center">
            <button onClick={() => navigate('/user-exam')} className="bg-white mb-[2%] text-black border-white font-bold w-[15vw] rounded-[5px] py-[10px] border outline-none">
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Timeline
