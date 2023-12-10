import "../styles/categories.scss";

const data = [
    {
        img:require("../media/entertainment.png"),
        title:"Entertainment",
        events:"16",
        color:["#7909f9","#9905D9"]
    },
    {
        img:require("../media/dance.png"),
        title:"Dances",
        events:"4",
        color:["#fe0a68", "#ef650a"]
    },
    {
        img:require("../media/music.png"),
        title:"Music",
        events:"16",
        color:["#f909f9","#C683D7"]
    },
    {
        img:require("../media/upcomming.png"),
        title:"Upcomming Events",
        events:"4",
        color:["rgb(41, 41, 237)","rgb(44, 77, 245)"]
    },
]
const Categories = ()=>{
    return(
        <div className="categories-cont">
            <h1 className="tshw">Browse Events by Category</h1>
            <p className="tshw">Live Events for all your entertainment needs</p>

            <div className="event-categories">
                {data.map((e)=>{
                    return(
                        <div className="cate-card" style={{background:`linear-gradient(45deg, rgb(27,27,27), ${e.color[0]},${e.color[1]})`}}>
                          <h2>{e.title}</h2>
                          <p>{e.events}+ Events</p>
                          <div className="img" style={{backgroundImage:`url(${e.img})`}}></div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Categories;