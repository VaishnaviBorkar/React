import React from 'react'

const Person = ({name,age}) => {
    return (
        <div>
            <p className="lead">Hellow my name is {name} and i am {age} years old</p>
        </div>
    )
}

export default Person
