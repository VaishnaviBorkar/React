import { Component } from "react/cjs/react.production.min";
import  PropTypes from 'prop-types';
// genwerete component
// function base component
const Header =(props)=>{
    return(
        // <div>
        //     {/* <h1 className="header">TaskTracker </h1> */}
        //     <h2 className="title">{props.title} {props.id}</h2>
        // </div>
        //react fragment <> child elements </>
        <h1>Task Tracker</h1>
    );
   
}
Header.defaultProps={
    title:"default Props",
    id:5
}
Header.propTypes={
    title:PropTypes.string.isRequired, //validation isrequired
    id:PropTypes.number
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