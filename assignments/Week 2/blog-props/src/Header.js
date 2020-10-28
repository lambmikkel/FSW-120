import React from "react";
import Navbar from "./Navbar";
let background = "https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg";

function Header() {
    return ( 
        <header class="masthead" style={{backgroundImage: `url(${background})`}}>
    <div className="overlay"></div>
    <div className="container">
    <Navbar />
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <h1>Clean Blog</h1>
            <span className="subheading">A Blog Theme by Start Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  </header>
    )
}

export default Header;