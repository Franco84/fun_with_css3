import React, {Component} from 'react'
import photo from '../../assets/photo.jpeg'

class Animation extends Component {

  returnObj() {
    if(this.props.shape === 'photo') {
      return <img className="photo-border" src={photo} height="200px" width="200px" />
    }
  }

  render() {
    return (
        <div className={this.props.animationType + ' ' + this.props.shape + ' animation-space'}>
          {this.returnObj(this.props.shape)}
        </div>
    )
  }
}

export default Animation
