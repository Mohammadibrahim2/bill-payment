import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import LogIn from "../Login/Login";
import PaymentTable from "../PaymentTable/PaymentTable";
import Register from "../Register/Register";
import UpdateData from "../Update/Update";
export const routes=createBrowserRouter([


    {
        path:"/",
        element:<Main></Main>,
        children:[

            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/table",
                element:<PaymentTable></PaymentTable>
            },
            {
                path:"/update/:id",
                loader:({params})=>fetch(`http://localhost:5000/update-billing/${params.id}`),
                element:<UpdateData></UpdateData>
            },
            {
                path:"/register",
              
                element:<Register></Register>
            },
            {
                path:"/login",
              
                element:<LogIn></LogIn>
            },
        ]
    }
])