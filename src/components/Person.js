import React from 'react'

const Person = ({name,age,myclick}) => {
    return (
        <div>
            <p onClick={myclick} className="lead" >Hellow my name is {name} and i am {age} years old</p>
        </div>
    )
}

export default Person
