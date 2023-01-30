

import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Register=()=>{

const handleSignup=(e)=>{

    e.preventDefault()
    const name=e.target.name.value
    const email=e.target.email.value
    const password=e.target.password.value
    const user={name:name,email:email,password:password}
    console.log(user)
    fetch('http://localhost:5000/registration',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify(user)

    })
    
}
    
   
   
return(
    <div className="lg:h-[100vh] h-auto lg:w-[100%] w-full bg-slate-300 flex flex-col justify-center items-center">
        <div className="flex lg:flex-row flex-col-reverse justify-center items-center w-[80%] h-[80%]  bg-white rounded-lg  drop-shadow-2xl">
            <div className="bg-teal-600 text-white lg:w-1/3 w-full h-auto lg:h-full flex flex-col justify-center items-center rounded-l-lg">
                <h2 className="font-semibold text-3xl ">Welcome back</h2>
               <Link to="/login"><button className="text-teal-600 py-3 px-3 w-[200px] bg-white mx-auto rounded-full font-semibold my-3">Log  in</button></Link> 
            </div>
            <form onSubmit={(e)=>handleSignup(e)} className="flex flex-col justify-center items-center h-full lg:w-2/3 w-full  mx-auto text-center">
                <h2 className="my-4 font-bold text-black text-center text-3xl">Create Account</h2>
                <input type="text" name="name" placeholder="Full Name" className="w-2/3 mx-auto  my-3 py-3 rounded-xl bg-slate-300 text-black px-5"/>
                <input type="email" name="email"className="w-2/3 mx-auto  my-3 py-3  rounded-xl bg-slate-300 text-black px-5" placeholder="Email"/>

                <input type="password" name="password" className="w-2/3 mx-auto  my-3 py-3 rounded-xl bg-slate-300 text-black px-5"  placeholder="Password"/>

  
                <button
         className="bg-teal-600 py-3 px-3 w-[200px] text-white mx-auto rounded-full font-semibold lg:my-0 my-2"
         type="submit"
          >Sign in</button>


            </form>
        </div>

    </div>
)
}
export default Register