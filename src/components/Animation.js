import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import photo from '../../assets/photo.jpeg'

class Animation extends Component {

  returnObj() {
    if(this.props.shape === 'photo') {
      return <div className="img-div"><img className="photo-border" src={photo} height="200px" width="200px" /></div>
    } else if (this.props.shape === 'text') {
      return <div className='text-shape'>Fun with CSS3!</div>
    } else if (this.props.shape === 'button') {
      return <div className='button-shape'><Button size='massive' secondary>Fun with CSS3!</Button></div>
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
