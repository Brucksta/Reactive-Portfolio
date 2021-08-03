import React, { useState } from "react";
import profilePicture from "../utils/image3.png";
import peterFootballPhoto from '../utils/image 4.png'
import style from "../styles/style.css";

export default function AboutMe() {
  return (
    <div>
      <div class="Container-1 flex">
        <div class="w-2/3 ml-40">
          <h2 class="pbWebDev mt-28 text-lg">
            Hi, I’m Peter Brückner, Web Developer
          </h2>
          <p class="pbWebDevText mt-10">
            Motivated junior web developer dedicated to developing and
            optimising interactive, user-friendly, and feature-rich websites.
            Currently studying in the University of Adelaide’s Coding Bootcamp,
            seeking a role as full-stack web developer.
          </p>
          <p class="pbWebDevText mt-5">
            I have growing skills in the languages of HTML, Css, Javascript,
            Typescript, PHP and React. Ive also created apps using backend
            technologies, such as Express.js, Node.js, MySQL and MongoDB.{" "}
          </p>
        </div>

        <div class="rightContainer-1 w-1/3 mr-40 mt-24">
          <div class="block">
            <img
              className="peterPicture block"
              src={profilePicture}
              alt={"Photo of Peter"}
            />
          </div>
        </div>
      </div>

      <div class="flex">
        <div class="ml-60 mt-40 w-5/12">
          <h2 class="font-extrabold text-2xl">Random things about me</h2>
          <ul class="aboutMe">
            <li class="mt-10 ml-5">I’m super into all sports</li>
            <li class="mt-1 ml-5">My favourite TV show is The Office</li>
            <li class="mt-1 ml-5">I was an Electrician for seven years</li>
            <li class="mt-1 ml-5">I drink around six coffees a day</li>
            <li class="mt-1 ml-5">I love building computers</li>
            <li class="mt-1 ml-5">I’m building a house this year</li>
          </ul>
         
        </div>

        <div class="w-7/12 mt-40">
          <img class="peterPicture2" src={peterFootballPhoto} alt="" />
        </div>
      </div>
    </div>
  );
}
