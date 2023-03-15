import React,{Component} from "react";

const UpdatedComponent = (OriginalComponent,incrementValue) =>{
    class NewComponent extends Component{
        constructor(){
            super()
            this.state={
                count:0,
                
            }
        }
    
        incrementCount = ( ) =>{
            this.setState(prevState =>{
                 return {count : prevState.count + incrementValue}
            })
        }
        render(){
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
            // return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} name='krushal'/>
        }

    }
    return NewComponent

}

export default UpdatedComponent

// const UpdatedComponent = (OriginalComponent) =>{
//     class NewComponent extends Component{
//         render(){
//             return <OriginalComponent name='krushal'/>
//         }

//     }
//     return NewComponent

// }

// export default UpdatedComponent