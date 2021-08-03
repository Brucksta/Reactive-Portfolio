import React, { Component } from 'react'
import Typical from 'react-typical'


        export default function Home() {
            return (
                <div className="mt-40">
                <div className="flex justify-center items-center">
                    <h1 className="text-8xl font-serif">Hi, Im Peter</h1>
                    
                </div>
                <div className="text-4xl font-serif mt-4 ">
                    <p className="flex justify-center"> I am a W
                         
                         <Typical
        steps={[` eb Developer`, 1000, ` eb Creator`, 1000, 'eb Enthusiast', 1000,]}
        loop={Infinity}
        wrapper="p"
      />
      </p>
      </div>
      </div>
            )
        }