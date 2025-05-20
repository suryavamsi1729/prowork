import { createContext, useState } from 'react';

const EmailContext = createContext({
 loading:true,
 setLoading:()=>{},
 isEmailOpen: 0,
 setIsEmailOpen: () => {},
 link:"",
 setLink: () => {},
 serchEvent:"",
 setSerchEvent: () => {},
});

const EmailProvider = ({ children }) => {
    const [isEmailOpen, setIsEmailOpen] = useState(false);
    const [link, setLink] = useState("");
    const [serchEvent, setSerchEvent] = useState("");
    const [loading,setLoading] = useState(true);
    const toggleEmailOpen = () => {
        setIsEmailOpen((prev) => !prev);
    };

 return (
   <EmailContext.Provider value={{ isEmailOpen, toggleEmailOpen, link, setLink,serchEvent,setSerchEvent,loading,setLoading }}>
     {children}
   </EmailContext.Provider>
 );
};

export { EmailContext, EmailProvider };