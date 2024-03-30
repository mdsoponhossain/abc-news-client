import Banner from "../../components/banner/Banner";
import FooterSection from "../../components/footerSection/FooterSection";
import Gadgets from "../../components/gadgets/Gadgets";
import News from "../../components/news/News";
import Trending from "../../components/trending/Trending";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trending></Trending>

            <News></News>

            <Gadgets></Gadgets>

            <News></News>


            <FooterSection></FooterSection>

        </div>
    );
};

export default Home;