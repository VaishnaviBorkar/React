// Lets create a button component 
// destructuring props:only get requiered props as an argument
const Button =({color,text})=>{
    return <button style={{color:color}}>{text}</button>
}
export default Button;