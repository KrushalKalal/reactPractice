import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";

class HoverCounter extends Component{
    // constructor(){
    //     super()
    //     this.state={
    //         count:0
    //     }
    // }

    // incrementCount = ( ) =>{
    //     this.setState(prevState =>{
    //          return {count : prevState.count + 1}
    //     })
    // }
    render(){
        const {count,incrementCount} = this.props
        return(
             <h2 onMouseOver={incrementCount}>{this.props.name} Clicked {count} times</h2>
        //      <h2 onMouseOver={this.incrementCount}>{this.props.name} Clicked {this.state.count} times</h2>
         )
    }
}

export default UpdatedComponent(HoverCounter,10);