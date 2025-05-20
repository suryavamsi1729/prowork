import { useState, useEffect, useContext } from "react";
import EventCard from "./EventCard";
import { EmailContext } from "../context/Email";
import Spinner from "./Spinner";

const EVENTS_PER_PAGE = 12;

const EventList = () => {
  const [filerload,setFilterLoad] = useState(true); 
  const { serchEvent,loading,setLoading } = useContext(EmailContext);
  const [allEvents, setAllEvents] = useState([]);     // All fetched events
  const [filteredEvents, setFilteredEvents] = useState([]); // After search filtering
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    console.log(loading);
    fetch("http://localhost:8000/events")
      .then((response) => response.json())
      .then((data) => {
        setAllEvents(data);
        setFilteredEvents(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = allEvents.filter((event) =>
      event.name?.toLowerCase().includes(serchEvent.toLowerCase())
    );
    setFilteredEvents(filtered);
    setCurrentPage(1); // Reset to page 1 when search changes
  }, [serchEvent, allEvents]);

  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const currentEvents = filteredEvents.slice(startIndex, startIndex + EVENTS_PER_PAGE);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  console.log(loading);
  return (
    <div className="w-full grow flex flex-col justify-between items-start">
        {
            loading ?
                <div className="w-full h-auto flex flex-row justify-center items-center gap-4">
                    <div className="w-16 h-16">
                        <Spinner/>
                    </div>
                    <p className="text-4xl font-semibold text-[#E85032]">Loading...</p>
                </div>:
                <>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {
                            
                                
                                currentEvents.length!=0?
                                    currentEvents.map((event, index) => (
                                    <EventCard key={index} event={event} />
                                    )):
                                    <h1 className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 h-auto mt-4 text-center text-4xl font-semibold text-[#F05A3A]">NO  EVENTS  FOUND</h1>
                        }
                    </div>
                    <div className="w-full h-auto flex justify-end items-center mt-12 mb-8 space-x-4">
                        <button
                        onClick={goToPrevPage}
                        disabled={currentPage === 1}
                        className="w-[100px] h-auto rounded-full px-4 py-2 text-[#857e8e] hover:text-[#57535b] bg-[#F8F7FA] hover:bg-[#f5f2fa] hover:cursor-pointer disabled:cursor-no-drop disabled:opacity-50"
                        >
                        Previous
                        </button>
                        <span className="text-[#e86950]">
                        Page <span className="text-[#CC3F23] font-semibold">{currentPage}</span> of {totalPages}
                        </span>
                        <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className="w-[100px] h-auto rounded-full px-4 py-2 text-[#857e8e] hover:text-[#57535b] bg-[#F8F7FA] hover:bg-[#f5f2fa] hover:cursor-pointer disabled:cursor-no-drop disabled:opacity-50"
                        >
                        Next
                        </button>
                    </div>
                </>
        }
      
    </div>
  );
};

export default EventList;
