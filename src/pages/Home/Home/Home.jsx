import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import NewsLetter from "../NewsLetter/NewsLetter";
import PopularMenu from "../PopularMenu/PopularMenu";
import ShouldTry from "../ShouldTry/ShouldTry";
import Testimonials from "../Testimonials/Testimonials";




const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <NewsLetter/>
            <PopularMenu/>
            <Contact/>
            <ShouldTry/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;