import React, { Component } from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }

      
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
             {this.state.count}
            <button onClick={() => {this.increment()}}>Increment</button>
            </div>
        )
    }
}

export default Counter