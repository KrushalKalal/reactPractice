import React,{Component} from 'react'

class Helloclass extends Component{
constructor(props){
    console.log(props)
    super()
    this.state = {
        msg: "state example"
    }

}
   changemsg(){
       this.setState({
           msg:"state value change"
       })
   }


    render(){
      return (
          <div>
                 <h2>First Class Component {this.props.name}</h2>
                 <h3>{this.state.msg}</h3>
                 <button onClick={() => this.changemsg()}>Change</button>
          </div>
    
      )}
}

export default Helloclass