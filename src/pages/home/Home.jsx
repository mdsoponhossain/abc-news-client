import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import News from "../../components/news/News";
import Trending from "../../components/trending/Trending";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Trending></Trending>
            <div className="border border-1 border-red-500 p-3 md:p-2 lg:p-0 lg:w-[1200px] mx-auto">
                <News></News>
            </div>
        </div>
    );
};

export default Home;