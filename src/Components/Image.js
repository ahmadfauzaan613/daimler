import React from 'react'
import NavbarLandingPage from './NavbarLandingPage'
import Fade from 'react-reveal/Fade'
import backgroundd from '../Assets/Image/Background.svg'
import BarArticle from './BarArticle'

function Image() {
  return (
    <>
      <div className="sticky top-0 z-10">
        <NavbarLandingPage />
      </div>
      <div className="bg-white overflow-y-scroll h-[87vh]  overflow-x-hidden">
        <BarArticle />
        {/* Article */}
        <div className="mx-auto container px-[5%]">
          <div className="flex items-center pt-[2%] justify-between">
            <p className="font-bold text-[24px]">Image</p>
            <input type="search" placeholder="search" className="w-[20vw] outline-none border border-black rounded-[5px] py-[5px] px-[1%]" />
          </div>
          <div className="grid grid-cols-4 gap-5 mt-[2%] pb-[2%]">
            <Fade down>
              <div>
                <img src={backgroundd} alt="" />
                <p className="text-center py-[3%] cursor-pointer">test1</p>
              </div>
            </Fade>
          </div>
        </div>

        {/* Article */}
      </div>
    </>
  )
}

export default Image
