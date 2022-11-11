import React, { Component } from 'react'
import Slider from 'react-slick'
import backgroundd from '../Assets/Image/Background.svg'
import newsImage from '../Assets/Image/news.svg'

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
  }
  play() {
    this.slider.slickPlay()
  }
  pause() {
    this.slider.slickPause()
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    }
    return (
      <div className="overflow-hidden" id="home">
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div>
            <div className="absolute top-0  w-full pt-[13%]">
              <p className=" text-white text-[87px] font-bold pl-[8%] pb-[2%]">
                Selamat Datang di <br /> DCVI TechMasters 2022-2023
              </p>
              <p className=" text-white text-[37px] font-normal pl-[8%] pb-[2%]">
                Customer Services and Parts <br /> PT Daimler Commercial Vehicles Indonesia
              </p>
            </div>
            <img src={backgroundd} className="w-full h-full" alt="" />
          </div>
          {/* <div>
            <img src={newsImage} className="w-full h-full" alt="" />
          </div> */}
        </Slider>
      </div>
    )
  }
}
