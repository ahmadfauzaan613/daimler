import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom'

function Card(props) {
  const navigate = useNavigate()
  const [modalIsOpen, setIsOpen] = useState(false)
  const [archive, setArchive] = useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  const location = window.location.pathname
  return (
    <>
      {location === '/admin/archive' ? (
        <Modal isOpen={modalIsOpen} className="ujiannn2" contentLabel="Example Modal" overlayClassName="Overlay">
          <div onClick={closeModal} className="flex cursor-pointer justify-end p-[2%]">
            <span class="material-symbols-outlined text-red-600">close</span>
          </div>
          <p className="text-center font-bold">Perhatian</p>
          {archive ? <p className="text-center py-[3%]">Anda Yakin Ingin Menyimpan Exam Ini?</p> : <p className="text-center py-[3%]">Anda Yakin Ingin Membuka Exam Ini?</p>}
          <div className="flex items-center justify-center gap-x-3 pb-[5%] mx-[10%] ">
            <button onClick={closeModal} className="outline-none bg-red-600 py-[2%] text-white font-bold w-full border-none rounded-[5px]">
              Cancel
            </button>
            <button onClick={() => (setArchive(!archive), closeModal())} className="outline-none bg-blue-500 py-[2%] text-white font-bold w-full border-none rounded-[5px]">
              Archive
            </button>
          </div>
        </Modal>
      ) : (
        <Modal isOpen={modalIsOpen} className="ujiannn" contentLabel="Example Modal" overlayClassName="Overlay">
          <div onClick={closeModal} className="flex cursor-pointer justify-end p-[2%]">
            <span class="material-symbols-outlined text-red-600">close</span>
          </div>
          <div>
            <p className="px-[10%] text-center leading-6 font-bold  uppercase">
              This is question {props.round} <br /> open in {props.tanggal} at {props.waktu2} <br /> you must answer
              <span className="text-blue-600"> 40 questions</span> <br /> <span className="text-blue-600">you have 90 minutes</span> for this exam
              <span className="text-red-600"> you can repeat this exam</span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-x-3 mx-[10%] mt-[7%]">
            <button onClick={closeModal} className="outline-none bg-red-600 py-[2%] text-white font-bold w-full border-none rounded-[5px]">
              Cancel
            </button>
            <button onClick={() => navigate('/user-exam/exam')} className="outline-none bg-blue-500 py-[2%] text-white font-bold w-full border-none rounded-[5px]">
              Submit
            </button>
          </div>
        </Modal>
      )}
      {location === '/admin/archive' ? (
        <div onClick={openModal} className="bg-white w-full card cursor-pointer rounded-[5px] h-auto ">
          <div className={`border-b ${archive ? 'bg-blue-600' : 'bg-red-600'} rounded-t pt-[2%]`}>
            <p className="text-center font-bold text-[20px] text-white">{props.judul}</p>
            <p className="text-center font-bold text-[20px] text-white">{props.teamm}</p>
            <p className="text-center font-bold text-[16px]  text-white pb-[10px]">{props.tanggal}</p>
          </div>
          <div className="px-[2%] pt-[2%]">
            <div className="flex items-center justify-start gap-x-3">
              <p>Status</p>
              <p className="pl-[26px]">:</p>
              {!archive ? (
                <p className="font-bold">
                  <span className="text-red-500"> CLOSE OPEN IN 19 DEC 2022</span>
                </p>
              ) : (
                <p className="font-bold">
                  <span className="font-bold text-blue-600">Open</span> (14:00 - 16:00)
                </p>
              )}
            </div>
            <div className="flex items-center justify-start gap-x-3 py-[5px]">
              <p>Duration </p>
              <p className="pl-[6px]">:</p>
              <p className="font-bold">{props.duration}</p>
            </div>
            <div className="flex items-start justify-start gap-x-3">
              <p>Question </p>
              <p className="pl-[5px]">:</p>
              <p className="font-bold"> {props.question}</p>
            </div>
            <div className="flex items-start justify-start gap-x-3 py-[5px]">
              <p className="whitespace-nowrap">Rules</p>
              <p className="pl-[34px]">:</p>
              <p className="font-bold"> Participants can only do the exam once And cannot repeat this test</p>
            </div>
            <div className="flex justify-center my-[5%]">
              <button onClick={openModal} className="bg-black font-bold text-white w-[10vw] rounded-[5px] py-[8px]">
                Start
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div onClick={openModal} className="bg-white w-full card cursor-pointer rounded-[5px] h-auto ">
          <div className={`border-b ${!archive ? 'bg-blue-600' : 'bg-red-600'} rounded-t pt-[2%]`}>
            <p className="text-center font-bold text-[20px] text-white">{props.judul}</p>
            <p className="text-center font-bold text-[20px] text-white">{props.teamm}</p>
            <p className="text-center font-bold text-[16px]  text-white pb-[10px]">{props.tanggal}</p>
          </div>
          <div className="px-[2%] pt-[2%]">
            <div className="flex items-center justify-start gap-x-3">
              <p>Status</p>
              <p className="pl-[26px]">:</p>
              {archive ? (
                <p className="font-bold">
                  <span className="text-red-500"> CLOSE OPEN IN 19 DEC 2022</span>
                </p>
              ) : (
                <p className="font-bold">
                  <span className="font-bold text-blue-600">Open</span> (14:00 - 16:00)
                </p>
              )}
            </div>
            <div className="flex items-center justify-start gap-x-3 py-[5px]">
              <p>Duration </p>
              <p className="pl-[6px]">:</p>
              <p className="font-bold">{props.duration}</p>
            </div>
            <div className="flex items-start justify-start gap-x-3">
              <p>Question </p>
              <p className="pl-[5px]">:</p>
              <p className="font-bold"> {props.question}</p>
            </div>
            <div className="flex items-start justify-start gap-x-3 py-[5px]">
              <p className="whitespace-nowrap">Rules</p>
              <p className="pl-[34px]">:</p>
              <p className="font-bold"> Participants can only do the exam once And cannot repeat this test</p>
            </div>
            <div className="flex justify-center my-[5%]">
              <button onClick={openModal} className="bg-black font-bold text-white w-[10vw] rounded-[5px] py-[8px]">
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
