
const Banner = () => {
    // hover:scale-105  transform transition-transform duration-300 ease-in-out
    return (
        <section className="h-fit lg:h-[600px]">
            <div className="lg:flex">
                <div className="lg:w-2/3 relative">
                    <img className="md:w-[calc(100%-5px)] h-[300px] md:h-[400px] lg:h-[600px] " src="https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_286775054_xl-2015-1-1024x445.jpg" alt="" />
                    <div className="text-white  absolute top-[150px] md:top-[295px] lg:top-[450px] left-5">
                        <span className="bg-red-600 p-1 rounded-md">GAMING</span>
                        <h3 className="md:text-2xl lg:text-4xl font-bold my-2">Oculus Quest X Headset: Discover a Shining New Star</h3>
                        <p>Shane Doe - Jan 5, 2021</p>
                    </div>
                </div>
                <div className="flex lg:inline-block lg:w-1/3  md:mt-2 lg:mt-0">
                    <div className=" w-full mt-1 md:mt-0 md:w-1/2 md:pr-1 lg:w-[calc(100%-5px)] lg:pb-1 md:pb-0 relative">
                        <img className="w-full  h-[297.5px]" src="https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/nathan-de-fortunato-Kfjp8qa8_pM-unsplash-1-1024x617.jpg" alt="" />

                        <div className="text-white  absolute top-[110px]  md:top-[150px] left-5">
                            <span className="bg-red-600 p-1 rounded-md">MOBILE</span>
                            <h3 className="md:text-xl lg:text-2xl font-bold my-2">iPhone Pro 13 Rumored to Feature 1 TB of Storage</h3>
                            <p>Shane Doe - Jan 5, 2021</p>
                        </div>

                    </div>
                    <div className="w-full mt-1 md:mt-0 md:w-1/2 md:pr-1 lg:w-full relative">
                        <img className="md:w-[calc(100%-5px)] h-[297.5px] lg:pt-[1px] md:pt-0" src="https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/pexels-leon-3636001-2-1024x683.jpg" alt="" />


                        <div className="text-white  absolute top-[110px]  md:top-[150px] left-5">
                            <span className="bg-red-600 p-1 rounded-md">TECH</span>
                            <h3 className="md:text-xl lg:text-2xl font-bold my-2">Fujifilm’s 102-Megapixel Camera is the Size of a Typical DSLR</h3>
                            <p>Shane Doe - Jan 5, 2021</p>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;