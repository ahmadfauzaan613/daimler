import React, { Component } from 'react'
import Slider from 'react-slick'
import backgroundd from '../Assets/Image/Background.svg'

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
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 4500,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className="pt-[2%] px-[1%]">
        <Slider {...settings}>
          <div>
            <img src={backgroundd} className="w-full px-[1%] h-full" alt="" />
          </div>
          <div>
            <img src={backgroundd} className="w-full px-[1%] h-full" alt="" />
          </div>
          <div>
            <img src={backgroundd} className="w-full px-[1%] h-full" alt="" />
          </div>
          <div>
            <img src={backgroundd} className="w-full px-[1%] h-full" alt="" />
          </div>
          <div>
            <img src={backgroundd} className="w-full px-[1%] h-full" alt="" />
          </div>
          <div>
            <img src={backgroundd} className="w-full px-[1%] h-full" alt="" />
          </div>
          <div>
            <img src={backgroundd} className="w-full px-[1%] h-full" alt="" />
          </div>
        </Slider>
      </div>
    )
  }
}
