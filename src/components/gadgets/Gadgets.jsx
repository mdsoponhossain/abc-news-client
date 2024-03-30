import { useEffect, useState } from "react";
import MainContent from "../../sharedComponents/mainContent/MainContent";

const Gadgets = () => {

    const [trendings, setTrendings] = useState([]);
    useEffect(() => {
        fetch('./trendingData/trendingData.json')
            .then(res => res.json())
            .then(data => setTrendings(data))
    }, []);
    // console.log(trendings)


    return (
        <section className="bg-gray-100">
            <div className="border border-1 border-red-500 p-3 md:p-2 lg:p-0 lg:w-[1200px] mx-auto">
                <h1 className="text-2xl font-semibold my-3 text-red-600">GADGETS</h1>
                <section className="md:flex md:justify-between grid md:grid-cols-2 lg:grid-cols-3 gap-2 h-fit">
                    {
                        trendings?.map((content, index) => <MainContent
                            key={index} content={content}
                            imgStyles={"md:w-[96%]"}
                            containerStyles={"my-5 md:my-0"}
                            titleStyles={"md:w-[100%] md:font-bold md:mt-3"}
                            textContainerStlyes={'md:text-xl w-full font-semibold'}
                            editorStyles={''}
                        ></MainContent>)
                    }
                </section>



            </div>




        </section>
    );
};

export default Gadgets;