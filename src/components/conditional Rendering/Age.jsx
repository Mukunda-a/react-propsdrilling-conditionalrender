import React from 'react'

function Age() {

    let Age=parseInt(prompt("Enter your Age"))

    if (Age>=18){
  return (
    <div>
      <h1 style={{color:green}}>Eligible for Voting</h1>
    </div>
  )
    }
    else{

        return(
            <div>
                
            </div>
        )
    }
}

export default Age
