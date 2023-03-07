import React ,{Component} from 'react'
import Hiimount from './Hiimount'

export default class Hellomount extends Component{
    constructor(props){
         super(props)

         this.state={
             name:"krushal"
         }
         console.log("helllo mount Constructor")
       }

       static getDerivedStateFromProps(props,state){
           console.log("hello mount get derived")
           return null
         }

         shouldComponentUpdate(nextprops,nextstate){
             console.log("hello shouldComponentUpdate")
             return true
         }

         getSnapshotBeforeUpdate(prevprops,prevstate){
             console.log("hello get snapshot before update")
             return null
         }

         componentDidUpdate(){
             console.log("hello componentDidUpdate")
         }

       componentDidMount(){
           console.log("Hello mount componentmount")
       }

       changename = () =>{
           this.setState({
               name : "karan"
           })
       }
       render(){
           console.log("hello mount render")
           return(
               <div>
                 <h1>{this.state.name}</h1>
                 <button onClick={this.changename}>Change</button>
                 <Hiimount/>
               </div>
               
           )
       }

}