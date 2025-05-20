import  { useContext, useState } from "react";
import { EmailContext } from "../context/Email";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const { toggleEmailOpen,link } = useContext(EmailContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/save-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then(() => {
        window.location.href = link;
        toggleEmailOpen();
      })
      .catch((err) => console.error("Error saving email:", err));
  };

  return (
    <form onSubmit={handleSubmit} className="w-[380px] mt-2 flex flex-col justify-center items-center gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border-2 border-[#EEEDF2] focus:border-[#f45738] focus:outline-none rounded-[4px] p-2 w-full"
      />
      <button
        type="submit"
        className="mt-2 bg-[#f45738] hover:bg-[#CC3F23] hover:cursor-pointer text-white py-2 px-4 rounded w-full"
      >
        Submit and Go to Event
      </button>
    </form>
  );
};

export default EmailForm;
