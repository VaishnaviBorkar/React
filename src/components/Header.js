import { Component } from "react/cjs/react.production.min";
// genwerete component
// function base component
const Header =(props)=>{
    return(
        <div>
            {/* <h1 className="header">TaskTracker </h1> */}
            <h2 className="title">{props.title} {props.id}</h2>
            
        </div>
    );
}
Header.defaultProps={
    title:"default Props",
    id:5
}
// export default Header
// class Header extends Component{
//     render()
//     {
//         return(
//             <header>
//                 <h1>class based component</h1>
//            </header>
//         )  
// }
// }
export default Header