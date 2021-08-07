import Header from "./components/Header";
//css for button 
const buttonStyling={
  backgroundColor:"red",
  color:"white",
  padding:50
}
function App() {
  return (
    <div className="App">
      <div className="container">
      {/* <h1>hellow welcome to react</h1> */}
      {/* <Header title="myHeading" id={1}/>  */}
      {/* <Header title="secondaryprop"/>  */}
      {/* <Header/>  */}
      <Header/> 
      {/* inline css */}
      <button className="btn btn-primary" style={{padding:"20px"}}> ADD </button>
      <button style={buttonStyling}>Add</button>
 
      </div>
      </div>
  );
 
}


export default App;
