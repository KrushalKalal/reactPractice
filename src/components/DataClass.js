import React from "react";

export default function DataClass(props){
     console.log(props)
    return(
            <React.Fragment>
             <h2> {props.listsData.id} {props.listsData.brand} {props.listsData.discount} {props.listsData.form}</h2>
            </React.Fragment>
            
    )
}

