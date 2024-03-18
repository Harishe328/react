import ReactDOM from "react-dom";
import { Component } from "react";
class Container extends Component{
    state={
        count:0
    };
    increment=()=>{ 
        this.setState({count: this.state.count+1})
    };
    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>increment</button>
            </>
            );
    }
}
export default Container