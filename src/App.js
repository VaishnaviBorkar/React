
// import Header from "./components/Header";
// // import Button from "./components/Button"
// import Tasks from "./components/Tasks"
// import "./App.css"
// //css for button 
// function App() {
//   return (
//     <div className="App">
//       <div className="container">
//         <Header/>
//         <Tasks/>
      //   {/* <Button color="red" backgroundColor="white" text="click me" padding="10px"/> */}
      // {/* <button style={buttonStyling}>Add</button> */}
      // {/* </div>
      // </div>
  // );
 
// } */}
//State and state management 
// 1. using class
// import { Component} from 'react';
// import Person from "./components/Person"

// class App extends Component{
//   state = {
//     person:[
//     {name:"joy",age:20},
//     {name:"git",age:29},
//     {name:"niya",age:21}
//   ],
//   otherState:"otherState"
//   }
//   changeState =()=>{
// console.log("button clicked");
// change name state
//states are immutable (cantChange)
//use setState to change state in virtual DOM it will not change the actual dom. 
//setState only used in class bace component
// this.setState({
//   person:[
//  {name:"vaishnavi",age:21},
//   {name:"Mona",age:20},
//   {name:"yogita",age:24}] 
//   })
//   console.log(this.state.person);
  //values changed in viewport only not in actual Dom.
  // }

  // render(){
  //   return(
  //     <div>
  //     <h2>class base component</h2>
  //     <Person name="Ketki" age="45"/>
  //     <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
  //     <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
  //     <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
  //  <button onClick={this.changeState}>Change state</button>
  //     </div>
  //   )
  
  // }

// }
// export default App;
//function based states
// we use useState hook to create function based component.it takes 2 argument as a 
//array of the initial state and the set function(used to chane the value).
//it does not edit the state.it deletes the state and create a ne state passed in setstate function.
import React from 'react'
import Person from './components/Person'
import { useState } from 'react'
const App = () => {
  const [personstate,changepersonState]=useState(
    {
      person:[
      {name:"vaish",age:20},
      {name:"mona",age:21},
      {name:"harita",age:10}

    ],
    otherState:"otherstate"
  }
  )
  console.log(personstate);

  const changeState=()=>{
    changepersonState({
      person:[
        {name:"vaishnavi",age:20},
        {name:"MonaGupta",age:21},
        {name:"HaritaShelake",age:10}
  
      ]

    })
  }
  return (
    <div>
      <Person name={personstate.person[0].name} age={personstate.person[0].age}/>
      <Person name={personstate.person[1].name} age={personstate.person[1].age}/>
      <Person name={personstate.person[2].name} age={personstate.person[2].age}/>
      <button onClick={changeState}>Chane state with function</button>
    </div>
    
  )
}

export default App
