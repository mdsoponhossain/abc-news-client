
const Trending = () => {
    return (
        <div className="lg:w-[1200px] w-[90%] mx-auto mt-10 h-fit border">
            <h1 className="text-2xl font-semibold my-3 text-red-600">TRENDING</h1>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 h-fit">
                <div className="my-4 md:my-0">
                    <img className="h-[200px] w-full lg:w-[380px]" src="https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_348492764_xl-2015-1024x683.jpg" alt="" />
                    <p className="font-bold text-xl mt-4">Apple Patents a Periscopic Zoom Camera Lens for Future iPhone</p>
                </div>

                <div className="my-4 md:my-0">
                    <img className="h-[200px] w-full lg:w-[380px]" src="https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_24830151_xl-2015-scaled.jpg" alt="" />
                    <p className="font-bold text-xl mt-4">Apple Patents a Periscopic Zoom Camera Lens for Future iPhone</p>
                </div>

                <div className="my-4 md:my-0">
                    <img className="h-[200px] w-full lg:w-[380px]" src="https://smartmag.theme-sphere.com/tech-2/wp-content/uploads/sites/8/2021/01/Depositphotos_61682587_xl-2015-1024x740.jpg" alt="" />
                    <p className="font-bold text-xl mt-4">Apple Patents a Periscopic Zoom Camera Lens for Future iPhone</p>
                </div>
            </section>
        </div>
    );
};

export default Trending;