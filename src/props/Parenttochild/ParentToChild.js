import React, { useState } from "react";
import Child from "./Child";
export default function Parent (){
    const [data, setData] = useState("")
    const parentToChild = () => {
        setData("This is data from Parent Component to the Child Component.");
      }
 return(
    <div style={{textAlign: "center"}}>
        <Child parentToChild={data}/>
        <div>
            <button onClick={parentToChild}>click me</button>
        </div>
    </div>
 );
}
