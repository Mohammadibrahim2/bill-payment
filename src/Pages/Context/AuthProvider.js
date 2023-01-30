import React, { children, createContext, useEffect, useState } from "react";

export const AuthContext=createContext()

const AuthProvider=({children})=>{

    const [user,setUser]=useState({})






    const authinfo={}

    return(
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    )

    


}
export default AuthProvider