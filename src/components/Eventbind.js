import React, { Component } from 'react';

class Eventbind extends Component{
    constructor(){
        super()
        this.state={
            msg:"click me"
        }

        // this.changeText = this.changeText.bind(this)
    }

    // changeText(){
    //     this.setState({
    //         msg:"chnaged value"
    //     })
    // }

    changeText = () =>{
        this.setState({
            msg:"chnaged value"
        })
    }
    render(){
        return(
           <div>
               <h1>Bind event example</h1>
               <h3>{this.state.msg}</h3>
               {/* <button onClick={this.changeText.bind(this)}>Change</button> */}
               {/* <button onClick={() => this.changeText()}>Change</button> */}
               <button onClick={this.changeText}>Change</button>
           </div>
        )
    }
}

export default Eventbind