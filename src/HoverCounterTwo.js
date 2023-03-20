import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count : 0
    //     }
    //   }
    //   incrementCount = () => {
    //       this.setState(prevStat => {
    //           return {
    //               count : prevStat.count + 1
    //           }
    //       })
    //   }
  render() {
    return (
      <div>
           <h2 onMouseOver={this.props.incrementCount}>Count {this.props.count} Times </h2>
      </div>
    )
  }
}

export default HoverCounterTwo
