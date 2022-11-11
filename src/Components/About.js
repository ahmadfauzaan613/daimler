import React from 'react'
import Logo from '../Assets/Image/Screenshot.png'

function About() {
  return (
    <div id="about">
      <div className="grid grid-cols-2 items-center container mx-auto  pt-[2%] pb-[3%]  px-[5%] ">
        <img src={Logo} className="w-[20vw]" alt="" />
        <div>
          <p className="font-bold text-[24px] uppercase pb-[1%]">Aims</p>
          <li className="text-[18px] whitespace-nowrap">Increasing awareness of the job profiles</li>
          <li className="text-[18px] whitespace-nowrap">Installation of a platform for the comparison of skills within the job profiles. </li>
          <li className="text-[18px] whitespace-nowrap">Increasing the brand identity of the participants.</li>
          <li className="text-[18px] whitespace-nowrap">Additional incentive to specialize (job profiles) in the service and parts sales sector.</li>
          <li className="text-[18px] whitespace-nowrap">Learning incentive (motivation) for the participating target groups. </li>
          <p className="font-bold text-[24px] pt-[5%] uppercase pb-[1%]">The Competition</p>
          <li className="text-[18px] whitespace-nowrap">
            Takes its lead from the areas of competence in the job profiles and the service <br /> and parts sales processes in retail.
          </li>
          <li className="text-[18px] whitespace-nowrap">Tests the individual skills and their interaction in the process. </li>
          <li className="text-[18px] whitespace-nowrap">
            The scoring system allows an individual rating within the job profiles and also a <br /> team rating.{' '}
          </li>
          <li className="text-[18px] whitespace-nowrap">The competition components: Knowledge Test and Practical Test.</li>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default About
