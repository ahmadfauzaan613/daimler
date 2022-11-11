import React from 'react'
import { useState } from 'react'

function Regulation() {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  return (
    <div id="regulation" className="container mx-auto  px-[5%] py-[3%]">
      <p className="font-bold text-[24px] text-center">Regulation</p>
      <div>
        <div className="pt-[2%] flex items-center  justify-between">
          <p className="font-bold text-[20px] whitespace-nowrap text-left">Conditions of participation</p>
          <div className="w-full bg-black h-2 mx-[20px]"></div>
          {!show ? (
            <span onClick={() => setShow(!show)} class="material-symbols-outlined cursor-pointer  text-black">
              expand_circle_down
            </span>
          ) : (
            <span onClick={() => setShow(!show)} class="material-symbols-outlined rotate-180 cursor-pointer text-black">
              expand_circle_down
            </span>
          )}
        </div>
        {!show ? (
          <>
            <p className="pt-[1.7%] pb-[1%] text-[16px] font-bold">The circle of participants consists of 3 persons in one team who individually have the following job profiles in retail: </p>
            <li className=" text-[16px] ">Service Advisor</li>
            <li className=" text-[16px] py-[5px] ">Part Process Specialist</li>
            <li className=" text-[16px] ">Technician</li>
            <p className="pt-[1.7%] pb-[1%] text-[16px]">
              The participants possess the skills and knowledge required for their job profile (see job profile description) and the competition is arranged for all business unit: <br /> <span className="font-bold"> TA, TE, and Bus.</span>
            </p>
          </>
        ) : (
          ''
        )}
      </div>
      {/* ---------- */}
      <div>
        <div className="pt-[2%] flex items-center  justify-between">
          <p className="font-bold text-[20px] whitespace-nowrap text-left">Job profile – Service Advisor</p>
          <div className="w-full bg-black h-2 mx-[20px]"></div>
          {!show2 ? (
            <span onClick={() => setShow2(!show2)} class="material-symbols-outlined cursor-pointer  text-black">
              expand_circle_down
            </span>
          ) : (
            <span onClick={() => setShow2(!show2)} class="material-symbols-outlined rotate-180 cursor-pointer text-black">
              expand_circle_down
            </span>
          )}
        </div>
        {!show2 && (
          <>
            <li className=" text-[16px] pb-[5px] pt-[1.7%]">Able to give the customer product information in understandable form, explain technical aspects and also describe the benefits of every offer/solution.</li>
            <li className=" text-[16px] pb-[5px]">Able to pass on a workshop order of high quality, so as to ensure that the workshop repairs the vehicle professionally and efficiently</li>
            <li className=" text-[16px] pb-[5px]">Able to actively offer the customer solutions and provide information on estimated time and cost.</li>
            <li className=" text-[16px] pb-[5px]">Is able to translate customer language into "workshop language", and produce a detailed workshop order on this basis.</li>
            <li className=" text-[16px] pb-[5px]">Has a good knowledge of current after-sales systems and the software usually used in a Mercedes-Benz.</li>
          </>
        )}
      </div>
      {/* ---------- */}
      <div>
        <div className="pt-[2%] flex items-center  justify-between">
          <p className="font-bold text-[20px] whitespace-nowrap text-left">Job profile – Part Process Specialist</p>
          <div className="w-full bg-black h-2 mx-[20px]"></div>
          {!show3 ? (
            <span onClick={() => setShow3(!show3)} class="material-symbols-outlined cursor-pointer  text-black">
              expand_circle_down
            </span>
          ) : (
            <span onClick={() => setShow3(!show3)} class="material-symbols-outlined rotate-180 cursor-pointer text-black">
              expand_circle_down
            </span>
          )}
        </div>
        {!show3 && (
          <>
            <li className=" text-[16px] pb-[5px] pt-[1.7%]"> Has fundamental knowledge of the brand, products and company.</li>
            <li className="text-[16px] pb-[5px]">Able to explain the advantages of the manufacturer's products and services with corresponding argumentation of the benefits.</li>
            <li className="text-[16px] pb-[5px]">Able to reliably state prices, discounts, parts availability and delivery dates, delivery times and combinations of parts.</li>
            <li className="text-[16px] pb-[5px]">Has a good knowledge of current after-sales systems and the software usually used in a MercedesBenz.</li>
          </>
        )}
      </div>
      {/* ---------- */}
      <div>
        <div className="pt-[2%] flex items-center  justify-between">
          <p className="font-bold text-[20px] whitespace-nowrap text-left">Job profile – Technician</p>
          <div className="w-full bg-black h-2 mx-[20px]"></div>
          {!show4 ? (
            <span onClick={() => setShow4(!show4)} class="material-symbols-outlined cursor-pointer  text-black">
              expand_circle_down
            </span>
          ) : (
            <span onClick={() => setShow4(!show4)} class="material-symbols-outlined rotate-180 cursor-pointer text-black">
              expand_circle_down
            </span>
          )}
        </div>
        {!show4 && (
          <>
            <li className="pt-[1.7%] pb-[5px] text-[16px]">Has outstanding, detailed knowledge of systems in the vehicle, service, repair and diagnosis sectors. </li>
            <li className="pb-[5px] text-[16px]">Has a good knowledge of the structure, function and networking of in-vehicle systems and components</li>
            <li className="pb-[5px] text-[16px]">Familiar with the operation of all current vehicle systems and functions.</li>
            <li className="pb-[5px] text-[16px]">Knows all servicing, testing and adjustment procedures, or is able to assimilate them rapidly.</li>
            <li className="pb-[5px] text-[16px]">Has a good knowledge of current after-sales systems and the software usually used in a Mercedes-Benz</li>
          </>
        )}
      </div>
      {/* ---------- */}
    </div>
  )
}

export default Regulation
