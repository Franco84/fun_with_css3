import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import photo from '../../assets/photo.jpeg'

class Animation extends Component {
  constructor(props) {
    super(props)
    this.style = this.style.bind(this)
  }

  style() {
      return {animation: this.props.settings.animationType + ' ' + this.props.settings.time + 's ' + this.props.settings.transition + ' backwards'}
    }


  returnObj() {
    if(this.props.settings.shape === 'photo') {
      return <div className="img-div"><img className="photo-border" src={photo} height="200px" width="200px" /></div>
    } else if (this.props.settings.shape === 'text') {
      return <div className='text-shape'>Fun with CSS3!</div>
    } else if (this.props.settings.shape === 'button') {
      return <div className='button-shape'><Button size='massive' secondary>Fun with CSS3!</Button></div>
    }
  }

  render() {
    return (
        <div
          key={this.props.settings.repeat}
          style={this.style()}
          className={this.props.settings.shape + ' animation-space'}>
          {this.returnObj(this.props.settings.shape)}
        </div>
    )
  }
}

export default Animation
