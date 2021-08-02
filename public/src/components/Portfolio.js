import React, { useState, PureComponent } from "react";
import Slider from "react-slick";
import { data } from './data'
import "./Portfolio.scss";
import bitbbl from "../img/bitcoin-bubbler.png";
import calendarImg from "../img/calendar.png";
import fitnessTracker from "../img/fitness-tracker.png";
import noteTaker from "../img/note-taker.png";
import sportsScheduler from "../img/sports-scheduler.png";
import weatherImg from "../img/weather-app.png";
import github from '../img/github.png'
import link from '../img/link.png'


export default class PortfolioSlider extends PureComponent {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true, 
    };
     
    return (
      <div className="flex justify-center">
      <div className="mt-10 ml-40 mr-40 w-4/6">
        <h2 className="font-serif text-4xl text-yellow-500 text-center">
          Portfolio
        </h2>
        <Slider {...settings}>
      
      {data.map((d) => (
        <div className="container mt-10">
          <div className="item flex">
            {/* left */}
            <div className="w-1/3 mr-10">
              <div className="leftContainer">
                <h2 className="font-serif text-2xl text-yellow-500">{d.title}</h2>
                <p className="font-serif mt-10">{d.desc}</p>
                <div className="flex mt-20">
                <a href={`${d.site}`} className=""><div className="mt-4"><img class="mr-1" src={link} alt=""/></div></a>
                <a href={d.icon}><div className="mt-4"><img class="mr-1" src={github} alt=""/></div></a>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="flex w-2/3">
              <img
                src={d.img}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
       </Slider>
    </div>
</div>
    )
      }}
