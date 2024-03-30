import { useEffect, useState } from "react";

const Banner = () => {
    const [bannerData, setBannerData] = useState({})

    useEffect(() => {
        fetch('./bannerData/bannerData.json')
            .then(res => res.json())
            .then(data => setBannerData(data))
    }, []);
    console.log(bannerData)


    return (
        <section className="h-fit lg:h-[600px]">
            <div className="lg:flex">
                {/* banner-one */}
                <div className="lg:w-2/3 relative">
                    <img className="md:w-[calc(100%-5px)] h-[300px] md:h-[400px] lg:h-[600px] " src={bannerData?.bannerOne?.img} alt="" />
                    <div className="text-white  absolute top-[150px] md:top-[295px] lg:top-[450px] left-5">
                        <span className="bg-red-600 p-1 rounded-md">GAMING</span>
                        <h3 className="md:text-2xl lg:text-4xl font-bold my-2">{bannerData?.bannerOne?.bannerTitle}</h3>
                        <p>{bannerData?.bannerOne?.editor}</p>
                    </div>
                </div>
                {/* banner-two */}
                <div className="flex lg:inline-block lg:w-1/3  md:mt-2 lg:mt-0">
                    {/* banner-part */}
                    <div className=" w-full mt-1 md:mt-0 md:w-1/2 md:pr-1 lg:w-[calc(100%-5px)] lg:pb-1 md:pb-0 relative">
                        <img className="w-full  h-[297.5px]" src={bannerData?.bannerTwo?.img} alt="" />

                        <div className="text-white  absolute top-[110px]  md:top-[150px] left-5">
                            <span className="bg-red-600 p-1 rounded-md">MOBILE</span>
                            <h3 className="md:text-xl lg:text-2xl font-bold my-2">{bannerData?.bannerTwo?.bannerTitle}</h3>
                            <p>{bannerData?.bannerTwo?.editor}</p>
                        </div>

                    </div>
                    {/* banner-three */}
                    <div className="w-full mt-1 md:mt-0 md:w-1/2 md:pr-1 lg:w-full relative">
                        <img className="md:w-[calc(100%-5px)] h-[297.5px] lg:pt-[1px] md:pt-0" src={bannerData?.bannerThree?.img} alt="" />


                        <div className="text-white  absolute top-[110px]  md:top-[150px] left-5">
                            <span className="bg-red-600 p-1 rounded-md">TECH</span>
                            <h3 className="md:text-xl lg:text-2xl font-bold my-2">src={bannerData?.bannerThree?.bannerTitle}</h3>
                            <p>src={bannerData?.bannerThree?.editor}</p>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;