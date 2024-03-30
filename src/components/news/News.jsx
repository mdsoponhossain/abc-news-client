import { useEffect, useState } from "react";
import MainContent from "../../sharedComponents/mainContent/MainContent";

const News = () => {

    const [contents, setContents] = useState([]);
    useEffect(() => {
        fetch('./news/news.json')
            .then(res => res.json())
            .then(contents => setContents(contents))
    }, []);
    console.log(contents)




    return (
        <section className="border border-1 border-blue-500 p-3 md:p-2 lg:p-0 lg:w-[1200px] mx-auto">
            <div className="my-16 relative">
                <h1 className="text-2xl font-semibold my-3 text-red-600">TODAY'S NEWS</h1>
                <section className="lg:flex gap-4 h-fit  border-2 border-green-400 relative ">
                    <div className="lg:w-2/3 lg:sticky lg:top-4  border-2 border-yellow-400 h-fit  ">



                        {
                            contents?.map((content, index) => <MainContent
                                key={index} content={content}
                                imgStyles={'lg:w-[40%]'}
                                containerStyles={'lg:flex  lg:gap-3 items-center my-3 '}
                                titleStyles={"md:text-2xl w-full font-semibold"}
                                editorStyles={"flex gap-2 items-center text-xs mb-5 md:text-sm"}
                                textContainerStlyes={" lg:w-[60%] border border-1 border-red-600"}
                            ></MainContent>)
                        }

                    </div>


                    {/* sidebar */}


                    <div className="lg:w-1/3 lg:sticky lg:top-4  border-2 border-yellow-400 h-fit">
                        <p>EDITOR'S PICKS</p>
                        {
                            contents?.map((content, index) => <MainContent
                                key={index} content={content}
                                imgStyles={'lg:w-[100%]'}
                                containerStyles={"mb-10"}
                                titleStyles={"md:text-xl w-full font-semibold"}
                                editorStyles={"flex gap-2 items-center text-xs mb-5 md:text-sm"}
                                textContainerStlyes={"md:text-xl w-full font-semibold"}
                            ></MainContent>)
                        }

                    </div>
                </section>
            </div>
        </section>
    );
};

export default News;