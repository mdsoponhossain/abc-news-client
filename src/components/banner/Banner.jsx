
const Banner = () => {
    return (
        <section className="h-[600px]">
            <div className="flex">
                <div className="w-2/3">
                    <img className="w-[calc(100%-5px)] h-[600px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfc_P3UMPKRLhoSQZUCtoSPu1chAXdWgFBcg&usqp=CAU" alt="" />
                </div>
                <div className="w-1/3">
                    <div className=" w-[calc(100%-5px)]">
                        <img className="w-full  h-[297.5px] pb-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfc_P3UMPKRLhoSQZUCtoSPu1chAXdWgFBcg&usqp=CAU" alt="" />
                    </div>
                    <div className="w-full">
                        <img className="w-[calc(100%-5px)] h-[297.5px] pt-1"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfc_P3UMPKRLhoSQZUCtoSPu1chAXdWgFBcg&usqp=CAU" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;