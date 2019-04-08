import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters'

const api_url = "http://localhost:4000/"


class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  state = {
    areas: [],
    hosts: [],
    selectedHost: null
  }

  componentDidMount(){
    fetch(api_url + "areas")
      .then(resp => resp.json())
      .then(areas => this.setState({areas}))
    
    fetch(api_url + "hosts")
      .then(resp => resp.json())
      .then(hosts => this.setState({hosts}))
  }

  handleClick = (id) => {
    this.setState({
      selectedHost: id
    })
  }

  updateHostArea = (id, area) => {
   
      const newHosts = this.state.hosts.map(host => {
  
        if(host.id === id){
           return {...host, area: area}
        } else {
            return host
        }
    })
      this.setState({
        hosts: newHosts
      })
  }

  toggle = (id) => {
   
    const newHosts = this.state.hosts.map(host => {

      if(host.id === id){
         return {...host, active: !host.active}
      } else {
          return host
      }
  })
    this.setState({
      hosts: newHosts
    })
  }

  render(){
    return (
      <Segment id='app'>
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
        <WestworldMap selectedHost={this.state.selectedHost} areas={this.state.areas} hosts={this.state.hosts} handleClick={this.handleClick} />
        <Headquarters selectedHost={this.state.selectedHost} hosts={this.state.hosts} toggle={this.toggle} areas={this.state.areas} updateHostArea={this.updateHostArea} handleClick={this.handleClick} />
      </Segment>
    )
  }
}

export default App;
