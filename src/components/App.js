import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import Title from './Title'
import Animation from './Animation'
import Navigation from './Navigation'
import LeftSidebar from './LeftSidebar'

class App extends Component {
  constructor(props) {
    super(props)
    this.onAnimationTypeSelect = this.onAnimationTypeSelect.bind(this)
    this.onShapeSelect = this.onShapeSelect.bind(this)
    this.onTransitionSelect = this.onTransitionSelect.bind(this)
    this.state = {shape: 'circles', animationType: 'large-fade-out', transition: 'ease'}
  }

  onAnimationTypeSelect(e) {
    this.setState({
      shape: this.state.shape, animationType: e, transition: this.state.transition
    })
  }

  onShapeSelect(e) {
    this.setState({
      shape: e, animationType: this.state.animationType, transition: this.state.transition
    })
  }

  onTransitionSelect(e) {
    this.setState({
      shape: this.state.shape, animationType: this.state.animationType, transition: e
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
            <Grid.Column width={16} className="bg">
              <Navigation />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={2} tablet={1} computer={1}>
              <div> </div>
            </Grid.Column>
            <Grid.Column mobile={12} tablet={2} computer={2}>
              <LeftSidebar
                animationTypeSelect={this.onAnimationTypeSelect}
                shapeSelect={this.onShapeSelect}
                transitionSelect={this.onTransitionSelect}
                activeAnimation={this.state.animationType}
                shape={this.state.shape}
                transition={this.state.transition}
               />
            </Grid.Column>
            <Grid.Column mobile={2} tablet={1} computer={1}>
              <div> </div>
            </Grid.Column>
            <Grid.Column mobile={2} tablet={1} computer={1}>
              <div></div>
            </Grid.Column>
            <Grid.Column mobile={12} tablet={10} computer={10}>
              <Animation animationType={this.state.animationType} shape={this.state.shape} transition={this.state.transition} />
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
