import { createContext, useState } from "react";
const context=createContext();

import React from 'react'

export default function Store(props) {
    const [data,setdata]=useState();
    const [dat2,setdata2]=useState();
    const [dat3,setdata3]=useState();
    return(
  <context.Provider value={{}}>
    {props.children}
  </context.Provider>
    )
  
}
