import { useContext, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { EmailContext } from "../context/Email";
import { useNavigate } from "react-router-dom";


const MainLayout = ({children}) => {
    const navigate = useNavigate();
    const { isEmailOpen,serchEvent,setSerchEvent } = useContext(EmailContext);
    const [search,changeSearch] = useState(serchEvent);
    const handelChange  = (e)=>{
        changeSearch(e.target.value);
    }



    return (
        <div className="w-screen min-h-screen flex flex-col justify-start items-center ">
            <header className="sticky top-0 left-0 right-0 w-full h-auto px-16 py-4 flex flex-row justify-start items-center gap-6 border-b border-[#EEEDF2] bg-[#FFFFFF]">
                <h1 className="w-auto h-auto text-xl text-[#f05a3b] font-bold">EventNest</h1>
                <div className="grow h-auto flex flex-row justify-center items-center ">
                    <div className="relative w-auto h-auto flex flex-row justify-center items-center">
                        <input
                            type="text"
                            value={search}
                            onChange={handelChange}
                            placeholder="Search for events..."
                            className="w-[440px] h-[44px] text-[#585163] border border-[#EEEDF2] bg-[#f8f7faad] focus:bg-[#f8f7fa] focus:shadow-lg shadow-gray-300/30 focus:outline-none rounded-full p-2 pl-4 pr-12"
                        />
                        <button onClick={()=>{setSerchEvent(search)}}  className="absolute right-[6px] w-[32px] h-[32px] flex flex-col justify-center items-center rounded-full bg-[#e85032] hover:bg-[#CC3F23] hover:cursor-pointer">
                            <IoSearch className="text-white text-lg" />
                        </button>
                    </div>
                </div>
                <div className="w-auto h-auto flex flex-row justify-end items-center space-x-4">
                    <button onClick={()=>{navigate("/signin")}} className="w-[100px] h-auto rounded-full px-4 py-2 text-[#857e8e] hover:text-[#57535b] hover:bg-[#F8F7FA]  hover:cursor-pointer ">
                        Sign In
                    </button>
                    <button onClick={()=>{navigate("/signup")}} className="w-[100px] h-auto rounded-full px-4 py-2 text-[#857e8e] hover:text-[#57535b] hover:bg-[#F8F7FA]  hover:cursor-pointer">
                        Sign Up
                    </button>
                </div>
            </header>
            <main className="w-full grow px-28 pt-12 flex flex-col justify-start items-center">
                {
                   children 
                }
            </main>
            <footer className="w-full h-auto py-6 bg-[#1E0A3B]">
                <p className="w-full h-auto text-center text-[#DBDAE3]">&copy; 2025 EventNest</p>
            </footer>
        </div>
    );
}

export default MainLayout;