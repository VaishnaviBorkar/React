import React from 'react'

const Person = ({name,age,myclick,change}) => {
    return (
        <div>
     <p onClick={myclick} className="lead" >Hellow my name is {name} and i am {age} years old</p>
       <input onChange={change} type="text" placeholder="Enter Your Name" value={name}/>
               </div>
    )
}

export default Person
