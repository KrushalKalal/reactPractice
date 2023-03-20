import React, { Component } from 'react'

class ClickCounterTwo extends Component {
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
          <button onClick={this.props.incrementCount}>Count {this.props.count} Times </button>
      </div>
    )
  }
}

export default ClickCounterTwo
