import React from 'react'
import Fade from 'react-reveal/Fade'
import backgroundd from '../Assets/Image/Background.svg'
import BarArticle from '../Components/BarArticle'
import CardArticle from '../Components/CardArticle'
import NavbarLandingPage from '../Components/NavbarLandingPage'

function Article() {
  return (
    <>
      <div className="sticky top-0 z-10">
        <NavbarLandingPage />
      </div>
      <div className="bg-white overflow-y-scroll h-[87vh]  overflow-x-hidden">
        <BarArticle />
        <div className="mx-auto container px-[5%]">
          <div className="flex items-center pt-[2%] justify-between">
            <p className="font-bold text-[24px]">Articles</p>
            <input type="search" placeholder="search" className="w-[20vw] outline-none border border-black rounded-[5px] py-[5px] px-[1%]" />
          </div>
          <Fade down>
            <div className="grid grid-cols-4 gap-5 mt-[2%] pb-[2%]">
              <CardArticle
                gambar={backgroundd}
                judul={'Lorem ipsum dolor'}
                link={'/home/article/detail'}
                desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dicta, dolorem praesentium ipsum iste dolor pariatur itaque dolore excepturi harum tempore doloribus eos laboriosam sapiente nemo deleniti magnam enim porro?'}
              />
            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}

export default Article
