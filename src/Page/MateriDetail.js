import React from 'react'
import { useNavigate } from 'react-router-dom'

function MateriDetail() {
  const navigate = useNavigate()
  return (
    <div className="bg-[#f2f2f2] w-full pt-[2%] pb-[5%] px-[2%] h-[98.8vh]">
      <div className="bg-white rounded-[5px] h-full">
        <div className="flex items-center justify-start px-8 gap-x-4 border-b border-[#f2f2f2]">
          <span onClick={() => navigate('/user-exam/materi')} className="cursor-pointer material-symbols-outlined">
            arrow_back
          </span>
          <p className="font-bold text-[24px]  py-3">Materi</p>
        </div>
        <div className="container mx-auto px-[5%]">
          <p className="text-center pt-[3%] pb-[2%] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="tracking-[1px] leading-[30px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum corporis, pariatur numquam dolores suscipit eos velit blanditiis, excepturi optio, error repudiandae rem illum magni ipsa dolorem maxime expedita cumque minus? Eum distinctio dolor delectus ratione eligendi quos maxime
            natus, deserunt, dolore, quia rem nobis! Voluptas sed, saepe distinctio tempore perferendis ab ex omnis. Tempora necessitatibus sint culpa, cupiditate molestiae assumenda. Nemo error dolorem vitae delectus beatae fugit perspiciatis nostrum obcaecati voluptas. Dicta vitae enim soluta et
            nihil vel suscipit, nulla voluptate at harum veniam adipisci laboriosam aperiam voluptatem, ipsum distinctio!
          </p>
        </div>
      </div>
    </div>
  )
}

export default MateriDetail
