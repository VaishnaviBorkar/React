// Lets create a button component 
import react from "react"
const Button =(props)=>{
    return <button style={{backgrondColor:props.backgrondColor,color:props.color}}>{props.text}</button>
}
export default Button;