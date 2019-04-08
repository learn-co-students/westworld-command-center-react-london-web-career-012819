import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.
  state = {
    selectedHost: null
  }

  handleClick = (id) => {
    this.setState({
      selectedHost: id
    })
  }

  findSelectedHost = (id) => {
    return this.props.hosts.find(host => host.id === id)
  }

  


  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

          <ColdStorage hosts={this.props.hosts} handleClick={this.handleClick} selectedHost={this.state.selectedHost}/>

        </Grid.Column>
        <Grid.Column width={5}>

          <Details theChosenOne={this.findSelectedHost(this.state.selectedHost)} selectedHost={this.state.selectedHost} toggle={this.props.toggle}  areas={this.props.areas} updateHostArea={this.props.updateHostArea}/>

        </Grid.Column>
        <Grid.Column width={3}>

          <LogPanel />

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
