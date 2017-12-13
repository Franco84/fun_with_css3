import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import Title from './Title'
import Animation from './Animation'
import Navigation from './Navigation'
import LeftSidebar from './LeftSidebar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {settings: {shape: 'circles', animationType: 'large-fade-out', transition: 'linear', time: 0.75, repeat: true}}
  }

  onAnimationTypeSelect(e) {
    this.setState({
      settings: Object.assign(
        {},
        this.state.settings,
        {animationType: e}
      )
    })
  }

  onShapeSelect(e) {
    this.setState({
      settings: Object.assign(
        {},
        this.state.settings,
        {shape: e}
      )
    })
  }

  onTransitionSelect(e) {
    this.setState({
      settings: Object.assign(
        {},
        this.state.settings,
        {transition: e}
      )
    })
  }

  onTimeSelect(e) {
    this.setState({
      settings: Object.assign(
        {},
        this.state.settings,
        {time: e}
      )
    })
  }

  onRepeatSelect() {
    this.setState({
      settings: Object.assign(
        {},
        this.state.settings,
        {repeat: !this.state.settings.repeat}
      )
    })
  }


  render() {
    return (
      <span>
        <Grid width={16}>
          <Grid.Row>
            <Grid.Column width={16} className="bg">
              <Title />
            </Grid.Column>
            {/* <Grid.Column width={16} className="bg">
              <Navigation />
            </Grid.Column> */}
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={2} tablet={1} computer={1}>
              <div> </div>
            </Grid.Column>
            <Grid.Column mobile={12} tablet={2} computer={2}>
              <LeftSidebar
                animationTypeSelect={this.onAnimationTypeSelect.bind(this)}
                shapeSelect={this.onShapeSelect.bind(this)}
                transitionSelect={this.onTransitionSelect.bind(this)}
                timeSelect={this.onTimeSelect.bind(this)}
                repeat={this.onRepeatSelect.bind(this)}
                settings={this.state.settings}
               />
            </Grid.Column>
            <Grid.Column mobile={2} tablet={1} computer={1}>
              <div> </div>
            </Grid.Column>
            <Grid.Column mobile={2} tablet={1} computer={1}>
              <div></div>
            </Grid.Column>
            <Grid.Column mobile={12} tablet={10} computer={10}>
              <Animation settings={this.state.settings} />
            </Grid.Column>
            <Grid.Column mobile={2} tablet={1} computer={1}>
              <div></div>
            </Grid.Column>
           </Grid.Row>
         </Grid>
    </span>
    )
  }
}

export default App
