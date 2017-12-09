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
    this.state = {shape: "circles", animationType: "large-fade-out"}
  }

  onAnimationTypeSelect(e) {
    this.setState({
      shape: this.state.shape, animationType: e
    })
  }

  onShapeSelect(e) {
    this.setState({
      shape: e, animationType: this.state.animationType
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
            <Grid.Column mobile={1} tablet={1} computer={1}>
              <div></div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={4} computer={2}>
              <LeftSidebar animationTypeSelect={this.onAnimationTypeSelect} shapeSelect={this.onShapeSelect} />
            </Grid.Column>
            <Grid.Column mobile={1} tablet={1} computer={1}>
              <div></div>
            </Grid.Column>
            <Grid.Column mobile={1} tablet={1} computer={1}>
              <div></div>
            </Grid.Column>
            <Grid.Column sm={2} mobile={16} tablet={10} computer={10}>
              <Animation animationType={this.state.animationType} shape={this.state.shape} />
            </Grid.Column>
            <Grid.Column mobile={1} tablet={1} computer={1}>
              <div></div>
            </Grid.Column>
           </Grid.Row>
         </Grid>
    </span>
    )
  }
}

export default App
