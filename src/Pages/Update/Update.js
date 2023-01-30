import React from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
const UpdateData=()=>{


    const updatenedd=useLoaderData()
    console.log(updatenedd._id)
    const handleSubmit=(e)=>{

    e.preventDefault()
    const updatedname=e.target.name.value
    const updatedemail=e.target.email.value
    const updatedphone=e.target.phone.value
    const updatedamount=e.target.amount.value
    const updatedid=e.target.id.value
  let updatedInfo={name:updatedname,email:updatedemail,phone:updatedphone,payamount:updatedamount,updatedid:updatedid}

console.log(updatedInfo)
        fetch(`http://localhost:5000/update-billing/${updatedid}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
    
            },
            body:JSON.stringify(updatedInfo)
    
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged===true ){
                toast.success("your data is successfully updated")
            }
        })
       
    

    }
    return(
        <div className="flex flex-col justify-center items-end w-full bg-white">
         <form onSubmit={(e)=>handleSubmit(e)} className="w-1/2 mx-auto">
        <h2 className="my-2 text-xl text-black font-semibold">Information</h2>
       
        <input type="text" placeholder="Full Name" name="name" className=" bg-white text-black border-2 border-black w-[80%] px-5 py-2"/> 
        <input type="text" placeholder="" defaultValue={updatenedd._id} readOnly  name="id" className=" bg-white text-black border-2 border-black w-[80%] px-5 py-2"/>
        <input type="email" placeholder="Email" name="email" className=" bg-white text-black border-2 border-black w-[80%] my-2 px-5 py-2" />
        <input type="text" placeholder="Phone Number" name="phone" className=" bg-white text-black border-2 border-black w-[80%] my-2 px-5 py-2"/>
        <input type="text" placeholder="‘Payable Amount" name="amount" className=" bg-white text-black border-2 border-black w-[80%] px-5 py-2"/>
        <button type="submit" className="px-4 py-2 bg-black text-white block my-5">Submit</button>
    </form>

        </div>
    )
}
export default UpdateData