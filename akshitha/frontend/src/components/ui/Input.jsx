import { Eye,EyeOff } from 'lucide-react';
import usePasswordToggle from '../../hooks/usePasswordToggle';
import { useRef } from 'react';
const Input = ({inputDetailes})=>{
    return(
        <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
            <label htmlFor={inputDetailes.id} className="w-full h-auto flex flex-row justify-start items-start gap-2">
                <span className="w-auto h-auto text-[#38364F] font-rubik text-sm/[16px] font-normal">{inputDetailes.name}</span>
            </label>
            <input type={inputDetailes.type} id={inputDetailes.id} className={` w-full h-auto py-2 px-4 bg-[#F8F7FA] rounded-[8px] border-[1.5px] border-[#DBDAE3] focus:outline-none focus:border-[#D1410B] focus:bg-transparent focus:ring-1 focus:ring-[#D1410B] font-rubik text-lg/[24px] font-normal text-[#1E0A3B] `} placeholder={inputDetailes.placeholder} required/>           
        </div>
    )
}
const PswInput = ({inputDetailes})=>{
    const pwdref = useRef(null);
    const { passwordType, eyeIcon, togglePasswordVisibility } = usePasswordToggle();
    return(
        <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
            <label htmlFor={inputDetailes.id} className="w-full h-auto flex flex-row justify-start items-start gap-2">
                <span className="w-auto h-auto text-[#38364F] font-rubik text-sm/[16px] font-normal">{inputDetailes.name}</span>
            </label>
            <div className="group relative w-full h-full flex flex-col justify-center items-center">
                <input ref={pwdref} type={passwordType} id={inputDetailes.id} className={` w-full h-auto py-2 bg-[#F8F7FA] rounded-[8px] border-[1.5px] border-[#DBDAE3] focus:outline-none focus:border-[#D1410B] focus:bg-transparent focus:ring-1 focus:ring-[#D1410B] font-rubik text-lg/[24px] font-normal text-[#1E0A3B] px-4 pr-14 `} placeholder={inputDetailes.placeholder} required />           
                <div className={`absolute right-3 w-7 h-7 flex flex-row justify-center items-center`}>
                    {
                        passwordType=="password"?
                            <Eye onClick={()=>{
                                togglePasswordVisibility();
                                pwdref.current.focus();
                            }} className='text-[#A9ABB1] group-focus-within:text-[#38364F] hover:cursor-pointer'/>:
                            <EyeOff onClick={()=>{
                                togglePasswordVisibility();
                                pwdref.current.focus();
                            }} className='text-[#A9ABB1] group-focus-within:text-[#38364F] hover:cursor-pointer'/>
                    }
                </div>
            </div>
        </div>
    )
}

export  {Input,PswInput};