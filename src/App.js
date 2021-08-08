
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
import { Component} from 'react';
import Person from "./components/Person"

class App extends Component{
  state = {
    person:[
    {name:"joy",age:20},
    {name:"git",age:29},
    {name:"niya",age:21}
  ],
  otherState:"otherState"
  }
  changeState =()=>{
// console.log("button clicked");
// change name state
//states are immutable (cantChange)
//use setState to change state in virtual DOM it will not change the actual dom. 
//setState only used in class bace component
this.setState({
  person:[
 {name:"vaishnavi",age:21},
  {name:"Mona",age:20},
  {name:"yogita",age:24}] 
  })
  }
  render(){
    return(
      <div>
      <h2>class base component</h2>
      <Person name="Ketki" age="45"/>
      <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
      <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
      <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
   <button onClick={this.changeState}>Change state</button>
      </div>
    )
  }
}
export default App;
