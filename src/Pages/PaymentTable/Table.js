import React from "react";
import { toast } from "react-hot-toast";
import { Form } from "react-router-dom";

const Modal=({openModal})=>{

    const handleSubmit=(e)=>{
        e.preventDefault()
  const name=e.target.name.value
  const email=e.target.email.value
  const phone=e.target.phone.value
  const payeamount=e.target.payeamount.value
 const addedDate=new Date()
  const addedData={
    payedAmount:payeamount,
    name:name,
    phone:phone,
    email:email,
    date:addedDate
    }
    fetch("http://localhost:5000/add-billing",{
      
    method:"POST",
    headers:{
        "Content-Type":"application/json",

    },
    body:JSON.stringify(addedData)

})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.acknowledged===true){
        toast.success("successfull added your data")

    }
    })



    }
return(
    <div>


{/* Put this part before </body> tag */}
<input type="checkbox" id={openModal} className="modal-toggle" />
<div className="modal ">
  <div className="modal-box relative bg-white text-black">
    <label htmlFor={openModal} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <Form onSubmit={handleSubmit} className="">
        <h2 className="my-2 text-xl text-black font-semibold">Information</h2>
        <input type="text" placeholder="Full Name" name="name" className=" bg-white text-black border-2 border-black w-[80%] px-5 py-2"/>
        <input type="email" placeholder="Email" name="email" className=" bg-white text-black border-2 border-black w-[80%] my-2 px-5 py-2" />
        <input type="text" placeholder="Phone Number" name="phone" className=" bg-white text-black border-2 border-black w-[80%] my-2 px-5 py-2"/>
        <input type="text" placeholder="‘Payable Amount " name="payeamount" className=" bg-white text-black border-2 border-black w-[80%] px-5 py-2"/>
        <button type="submit" className="px-4 py-2 bg-black text-white block my-5">Submit</button>
    </Form>
    
  </div>
</div>

    </div>
)
}
export default Modal