import React, {Component} from 'react'

class Animation extends Component {

  render() {
    return (
        <div className={this.props.animationType + ' ' + this.props.shape + ' animation-space'}>
        </div>
    )
  }
}

export default Animation
