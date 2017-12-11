import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu, Form, Checkbox, Label, Popup } from 'semantic-ui-react'

export default class LeftSidebar extends Component {
  constructor(props) {
    super(props)
  }

  handleAnimationClick(e, { name }) {
    this.props.animationTypeSelect(name)
    }

  handleShapeClick(e, { name }) {
    this.props.shapeSelect(name)
  }

  handleTransitionTimingChange(e, { value }) {
    this.props.transitionSelect(value)
  }

  handleTimeChange(e) {
    this.props.timeSelect(parseFloat(e.target.value))
  }

  animationDropdown() {
    const animations = [['large-fade-out', 'Large Fade Out'], ['small-fade-in', 'Small Fade In'], ['vertical-squish', 'Vertical Squish'], ['three-sixty', '360 Turn'], ['bottom-flip', 'Bottom Flip'], ['lift-flip', 'Lift Flip']]
    return animations.map((arr) => {
      return  (
        <Dropdown.Item name={arr[0]} active={this.props.settings.animationType === arr[0]} onClick={this.handleAnimationClick.bind(this)} text={arr[1]} />
      )
    })
  }

  shapeDropdown() {
    const shapes = [['circles','circle', 'Circle'], ['squares', 'square', 'Square'], ['text', 'text height', 'Text'], ['button', 'add square', 'Button'], ['photo', 'image', 'Photo']]
    return shapes.map((arr) => {
      return  (
        <Dropdown.Item name={arr[0]} active={this.props.settings.shape === arr[0]} onClick={this.handleShapeClick.bind(this)} icon={arr[1]} text={arr[2]} />
      )
    })
}

  checkboxes() {
    const timingFunctions = [['Linear', 'linear'], ['Ease', 'ease'], ['Ease In', 'ease-in'], ['Ease Out', 'ease-out'], ['Ease In Out', 'ease-in-out']]
    return timingFunctions.map((arr) => {
      return (
        <Form.Field>
          <Checkbox
            radio
            label={arr[0]}
            name='checkboxRadioGroup'
            value={arr[1]}
            checked={this.props.settings.transition === arr[1]}
            onChange={this.handleTransitionTimingChange.bind(this)}
          />
        </Form.Field>
      )
    })
  }

  render() {
    return (
      <Menu className="menu-alignment" vertical>
          <Dropdown item text='Animation'>
            <Dropdown.Menu>
              {this.animationDropdown()}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Shape'>
            <Dropdown.Menu>
              {this.shapeDropdown()}
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <Form>
             <Form.Field>
               <Popup
                trigger={<Icon name='question circle outline' />}
                content='The transition-timing-function property specifies the speed curve of the transition effect.'
                offset={175}
                position='right center'
              />
              Transition Timing:
             </Form.Field>
             {this.checkboxes()}
           </Form>
         </Menu.Item>
         <Menu.Item>
           <Input
            labelPosition='right'
            placeholder='0.75'
            type='number'
            size='small'
            fluid={true}
            onChange={this.handleTimeChange.bind(this)}
          >
            <Label basic>Time</Label>
            <input />
            <Label>sec</Label>
          </Input>
        </Menu.Item>
      </Menu>
    )
  }
}
