import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import About from '../Components/About'
import Article from '../Components/Article'
import Footer from '../Components/Footer'
import Fade from 'react-reveal/Fade'
import Carousel from '../Components/Carousel'
import NavbarLandingPage from '../Components/NavbarLandingPage'
import Timeline from '../Components/Timeline'
import Regulation from '../Components/Regulation'
import whatsapp from '../Assets/Image/whatsapp.png'

function Home() {
  return (
    <>
      <Fade down>
        <div className="sticky top-0 z-10">
          <NavbarLandingPage />
        </div>
      </Fade>
      <div className="overflow-y-scroll overflow-x-hidden h-[88vh]">
        <Fade left>
          <Carousel />
          <About />
        </Fade>
        <Fade right>
          <Article />
        </Fade>
        <Fade left>
          <div className="flex items-start justify-center gap-x-5 mx-[5%]">
            <Timeline button={true} exam={'Round I'} tanggal={'21 November 2022'} keterangan={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolor possimus aliquid! '} />
            <Timeline button={false} exam={'Round II'} tanggal={'19 December 2022'} keterangan={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolor possimus aliquid! '} />
            <Timeline button={false} exam={'Final Contest'} tanggal={'23 Januari 2022'} keterangan={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolor possimus aliquid! '} />
          </div>
          <div className="flex items-start justify-center gap-x-5">
            <div id="timeline" className="pt-[1%] grid grid-cols-4 gap-x-4 container mx-auto pl-[5%] pr-[3%] pb-[3%] h-full">
              <div className="bg-black cursor-pointer card h-full w-[15vw] text-center rounded-[4px]">
                <span class="material-symbols-outlined text-[60px] py-[10px]  text-center text-white font-light">person_add</span>
                <div className="pb-[10px]">
                  <p className="font-bold  text-[20px] text-white">Registration</p>
                  <p className="font-normal text-white text-[16px]">Registration Opens</p>
                </div>
                <div className="flex items-center justify-center gap-x-2 pb-[3%] pt-[30px]">
                  <span class="material-symbols-outlined font-bold text-white">calendar_month</span>
                  <p className="font-bold text-white">1-18 Nov 2022</p>
                </div>
              </div>
              <div className="bg-[#b3b3b3] cursor-pointer card h-full w-[15vw] text-center rounded-[4px]">
                <span class="material-symbols-outlined text-[60px] py-[10px]  text-center text-white font-light">person_add</span>
                <div className="pb-[10px]">
                  <p className="font-bold  text-[20px] text-white">Early Contest (virtual)</p>
                  <p className="font-normal text-white text-[16px]">Preliminary Test 1</p>
                </div>
                <div className="flex items-center justify-center gap-x-2 pb-[3%] pt-[30px]">
                  <span class="material-symbols-outlined font-bold text-white">calendar_month</span>
                  <p className="font-bold text-white">30 Nov 2022</p>
                </div>
              </div>
              <div className="bg-[#b3b3b3] cursor-pointer card h-full w-[15vw] text-center rounded-[4px]">
                <span class="material-symbols-outlined text-[60px] py-[10px]  text-center text-white font-light">person_add</span>
                <div className="pb-[10px]">
                  <p className="font-bold  text-[20px] text-white">Early Contest (virtual)</p>
                  <p className="font-normal text-white text-[16px]">Preliminary Test 2</p>
                </div>
                <div className="flex items-center justify-center gap-x-2 pb-[3%] pt-[30px]">
                  <span class="material-symbols-outlined font-bold text-white">calendar_month</span>
                  <p className="font-bold text-white">19 Dec 2022</p>
                </div>
              </div>
              <div className="bg-[#b3b3b3] cursor-pointer card h-full w-[15vw] text-center rounded-[4px]">
                <span class="material-symbols-outlined text-[60px] py-[10px]  text-center text-white font-light">person_add</span>
                <div className="pb-[10px]">
                  <p className="font-bold  text-[20px] text-white">Final Contest & Awarding</p>
                  <p className="font-normal text-white text-[16px]">Pratical Test</p>
                  <p className="font-normal text-white text-[16px]">Awarding Night</p>
                </div>
                <div className="flex items-center justify-center gap-x-2 pb-[3%] pt-[10px]">
                  <span class="material-symbols-outlined font-bold text-white">calendar_month</span>
                  <p className="font-bold text-white">23 Jan 2022</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <div className="fixed bottom-10 right-10 -z-0">
          <a href="https://api.whatsapp.com/send?phone=6281298948588" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <img src={whatsapp} alt="" />
          </a>
        </div>
        <Fade left>
          <Regulation />
        </Fade>
        <Footer />
      </div>
    </>
  )
}

export default Home
