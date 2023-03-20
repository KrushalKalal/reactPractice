import React, { Component } from 'react'
import CoponentC from './CoponentC'

export class ComponentB extends Component {
  render() {
    return (
      <div>
          <CoponentC/>
      </div>
    )
  }
}

export default ComponentB
