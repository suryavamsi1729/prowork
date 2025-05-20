import { useState } from "react";

const usePasswordToggle = () =>{
    const [passwordType, setPasswordType] = useState("password");
    const [eyeIcon, setEyeIcon] = useState("Eye");

    const togglePasswordVisibility = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            setEyeIcon("EyeOff");
        } else {
            setPasswordType("password");
            setEyeIcon("Eye");
        }
    };

    return { passwordType, eyeIcon, togglePasswordVisibility };
}

export default usePasswordToggle;