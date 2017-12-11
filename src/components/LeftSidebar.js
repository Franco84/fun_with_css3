import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu, Form, Checkbox, Label, Popup } from 'semantic-ui-react'

export default class LeftSidebar extends Component {
  constructor(props) {
    super(props)
    this.handleAnimationClick = this.handleAnimationClick.bind(this)
    this.handleShapeClick = this.handleShapeClick.bind(this)
    this.handleTransitionTimingChange = this.handleTransitionTimingChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
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

  render() {
    return (
      <Menu className="menu-alignment" vertical>
          <Dropdown item text='Animation'>
            <Dropdown.Menu>
              <Dropdown.Item name='large-fade-out' active={this.props.activeAnimation === 'large-fade-out'} onClick={this.handleAnimationClick} text='Large Fade Out' />
              <Dropdown.Item name='small-fade-in' active={this.props.activeAnimation === 'small-fade-in'} onClick={this.handleAnimationClick} text='Small Fade In' />
              <Dropdown.Item name='vertical-squish' active={this.props.activeAnimation === 'vertical-squish'} onClick={this.handleAnimationClick} text='Vertical Squish' />
              <Dropdown.Item name='three-sixty' active={this.props.activeAnimation === 'three-sixty'} onClick={this.handleAnimationClick} text='360 Turn' />
              <Dropdown.Item name='bottom-flip' active={this.props.activeAnimation === 'bottom-flip'} onClick={this.handleAnimationClick} text='Bottom Flip' />
              <Dropdown.Item name='lift-flip' active={this.props.activeAnimation === 'lift-flip'} onClick={this.handleAnimationClick} text='Lift Flip' />
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Shape'>
            <Dropdown.Menu>
              <Dropdown.Item name='circles' active={this.props.activeShape === 'circles'} onClick={this.handleShapeClick} icon='circle' text='Circle' />
              <Dropdown.Item name='squares' active={this.props.activeShape === 'squares'} onClick={this.handleShapeClick} icon='square' text='Square' />
              <Dropdown.Item name='text' active={this.props.activeShape === 'text'} onClick={this.handleShapeClick} icon='text height' text='Text' />
              <Dropdown.Item name='button' active={this.props.activeShape === 'button'} onClick={this.handleShapeClick} icon='add square' text='Button' />
              <Dropdown.Item name='photo' active={this.props.activeShape === 'photo'} onClick={this.handleShapeClick} icon='image' text='Photo' />
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <Form>
             <Form.Field>
               <Popup
                trigger={<Icon name='question circle outline' size='medium' />}
                content='The transition-timing-function property specifies the speed curve of the transition effect.'
                offset={175}
                position='right center'
              />
              Transition Timing:

             </Form.Field>
             <Form.Field>
               <Checkbox
                 radio
                 label='Linear'
                 name='checkboxRadioGroup'
                 value='linear'
                 checked={this.props.transition === 'linear'}
                 onChange={this.handleTransitionTimingChange}
               />
             </Form.Field>
             <Form.Field>
               <Checkbox
                 radio
                 label='Ease'
                 name='checkboxRadioGroup'
                 value='ease'
                 checked={this.props.transition === 'ease'}
                 onChange={this.handleTransitionTimingChange}
               />
             </Form.Field>
             <Form.Field>
               <Checkbox
                 radio
                 label='Ease In'
                 name='checkboxRadioGroup'
                 value='ease-in'
                 checked={this.props.transition === 'ease-in'}
                 onChange={this.handleTransitionTimingChange}
               />
             </Form.Field>
             <Form.Field>
               <Checkbox
                 radio
                 label='Ease Out'
                 name='checkboxRadioGroup'
                 value='ease-out'
                 checked={this.props.transition === 'ease-out'}
                 onChange={this.handleTransitionTimingChange}
               />
             </Form.Field>
             <Form.Field>
               <Checkbox
                 radio
                 label='Ease In Out'
                 name='checkboxRadioGroup'
                 value='ease-in-out'
                 checked={this.props.transition === 'ease-in-out'}
                 onChange={this.handleTransitionTimingChange}
               />
             </Form.Field>
           </Form>
         </Menu.Item>
         <Menu.Item>
           <Input
            labelPosition='right'
            placeholder='0.75'
            type='number'
            size='small'
            fluid={true}
            onChange={this.handleTimeChange}
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
