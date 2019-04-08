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
    hosts: []
  }

  componentDidMount(){
    fetch(api_url + "areas")
      .then(resp => resp.json())
      .then(areas => this.setState({areas}))
    
    fetch(api_url + "hosts")
      .then(resp => resp.json())
      .then(hosts => this.setState({hosts}))
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
        <WestworldMap areas={this.state.areas} />
        <Headquarters hosts={this.state.hosts} toggle={this.toggle} areas={this.state.areas} updateHostArea={this.updateHostArea}/>
      </Segment>
    )
  }
}

export default App;
