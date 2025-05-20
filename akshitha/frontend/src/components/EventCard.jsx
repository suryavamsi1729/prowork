import { use, useContext, useEffect, useState } from "react";
import { EmailContext } from "../context/Email";
const EventCard = ({ event }) => {
    const [focus,setfocus] = useState(false);
    const { isEmailOpen,toggleEmailOpen,setLink } = useContext(EmailContext);
    useEffect(() => {
        if (!isEmailOpen) {
            setfocus(false);
        } 
    }, [isEmailOpen]);
    const handleButtonClick = ()=>{
        setLink(event.link);
        setfocus(!focus);
        toggleEmailOpen()
    }
  return (
    <div className={`rounded-[16px]  transition-all duration-300 ease-in-out flex flex-col justify-start items-center ${isEmailOpen&focus?"border-2 border-[#F05537] shadow-xl":"border-2 border-transparent hover:shadow-lg"}`}>
        <img
            src={event.image}
            alt={event.name}
            className="w-full h-36 object-cover rounded-t-2xl rounded-b-sm" />
        <div className="w-full grow flex flex-col justify-between items-start gap-4  py-2 px-4 bg-white rounded-b-2xl pb-4">
            <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
                <h3 className=" line-clamp-2 text-lg font-medium text-[#3A3248]">{event.name}</h3>
                <p>{event.date}</p>
            </div>
            <button
                onClick={handleButtonClick}
                className="bg-linear-to-br from-[#F05537] to-[#CC3F23] text-white py-2 px-4 rounded hover:cursor-pointer transition-all duration-300 ease-in-out"
            >
                Get Tickets
            </button>
        </div>
    </div>
  );
};

export default EventCard;
