import React from 'react'
import { Fade } from 'react-reveal'
import newsImage from '../Assets/Image/news.svg'
import Article from '../Components/Article'
import Footer from '../Components/Footer'
import NavbarLandingPage from '../Components/NavbarLandingPage'

function DetailBerita() {
  return (
    <div>
      <Fade down>
        <div className="sticky top-0 z-10">
          <NavbarLandingPage />
        </div>
        <div className="overflow-y-scroll overflow-x-hidden h-[87vh]">
          <div className="bg-white h-auto pb-[5%]">
            <div className="container mx-auto pt-[2%] px-[5%]">
              <p className="text-center text-[28px] font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              <div className="flex justify-center py-[3%]">
                <img src={newsImage} className="w-[90vw]" alt="" />
              </div>
              <p className="text-justify tracking-wider ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem cum et consectetur laudantium ullam magni voluptate quaerat, soluta enim aperiam ad molestiae qui inventore nulla delectus deserunt. Fugit, perferendis! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Accusamus assumenda inventore, perferendis at fugit maxime debitis saepe officiis, eveniet fugiat libero explicabo iste numquam amet, repudiandae non? Adipisci, illum placeat! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio impedit deleniti deserunt fugit
                labore sunt obcaecati officiis eos maxime neque voluptatibus amet inventore velit ullam, molestiae laboriosam, quas saepe! Iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem cum et consectetur laudantium ullam magni voluptate quaerat, soluta enim
                aperiam ad molestiae qui inventore nulla delectus deserunt. Fugit, perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda inventore, perferendis at fugit maxime debitis saepe officiis, eveniet fugiat libero explicabo iste numquam amet, repudiandae
                non? Adipisci, illum placeat! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio impedit deleniti deserunt fugit labore sunt obcaecati officiis eos maxime neque voluptatibus amet inventore velit ullam, molestiae laboriosam, quas saepe! Iste. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Dignissimos quidem cum et consectetur laudantium ullam magni voluptate quaerat, soluta enim aperiam ad molestiae qui inventore nulla delectus deserunt. Fugit, perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda
                inventore, perferendis at fugit maxime debitis saepe officiis, eveniet fugiat libero explicabo iste numquam amet, repudiandae non? Adipisci, illum placeat! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio impedit deleniti deserunt fugit labore sunt obcaecati
                officiis eos maxime neque voluptatibus amet inventore velit ullam, molestiae laboriosam, quas saepe! Iste.
              </p>
            </div>
          </div>
          <Article />
          <Footer />
        </div>
      </Fade>
    </div>
  )
}

export default DetailBerita
