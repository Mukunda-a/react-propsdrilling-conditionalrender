import React from 'react'

// function Students(props) {

//     console.log(props.sname);
//   return (
//     <div>
//       <h1> sname={props.sname}</h1>
//       <h1> age={props.age}</h1>
//       <h1> marks={props.marks} </h1>
//       <hr />
//     </div>
//   )
// }
function Students({sname,age,marks}) {

    console.log(sname,age,marks);
  return (
    <div>
      <h1> sname={sname}</h1>
      <h1> age={age}</h1>
      <h1> marks={marks} </h1>
      <hr />
    </div>
  )
}



export default Students
