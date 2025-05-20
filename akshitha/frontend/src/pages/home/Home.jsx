import EmailForm from "../../components/EmailForm";
import EventList from "../../components/EventList";
import { EmailContext } from "../../context/Email";
import MainLayout from "../../layout/MainLayout";
import { useContext } from "react";

const Home = ()=>{
    const {isEmailOpen} = useContext(EmailContext);
    return(
        <MainLayout>
            <>
                <EventList/>
                <div className={`fixed bottom-6 right-4 w-auto h-auto px-6 py-4 rounded-2xl rounded-br-none border border-[#EEEDF2] bg-[#FFFFFF] shadow-lg ${isEmailOpen?"scale-100":"scale-0"} transition-transform duration-300 ease-in-out `}>
                    <EmailForm/>
                </div>
            </>
        </MainLayout>
    )
}

export default Home;