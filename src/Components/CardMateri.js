import React from 'react'
import { useNavigate } from 'react-router-dom'

function CardMateri(props) {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(props.link)} className="bg-white w-[23vw] card cursor-pointer rounded-[5px] h-auto p-3">
      <div className="flex items-center justify-between pb-[2%]">
        <p className="font-bold text-[18px] text-blue-600 uppercase">{props.judul}</p>
        <p className="font-bold">{props.tanggal}</p>
      </div>
      <p className="text-[16px]">{props.materi}</p>
      <p onClick={() => navigate(props.link)} className="pt-[5%] cursor-pointer hover:text-blue-500 font-bold text-right">
        Check For Detail
      </p>
    </div>
  )
}

export default CardMateri
