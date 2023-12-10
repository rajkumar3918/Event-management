import { useEffect, useState } from "react";
import "../styles/homeBanner.scss";
// const bimg = require("../media/club.png")

const bimg = require("../media/club.png")


const Banner = ()=>{
    return(
        <div className="banner-cont">
            <div className="bg-img"></div>
            <div className="content">
                <h1 className="title">Event Management And Selling Platform</h1>
                <h1 className="sub-title">Dhigna Events</h1>
                <button>Get Events Tickets </button>
            </div>
            <div className="image">
                <img src={bimg} alt="" />
            </div>
        </div>
    )
};

export default Banner;