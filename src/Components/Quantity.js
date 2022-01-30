/*import React,{Component} from "react";
import App from "../App";
//import './App.css';
class Quantity extends Component{
    constructor(props){
        super(props);
        this.state={values:1}
 
        this.increament=this.increament.bind(this);
 
        this.decreament=this.decreament.bind(this);

    }
    increament(){
        this.setState(prevState=>{value:++prevState.value});
    }
    decreament(){
        this.setState(prevState=>{value:prevState.value>0?--prevState.value:0});
    }
    
render(){
    return(
        <div>
            <p>
                set the Quantity
            </p>
            <div className="quantity-input">
                <button className="quantity-input_modifier quantity-input_modifier-left"
            onClick={this.decreament}>
                &mdash;
                </button>
                <input className="quantity-input_screen"type="text" value={this.state.value}
                readOnly/>
                <button className="quantity-input_modifier quantity-input_modifier-left"
                onClick={this.increament}>
                    &#xff0b;

                </button>

            </div>
        </div>
    );
}
}
ReactDOM.render(<Quantity/>,document.getElementById('Home'));
*/