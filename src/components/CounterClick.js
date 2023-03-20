import React, { Component } from 'react'

export class CounterClick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    incrementCount = () => {
        this.setState(prevStat => {
            return {
                count : prevStat.count + 1
            }
        })
    }
  render() {
    return (
      <div>
         <button onClick={this.incrementCount}>Count {this.state.count} Times </button>
      </div>
    )
  }
}

export default CounterClick
