import React, { Component } from 'react'
import ComponentB from './ComponentB'

export class ComponetA extends Component {
  render() {
    return (
      <div>
          <ComponentB/>
      </div>
    )
  }
}

export default ComponetA
