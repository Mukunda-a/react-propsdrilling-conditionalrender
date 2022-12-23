import React from "react";
import employeedata from "./employeedata";

function Employee({image,ename,age}) {

  console.log(image);


  return (
    <div>

    Name:{ename} <br/>
    Age:{age} <br/>
    Image:<img src= {image} height="200px" width="200px"
   <br/> <br />
    
    </div>
  )


export default Employee;