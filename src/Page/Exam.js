import React from 'react'
import BorderJawaban from '../Components/BorderJawaban'

function Exam() {
  return (
    <div className="bg-[#f2f2f2] w-full pt-[2%] pb-[5%] px-[2%] h-[98.8vh]">
      <div className="bg-white rounded-[5px] h-full">
        <div className="flex items-center justify-between border-b border-[#f2f2f2]">
          <p className="font-bold text-[24px] px-8 py-3">Online Test</p>
          <div className="px-8 py-[10px] flex items-center gap-x-10">
            <p className="font-bold">
              Waktu : <span className="text-red-400">00:00:00</span>
            </p>
            <button className="w-[9vw] rounded-[5px] text-white py-[10px] bg-black ">Finish</button>
          </div>
        </div>

        <div className="grid grid-cols-12 h-[80.3vh]">
          <div className="border-r border-[#f2f2f2] col-span-10">
            <div className="h-[73vh] px-[3%] pt-[3%] overflow-scroll">
              <p className="text-black text-[18px]">1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, vel omnis! Odit blanditiis numquam quasi facilis porro tempore, dolorem quam excepturi impedit voluptate magni unde harum, doloremque omnis fugit distinctio!</p>
              <div>
                <div className="flex items-center gap-x-3 pt-[3%]">
                  <input type="radio" />
                  <label htmlFor="">dasdsa</label>
                </div>
                <div className="flex items-center gap-x-3 pt-[3%]">
                  <input type="radio" />
                  <label htmlFor="">dasdsa</label>
                </div>
                <div className="flex items-center gap-x-3 pt-[3%]">
                  <input type="radio" />
                  <label htmlFor="">dasdsa</label>
                </div>
                <div className="flex items-center gap-x-3 pt-[3%]">
                  <input type="radio" />
                  <label htmlFor="">dasdsa</label>
                </div>
              </div>
            </div>
            <div className="border-t px-[3%] pt-[1%] flex items-center justify-between">
              <button className="w-[9vw] rounded-[5px] text-black font-bold py-[10px] border border-black ">Sebelumnya</button>
              <button className="w-[9vw] rounded-[5px] text-white py-[10px] bg-black ">Selanjutnya</button>
            </div>
          </div>

          <div className="col-span-2 pl-[3%] overflow-scroll">
            <div className=" px-[3%] pt-[3%] grid grid-cols-5 gap-3 ">
              <BorderJawaban angka={'1'} />
              <BorderJawaban angka={'2'} />
              <BorderJawaban angka={'3'} />
              <BorderJawaban angka={'4'} />
              <BorderJawaban angka={'5'} />
              <BorderJawaban angka={'6'} />
              <BorderJawaban angka={'7'} />
              <BorderJawaban angka={'8'} />
              <BorderJawaban angka={'9'} />
              <BorderJawaban angka={'10'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exam
