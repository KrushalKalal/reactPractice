import React from "react";
import Person from "./Person";

export function Listing(){

    const persons=[
        {
            id:1,
            name:"Karan",
            address:"Ghuma",
            role:"Admin"
        },
        {
            id:2,
            name:"Krish",
            address:"Bopal",
            role:"Users"
        },
        {
            id:3,
            name:"Kavya",
            address:"Manipur",
            role:"Employee"
        }
    ]

    // const names = ['karan','krish','rahul']
   return(
            persons.map(person => <Person key={person.id} person={person}/>)
            // names.map(name=>
            //     <h2>{name}</h2>
            // )

   )
}