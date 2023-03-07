import React from 'react'

function Person(props){
    return(
        <div>
            <h1>hii i'm {props.person.name} lives in {props.person.address} and my role is  {props.person.role}</h1>
        </div>
    )
}

export default Person