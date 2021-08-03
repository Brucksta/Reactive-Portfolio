import App from "../App";
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
export default function Header() {
    
        return (
          <div className="App">
            <header className="App-header">
              <nav class="bg-white px-8 pt-2 shadow-md">
                <div class="-mb-px flex justify-end mr-40">
                  <Link to="/">
                  <h2 class="no-underline text-yellow-500 border-b-2 border-transparent uppercase tracking-wide font-bold text-xl py-3 pr-72">
                    Peter's Portfolio
                  </h2>
                  </Link>
                  <Link to="/aboutme"                    class="no-underline text-yellow-500 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-4 mr-8 hover:text-yellow-300 mx-2  p-1 sm:hover:bg-transparent"
                    href="#"
                  >
                    About Me
                  </Link>
                  <Link to="/portfolio"
                    class="no-underline text-yellow-500 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-4 mr-8 hover:text-yellow-300 mx-2 p-1 sm:hover:bg-transparent"
                    href="#"
                  >
                    Portfolio
                  </Link>
                  <Link to="/contact"
                    class="no-underline text-yellow-500 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-4 mr-8  hover:text-yellow-300 mx-2  p-1  sm:hover:bg-transparent"
                    href="#"
                  >
                    Contact
                  </Link>
                  <Link to="/resume"
                    class="no-underline text-yellow-500 border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-4 hover:text-yellow-300 mx-2  p-1  sm:hover:bg-transparent"
                    href="#"
                  >
                    Resume
                  </Link>
                </div>
              </nav>
            </header>
          </div>
        );
      
}