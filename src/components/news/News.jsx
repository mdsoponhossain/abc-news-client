
const News = () => {
    return (
        <div className="my-16">
            <h1 className="text-2xl font-semibold my-3 text-red-600">TODAY'S NEWS</h1>
            <section className="lg:flex gap-4">
                <div className="lg:w-2/3 ">


                    {/* item one */}
                    <div className=" lg:flex  lg:gap-3 items-center my-3">
                        <div className="lg:w-[40%]">
                            <img src="https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_244641208_xl-2015-1024x631.jpg" alt="" />
                        </div>
                        <div className=" lg:w-[60%] border border-1 border-red-600">
                            <p className="md:text-2xl w-full font-semibold">Lenovo Unveils IdeaPad Laptops, 5G Internet & a Snapdragon 8cx Chipset</p>
                            <div className="flex gap-2 items-center text-xs mb-5 md:text-sm">
                                <p>By Shane Doe</p>
                                <p> --- 28 March 24</p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    {/* item one */}
                    <div className=" lg:flex  lg:gap-3  gap-10 items-center my-3">
                        <div className="lg:w-[40%]">
                            <img src="https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_244641208_xl-2015-1024x631.jpg" alt="" />
                        </div>
                        <div className=" lg:w-[60%] border border-1 border-red-600">
                            <p className="md:text-2xl w-full font-semibold">Lenovo Unveils IdeaPad Laptops, 5G Internet & a Snapdragon 8cx Chipset</p>
                            <div className="flex gap-2 items-center text-xs mb-5 md:text-sm">
                                <p>By Shane Doe</p>
                                <p> --- 28 March 24</p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    {/* item one */}
                    <div className=" lg:flex  lg:gap-3  gap-10 items-center my-3">
                        <div className="lg:w-[40%]">
                            <img src="https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_244641208_xl-2015-1024x631.jpg" alt="" />
                        </div>
                        <div className=" lg:w-[60%] border border-1 border-red-600">
                            <p className="md:text-2xl w-full font-semibold">Lenovo Unveils IdeaPad Laptops, 5G Internet & a Snapdragon 8cx Chipset</p>
                            <div className="flex gap-2 items-center text-xs mb-5 md:text-sm">
                                <p>By Shane Doe</p>
                                <p> --- 28 March 24</p>
                            </div>
                        </div>
                    </div>

                    <hr></hr>

                </div>


                {/* sidebar */}


                <div className="lg:w-1/3 ">
                    <p>EDITOR'S PICKS</p>
                    <section>
                        <div className="mb-10">
                            <img src="https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_425000148_xl-2015-1024x672.jpg" alt="" />
                            <p className="md:text-xl w-full font-semibold">5 Things the Canon EOS R1 Needs to Compete With the Sony A1</p>
                        </div>


                        <div className="mb-10">
                            <img src="https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_425000148_xl-2015-1024x672.jpg" alt="" />
                            <p className="md:text-xl w-full font-semibold">5 Things the Canon EOS R1 Needs to Compete With the Sony A1</p>
                        </div>






                    </section>


                </div>
            </section>
        </div>
    );
};

export default News;