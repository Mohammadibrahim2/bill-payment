import React, { useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";
import Table from "./Table";
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";


const PaymentTable=()=>{

     const [allbills,setallBillssetallBills]=useState({})
     const [value,setValue]=useState("")
    
     const [page,setPage]=useState({pageno:1})
    const [count,setCount]=useState({countno:0})

     const totalbills=allbills?.data?.result 

     const totalcount=allbills?.data?.count

     console.log(totalcount)

     console.log(allbills)
   
  
    
     const size=10
     let pages
     if(totalcount){
         pages= Math.ceil( totalcount/ size)
     }
     else{
     pages= Math.ceil( 12/ size)
     }
     
    
    
    const {isLoading ,refetch}=useQuery({
        queryKey:[size,page.pageno],
        queryFn:()=>fetch(`http://localhost:5000/allbills?size=${size}&page=${page.pageno}`)
        .then(res=>res.json())
        .then(data=>{
            setallBillssetallBills({data})
            setCount({data})
           
        })
     
 
    })

    const handlePage=(num)=>{
        setPage(prevState=>({
            ...prevState,
            pageno:num,
        }))
        refetch()
    }



    const handleSearch=(e)=>{
        
        e.preventDefault();
        console.log(value)
        fetch(`http://localhost:5000/billsdata?name=${value}&email=${value}&phone=${value}`)
        
        .then(res=>res.json())
        .then(data=>{
            setallBillssetallBills({data})
            console.log({data})
           })
           
  
    }

    const handleDelete=(id)=>{
        fetch(`http://localhost:5000/delete-billing/${id}`,
        {
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(deletedData=>{
            if(deletedData.deletedCount===1){
                toast.success("successfully deleted The selected information")
                
                refetch()
                
                

            }
            console.log(deletedData)
        })

    }
    
   
return(
    <div className="w-full h-auto">
       <div className="tableHeader bg-zinc-200 text-black font-semibold text-xl">

        <div className="flex flex-row justify-between items-center px-5 py-5">
            <Form onSubmit={handleSearch}>
                <input type="text" placeholder="Search" onChange={(e)=>setValue(e.target.value)} className="py-2 px-3 bg-white border-2 border-black"/>
                <button className="bg-zinc-800 text-white px-3 py-2 " type="submit">Search</button>
            </Form>

        <div>
        <label htmlFor="openModal" className="bg-blue-900 text-white px-3 py-2" >Add New Bill</label>
            
        </div>
        </div> 
       </div>

<Table openModal={"openModal"}></Table>

       {/* table:-- */}

<div className="w-full h-auto bg-white py-5">


    
<table className="table w-full ">
    
        <thead>
          <tr className="bg-white text-white">
          
            <th >Bill Id</th>
            <th> Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Payable Amount </th>
            <th>Action </th>

          </tr>
        </thead>
        <tbody>
        {totalbills&&
         totalbills.map((bill,i)=>   
          <tr bill={bill} key={i}>
            <th className=" text-white text-center">{i+1}</th>
            <td className=" text-white text-center">{bill.name}</td>
            <td className="text-white  text-center"> {bill.email}</td>
            <td className=" text-white text-center">{bill.phone}</td>
            <td className=" text-white text-center">{bill.payedAmount}</td>
            <td>
            <button><Link to={`/update/${bill._id}`}>Edit </Link></button>
            / <button onClick={()=>handleDelete(bill._id)}>Delete</button></td>
          </tr>
            )
        }
     
         
     
         
        </tbody>
      </table>

     
    </div>


     {/* table:-- */}
     <div className="text-center text-black  py-5  text-2xl pagination bg-white">
        <h2 className="text-2xl ">pageination</h2>
        <h2>Currnt page :{page.pageno+1}</h2>
        <div>

     
        {
            [...Array(pages).keys()].map(number=><button
                 className={page.pageno===number? "bg-blue-600 text-white px-4 py-2 mx-5":"bg-slate-200 text-blue-600 px-4 py-2 mx-5"}
           onClick={()=>handlePage(number)}
           key={number}>
                {number+1}
                
                

            </button>)
        }
           </div>
     </div>

    </div>
)
}
export default PaymentTable