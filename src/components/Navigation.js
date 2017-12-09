import React, {Component} from 'react'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.onHandleClick = this.onHandleClick.bind(this)
    this.checkSelected = this.checkSelected.bind(this)
    this.state = {selected: ''}
  }

  onHandleClick(e) {
      this.setState({selected: e.target.id})
  }

  checkSelected(value) {
    if(value == this.state.selected) {
      return 'selected'
    } else {
      return ''
    }
  }

  render() {
    return (
      <div className="navigation">
          <span id='A' className={this.checkSelected('A')} onClick={this.onHandleClick}>Flips</span>
          <span id='B' className={this.checkSelected('B')} onClick={this.onHandleClick}>Arrivals</span>
          <span id='C' className={this.checkSelected('C')} onClick={this.onHandleClick}>Departures</span>
      </div>
    )
  }
}

export default Navigation
