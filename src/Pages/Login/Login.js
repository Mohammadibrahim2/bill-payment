

import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Login=()=>{
    const {setUser}=useContext(AuthContext)

const handleSignup=(e)=>{

    e.preventDefault()
   
    const email=e.target.email.value
    const password=e.target.password.value
    const user={email:email,password:password}
    console.log(user)
    setUser(user)
    fetch('http://localhost:5000/login',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify(user)

    })
   
    
    
}
    
   
   
return(
    <div className="lg:h-[100vh] h-auto w-full bg-slate-300 flex flex-col justify-center items-center">
        <div className="flex lg:flex-row-reverse flex-col-reverse justify-center items-center lg:w-[80%] w-full h-auto lg:h-[80%]  bg-white rounded-lg  drop-shadow-2xl">
            <div className="bg-teal-600 text-white lg:w-1/3 w-full  lg:h-full h-auto flex flex-col justify-center items-center rounded-l-lg">
                <h2 className="font-semibold text-3xl ">Welcome back</h2>
                <Link to="/register"><button className="text-teal-600 py-3 px-3 w-[200px] bg-white mx-auto rounded-full font-semibold my-3">Sign  in</button></Link>
            </div>
            <form onSubmit={(e)=>handleSignup(e)} className="flex flex-col justify-center items-center h-full w-2/3 mx-auto text-center bg-white">
                <h2 className="my-4 font-bold text-black text-center text-3xl">Log in</h2>
               
                <input type="email" name="email"className="w-2/3 mx-auto  my-3 py-3  rounded-xl bg-slate-300 text-black px-5" placeholder="Email"/>

                <input type="password" name="password" className="w-2/3 mx-auto  my-3 py-3 rounded-xl bg-slate-300 text-black px-5"  placeholder="Password"/>

  
                <button
         className="bg-teal-600 py-3 px-3 w-[200px] text-white mx-auto rounded-full font-semibold"
         type="submit"
          >Log  in</button>

s
            </form>
        </div>

    </div>
)
}
export default Login