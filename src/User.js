import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        {/* Karan */}
        {/* {this.props.name} */}
        {/* {this.props.name()} */}
        {this.props.name(false)}
      </div>
    )
  }
}

export default User
