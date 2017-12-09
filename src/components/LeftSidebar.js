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
      <Menu vertical>
          <Dropdown item text='Animation'>
            <Dropdown.Menu>
              <Dropdown.Item name='large-fade-out' active={this.state.activeAnimation === 'large-fade-out'} onClick={this.handleAnimationClick} text='Large Fade Out' />
              <Dropdown.Item name='small-fade-in' active={this.state.activeAnimation === 'small-fade-in'} onClick={this.handleAnimationClick} text='Small Fade In' />
              <Dropdown.Item name='vertical-squish' active={this.state.activeAnimation === 'vertical-squish'} onClick={this.handleAnimationClick} text='Vertical Squish' />
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Shape'>
            <Dropdown.Menu>
              <Dropdown.Item name='circle' active={this.state.activeShape === 'circle'} onClick={this.handleShapeClick} icon='circle' text='Circle' />
              <Dropdown.Item name='square' active={this.state.activeShape === 'square'} onClick={this.handleShapeClick} icon='square' text='Square' />
            </Dropdown.Menu>
          </Dropdown>
      </Menu>
    )
  }
}
