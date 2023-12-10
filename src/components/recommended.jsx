import { useRef } from "react";
import "../styles/recomended.scss";
import { GrNext,GrPrevious } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";

const data = [
    {
        img:require("../media/visha.png"),
        title:"Pathaans of Bollywood",
        date:"12 jan 2024",
        
    },
    {
        img:require("../media/dsp1.png"),
        title:"Oo Antava - Telugu",
        date:"13 jan 2024"
    },
    {
        img:require("../media/dsp2.png"),
        title:"Oo Solriya - Tamil",
        date:"14 jan 2024"
    },
    {
        img:require("../media/visha.png"),
        title:"Pathaans of Bollywood",
        date:"12 jan 2024",
        
    },
    {
        img:require("../media/dsp1.png"),
        title:"Oo Antava - Telugu",
        date:"13 jan 2024"
    },
    {
        img:require("../media/dsp2.png"),
        title:"Oo Solriya - Tamil",
        date:"14 jan 2024"
    },
    {
        img:require("../media/visha.png"),
        title:"Pathaans of Bollywood",
        date:"12 jan 2024",
        
    },
    {
        img:require("../media/dsp1.png"),
        title:"Oo Antava - Telugu",
        date:"13 jan 2024"
    },
    {
        img:require("../media/dsp2.png"),
        title:"Oo Solriya - Tamil",
        date:"14 jan 2024"
    },
    
]

const Recommended =(prop)=>{
    const eventRef = useRef();
    const handleClickLeft = ()=>{
        eventRef.current.style.transform = "translateX(-1280px)";
    };
    const handleClickRight = ()=>{
        eventRef.current.style.transform = "translateX(0px)"
    }
    return(
        <div className="events-cont">
            <h1 className="headline">{prop.pass}</h1>
            <button className="left-btn btns" onClick={handleClickLeft}><GrNext/></button>
            <button className="right-btn btns" onClick={handleClickRight}><GrPrevious/></button>
        <div className="cards-cont">
            <div ref={eventRef} className="cards">

            {data.map((e)=>{
                return(
                    <div className="event-card">
                        <img src={e.img} alt="" />
                        <p className="date"><MdDateRange/> {e.date}</p>
                        <p className="title">{e.title}</p>
                    </div>
                    
                )
            })}
            </div>
        </div>
        </div>

    )
};

export default Recommended;