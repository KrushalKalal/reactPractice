import React, {Component} from 'react';
import Data from './data.json'
import DataClass from './DataClass';

class Datastat extends Component{
    constructor(props){
        super(props)
        this.state={
            data : Data
        }
    }
    render(){
        
        return(
            this.state.data.map((lists,index) => {
                return(
                    <div className='container' key={index}>
                         <DataClass mykey={index} listsData={lists}/>
                    </div>
                   
                )
              
            })
        )
    }
}

export default Datastat;