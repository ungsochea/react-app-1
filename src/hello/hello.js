import React,{Component} from 'react';
import './hello.css';

const Hello=(props)=>{
    return(
        <div className="f1 tc">
        <h1>Hello World</h1>
        <p>Welcome to {props.greeting}</p>
    </div>
    );
}
// class Hello extends Component{
//     render(){
//         return(
//             <div className="f1 tc">
//             <h1>Hello World</h1>
//             <p>Welcome to {this.props.greeting}</p>
//         </div>
//         );    
        
//     }
// }

export default Hello;