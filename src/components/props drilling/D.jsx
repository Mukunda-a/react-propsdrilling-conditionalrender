import React from "react";
import {studentContext,empContext} from "../../App"


function D(){
    return (
        <div>
            <studentContext.Consumer>
                {
                    (pdata)=>{
                        return(
                            <empContext.Consumer>
                                {
                                    (edata)=>{
                                         return(
                                         <div>
                                            <h1>i am componetn d my name is {pdata}</h1>
                                            <h1>{edata.ename}{edata.age}{edata.marks}</h1>
                                         </div>)
                                    }
                                }
                            </empContext.Consumer>
                        )
                    }
}
            </studentContext.Consumer>
        </div>
     );
}

export default D;