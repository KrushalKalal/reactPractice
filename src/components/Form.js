
import React, { Component } from "react";
import './Form.css'

// const style = {
//     fontSize:"16px",
//     color:"red"
// }

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            userName:'',
            userEmail:''
        }
    }

    changeUsername = (e) =>{
        this.setState({
            userName:e.target.value
        })
    }

    changeHandle = (e)  =>{
        const name = e.target.name
        const value = e.target.value
        this.setState({
            ...this.state,
            [name] : value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(`${this.state.userName} ${this.state.userEmail}`)
    }
    render(){
        return(
            <div>
                 <form onSubmit={this.handleSubmit}>
                 <div>
                   {/* <label style={{color:"red" ,fontSize:"20px"}}>UserName:</label> */}
                   <label>UserName:</label>
                   <input type="text" 
                   name="userName"
                   value={this.state.userName}
                   onChange={this.changeHandle}
                   required />
                 </div>

                 <div>
                   <label>Email:</label>
                   <input type="email" 
                   name="userEmail"
                   value={this.state.userEmail}
                   onChange={this.changeHandle}/>
                 </div>
               
                 <button type="submit">Submit</button>

               </form>
               <div>
                   <h1>{this.state.userName}</h1>
                   <h1>{this.state.userEmail}</h1>
               </div>
            </div>
         
        )
    }
}

export default Form