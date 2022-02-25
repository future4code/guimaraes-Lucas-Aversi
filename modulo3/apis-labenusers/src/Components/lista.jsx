import React from 'react'

export default class Lista extends React.Component {
  
  render() {
    return (
      <div>        
        <button onClick={this.props.onClickirForm}>Add new User</button>
      </div>
    )
  }
}
