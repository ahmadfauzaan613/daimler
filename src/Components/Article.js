import React, { useState } from 'react'
import backgroundd from '../Assets/Image/Background.svg'
import CardArticle from './CardArticle'
import CarouselPhoto from '../Components/CarouselPhoto'
import { useNavigate } from 'react-router-dom'

function Article() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const location = window.location.pathname
  const [show2, setShow2] = useState(false)
  return (
    <div className="container mx-auto px-[5%]" id="article">
      {/* News */}
      <div className="mb-[5%]">
        <div className="flex items-center gap-x-6">
          {location !== '/home' ? <p className="text-[24px] p-0 m-0 font-bold whitespace-nowrap">Another Articles</p> : <p className="text-[24px] p-0 m-0 font-bold">Articles</p>}
          <div className="bg-black w-full h-[3px]"></div>
          {!show ? (
            <span onClick={() => setShow(!show)} className="cursor-pointer material-symbols-outlined">
              expand_circle_down
            </span>
          ) : (
            <span onClick={() => setShow(!show)} className="cursor-pointer material-symbols-outlined rotate-180">
              expand_circle_down
            </span>
          )}
        </div>
        {!show && (
          <>
            <div className="flex flex-nowrap gap-x-5 justify-between mt-[1%]">
              <CardArticle
                gambar={backgroundd}
                judul={'Lorem ipsum dolor'}
                link={'/home/article/detail'}
                desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dicta, dolorem praesentium ipsum iste dolor pariatur itaque dolore excepturi harum tempore doloribus eos laboriosam sapiente nemo deleniti magnam enim porro?'}
              />
              <CardArticle
                gambar={backgroundd}
                judul={'Lorem ipsum dolor'}
                link={'/home/article/detail'}
                desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dicta, dolorem praesentium ipsum iste dolor pariatur itaque dolore excepturi harum tempore doloribus eos laboriosam sapiente nemo deleniti magnam enim porro?'}
              />
              <CardArticle
                gambar={backgroundd}
                judul={'Lorem ipsum dolor'}
                link={'/home/article/detail'}
                desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dicta, dolorem praesentium ipsum iste dolor pariatur itaque dolore excepturi harum tempore doloribus eos laboriosam sapiente nemo deleniti magnam enim porro?'}
              />
              <CardArticle
                gambar={backgroundd}
                judul={'Lorem ipsum dolor'}
                link={'/home/article/detail'}
                desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dicta, dolorem praesentium ipsum iste dolor pariatur itaque dolore excepturi harum tempore doloribus eos laboriosam sapiente nemo deleniti magnam enim porro?'}
              />
            </div>
            <div className="flex justify-center mt-[3%]">
              {location === '/home' && (
                <button onClick={() => navigate('/home/article')} className="border rounded-[5px] w-[15vw] text-black border-black hover:bg-black hover:text-white py-[7px]">
                  Show More
                </button>
              )}
            </div>
          </>
        )}
      </div>
      {/* News */}
      {/* Image */}
      {location !== '/home' ? (
        ''
      ) : (
        <div>
          <div className="flex items-center gap-x-6 ">
            <p className="text-[24px] p-0 m-0 font-bold">Image</p>
            <div className="bg-black w-full h-[3px]"></div>
            {!show2 ? (
              <span onClick={() => setShow2(!show2)} className="cursor-pointer material-symbols-outlined">
                expand_circle_down
              </span>
            ) : (
              <span onClick={() => setShow2(!show2)} className="cursor-pointer material-symbols-outlined rotate-180">
                expand_circle_down
              </span>
            )}
          </div>
          {!show2 && (
            <div>
              <div className="px-[0%] pt-[0%]">
                <CarouselPhoto />
              </div>
              <div className="flex justify-center my-[3%]">
                <button onClick={() => navigate('/home/images')} className="border rounded-[5px] w-[15vw] text-black border-black hover:bg-black hover:text-white py-[7px]">
                  Show More
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {/* Image */}
    </div>
  )
}

export default Article
