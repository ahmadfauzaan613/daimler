import React from 'react'
import { useNavigate } from 'react-router-dom'

function CardArticle(props) {
  const navigate = useNavigate()
  return (
    <div className="bg-[#F2F2F2] drop-shadow-lg w-full rounded-[5px] p-[10px]">
      <img src={props.gambar} className="rounded-[5px]" alt="" />
      <p className="font-bold pt-[2%]">{props.judul}</p>
      <p className="text-justify py-[2%] text-[14px]">{props.desc}</p>
      <div onClick={() => navigate(props.link)} className="cursor-pointer hover:text-blue-400 flex items-center justify-end gap-x-1 pt-[1%]">
        <p className="font-bold text-[14px] ">Check For Details</p>
        <span className="material-symbols-outlined text-[18px]">keyboard_double_arrow_right</span>
      </div>
    </div>
  )
}

export default CardArticle
