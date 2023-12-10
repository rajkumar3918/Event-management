import Categories from "../components/categories"
import Footer from "../components/footer"
import Banner from "../components/homeBanner"
import Navbar from "../components/navbar"
import Recommended from "../components/recommended"

const HomePage = ()=>{
    return(
        <div className="homepage">
            <Navbar/>
            <Banner/>
            <Recommended pass={"Recommended Events"}/>
            <Categories/>
            <Recommended pass={"Latest Events"}/>
            <Footer/>
        </div>
    )
}

export default HomePage