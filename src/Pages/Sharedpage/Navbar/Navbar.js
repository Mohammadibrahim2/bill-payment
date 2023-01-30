import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{

    const menu=[
        <Link to="/"><li>Home</li></Link>,
        <Link to="/table"><li>PaymentTable</li></Link>,
        <Link to="/login"><li>Log in</li></Link>,
        ,
    
    ]
return(
    <div className="w-full h-auto">
        <div className="flex flex-row justify-between items-center bg-teal-600 text-white py-5 px-5">
            <div className="text-white text-2xl form-control">Bill Payment</div>
            <div className="hidden lg:flex flex-row justify-around items-center list-none w-1/2">
                {menu}
            </div>
            <div className="lg:hidden absolute top-[50px] bg-teal-600 left-1 flex flex-col justify-between items-center list-none w-full h-[200px]">
                {menu}
            </div>

        </div>
        
    </div>
)
}
export default Navbar