import Header from "./components/Header";
import Button from "./components/Button"
//css for button 
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Button color="red" backgroundColor="white" text="click me" padding="10px"/>
      {/* <button style={buttonStyling}>Add</button> */}
      </div>
      </div>
  );
 
}


export default App;
