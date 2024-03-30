import { useLoaderData, useParams } from "react-router-dom";

const ContentDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    console.log(data, 112233, id);
    const [targetedData] = data.filter(n => n.id == id);
    console.log(targetedData)
    return (
        <div className="lg:w-[1200px] mx-auto my-3 p-3">
            <h1 className=" text-xl my-3 md:text-5xl font-bold w-full text-justify">{targetedData?.title}</h1>
            <p className="md:my-10 text-justify">{targetedData?.caption}</p>
            <div className="flex gap-3 items-center my-5">
                <img className="w-8 h-8 rounded-2xl" src={targetedData?.editorImg} alt="" />
                <p>{targetedData?.editorAndDate}</p>
            </div>
            <img className="w-full" src={targetedData?.img} alt="" />
            <p className="text-justify mt-4 md:my-10 w-full">{targetedData?.descritption}</p>
        </div>
    );
};

export default ContentDetails;