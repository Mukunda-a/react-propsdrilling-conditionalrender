import React from 'react';
import { createContext } from 'react';
import A from './components/props drilling/A';

let studentContext=createContext()
let empContext = createContext()
function App() {


  return (

    <div>

    <studentContext.provider value="sheela">
   <empContext.provider value ={{ename:"Mukund",age:26,marks:420}}>

    <A/>
   </empContext.provider>

    </studentContext.provider>

    </div>
    
  );
}

export default App;
export {studentContext,empContext};