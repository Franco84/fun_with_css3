import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'

export default class LeftSidebar extends Component {
  constructor(props) {
    super(props)
    this.state = { activeAnimation: 'large-fade-out', activeShape: 'circle'}
    this.handleAnimationClick = this.handleAnimationClick.bind(this)
    this.handleShapeClick = this.handleShapeClick.bind(this)
  }

  handleAnimationClick(e, { name }) {
    this.props.animationTypeSelect(name)
    this.setState({ activeAnimation: name, activeShape: this.state.activeShape })
   }

  handleShapeClick(e, { name }) {
    this.props.shapeSelect(name)
    this.setState({ activeAnimation: this.state.activeAnimation, activeShape: name })
  }


  render() {
    return (
      <Menu className="menu-alignment" vertical>
          <Dropdown item text='Animation'>
            <Dropdown.Menu>
              <Dropdown.Item name='large-fade-out' active={this.state.activeAnimation === 'large-fade-out'} onClick={this.handleAnimationClick} text='Large Fade Out' />
              <Dropdown.Item name='small-fade-in' active={this.state.activeAnimation === 'small-fade-in'} onClick={this.handleAnimationClick} text='Small Fade In' />
              <Dropdown.Item name='vertical-squish' active={this.state.activeAnimation === 'vertical-squish'} onClick={this.handleAnimationClick} text='Vertical Squish' />
              <Dropdown.Item name='three-sixty' active={this.state.activeAnimation === 'three-sixty'} onClick={this.handleAnimationClick} text='360 Turn' />
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Shape'>
            <Dropdown.Menu>
              <Dropdown.Item name='circles' active={this.state.activeShape === 'circles'} onClick={this.handleShapeClick} icon='circle' text='Circle' />
              <Dropdown.Item name='squares' active={this.state.activeShape === 'squares'} onClick={this.handleShapeClick} icon='square' text='Square' />
              <Dropdown.Item name='text' active={this.state.activeShape === 'text'} onClick={this.handleShapeClick} icon='text height' text='Text' />
              <Dropdown.Item name='button' active={this.state.activeShape === 'button'} onClick={this.handleShapeClick} icon='add square' text='Button' />
              <Dropdown.Item name='photo' active={this.state.activeShape === 'photo'} onClick={this.handleShapeClick} icon='image' text='Photo' />
            </Dropdown.Menu>
          </Dropdown>
      </Menu>
    )
  }
}
