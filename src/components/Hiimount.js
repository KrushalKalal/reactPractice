import React ,{Component} from 'react'


export default class Hellomount extends Component{
    constructor(props){
         super(props)

         this.state={
             name:"krushal"
         }
         console.log("hii mount Constructor")
       }

       static getDerivedStateFromProps(props,state){
           console.log("hii mount get derived")
           return null

       }

       shouldComponentUpdate(nextprops,nextstate){
        console.log("hii shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("hii get snapshot before update")
        return null
    }

    componentDidUpdate(){
        console.log("hii componentDidUpdate")
    }

       componentDidMount(){
           console.log("Hii mount componentmount")
       }
       render(){
           console.log("hii mount render")
           return(
               <div>
                 <h1>Hii Mount</h1>
        
               </div>
               
           )
       }

}