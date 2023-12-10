import { IoMdArrowDropdown,IoIosSearch } from "react-icons/io";
import { useRef } from "react";
import  "../styles/navbar.scss";
const logo = require("../media/dhigna-logo.png")


const Navbar = ()=>{
    const navRef = useRef();
    window.onscroll = ()=>{
        if(window.scrollY > 300){
            navRef.current.classList.add("navbar")
        }else{
            navRef.current.classList.remove("navbar")

        }
    }
    return(
        <div ref={navRef} className="navbar-container">
            <div className="navbar-item1">
                <img src={logo} alt="" />
                <span>
                    <h3>Dhigna Events</h3>
                    <p>Dhigna Events . Sell Tickets.</p>
                </span>
            </div>
            <div className="navbar-item2">
                <div className="dropdown">
                    <p className="title">Categories <IoMdArrowDropdown/></p>
                    <ul>
                        <li>Upcoming Events</li>
                        <li>Entertainment</li>
                        <li>Music</li>
                        <li>Dances</li>
                    </ul>
                </div>
                <input type="text" placeholder="Search for Events, Sports."/>
                <p>Login</p>

                <div className="dropdown">
                    <p className="title">Registration <IoMdArrowDropdown/></p>
                    <ul>
                        <li>Customer Registration</li>
                        <li>Orgainzer Registration</li>
                        <li>Agent Registration</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar;