import { useEffect, useState } from "react";
import MainContent from "../../sharedComponents/mainContent/MainContent";

const Trending = () => {
    const [trendings, setTrendings] = useState([]);
    useEffect(() => {
        fetch('./trendingData/trendingData.json')
            .then(res => res.json())
            .then(data => setTrendings(data))
    }, []);
    // console.log(trendings)
    return (
        <div className="lg:w-[1200px] w-[90%] mx-auto mt-10 h-fit border">
            <h1 className="text-2xl font-semibold my-3 text-red-600">TRENDING</h1>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 h-fit">
                {
                    trendings?.map((content, index) => <MainContent
                        key={index} content={content}
                        imgStyles={"h-[200px] w-full lg:w-[380px]"}
                        titleStyles={"md:font-bold md:text-xl mt-10 lg:mt-16 mt-16 md:mt-0"}
                        containerStyles={'my-5 md:my-0'}
                    ></MainContent>)
                }
            </section>
        </div>
    );
};

export default Trending;