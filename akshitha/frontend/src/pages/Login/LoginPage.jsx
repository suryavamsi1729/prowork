import { Input,PswInput } from "../../components/ui/Input";
import { useNavigate } from "react-router-dom";
const LoginPage = ()=>{
    const navigate = useNavigate();
    const formData = [
        {
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
            name: "email",
            required: true,
        },
        {
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
            name: "password",
            required: true,
        }
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/")
    };
    return(
        <div className="w-screen h-screen flex flex-row justify-center items-center">
            <div className="relative w-5/12 h-screen bg-[url(/authbg.svg)] flex flex-col justify-center items-center gap-4 px-16">
                <h1 className="absolute top-16 w-full h-auto text-2xl font-semibold text-[#FF5E31] px-16">EventNest</h1>
                <div className="w-full h-auto flex flex-col justify-center items-center gap-14 px-6">
                    <h2 className="w-full h-auto text-6xl font-bold text-[#38364F]">Login</h2>
                    <form onSubmit={handleSubmit} className="w-full h-auto flex flex-col justify-start items-start gap-8">
                        <div className="w-full h-auto flex flex-col justify-center items-center gap-6">
                        <Input inputDetailes={{ id: formData[0].name, name: formData[0].label, type: formData[0].type, placeholder: formData[0].placeholder }} />
                        <PswInput inputDetailes={{ id: formData[1].name, name: formData[1].label, type: formData[1].type, placeholder: formData[1].placeholder }} />
                        </div>
                        <div className="w-full h-auto flex flex-row justify-end items-center">
                            <p id="forgetPassword"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        // handle forgot password
                                        console.log("Forgot Password Clicked");
                                    }
                                }}
                            className="w-auto h-auto text-right text-lg text-[#707287] font-normal font-rubik hover:cursor-pointer hover:text-[#D1410B] focus:border-none focus:outline-0 focus:ring-0 focus:text-[#D1410B]">
                                Forget Password
                            </p>
                        </div>
                        <button id="loginBtn" type="submit" className="w-full h-auto px-[86px] py-[10px] bg-[#d1400beb] rounded-[8px] font-rubik font-normal text-white text-lg/[18px] hover:cursor-pointer hover:bg-[#D1410B] focus:bg-[#D1410B] focus:outline-[1.5px] focus:outline-offset-2 focus:outline-[#D1410B]">
                            <p className="p-0 text-inherit">Login</p>
                        </button>
                    </form>
                </div>
            </div>
            <div className="w-7/12 h-screen bg-[url(/img3.webp)] bg-cover"></div>
        </div>
    )
}

export default LoginPage;