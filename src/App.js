import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters'
import { Log } from './services/Log';
import { RENAME } from './components/constants'

const api_url = "http://localhost:4000/"


class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  state = {
    areas: [],
    hosts: [],
    selectedHost: null,
    activateToggle: true,
    log: []
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
           this.setState({log: [Log.notify(`${host.firstName} set in area ${RENAME(area)}`), ...this.state.log]})
           return {...host, area: area}
        } else {
            return host
        }
    })
      this.setState({ hosts: newHosts })
  }

  toggle = (id) => {
   
    const newHosts = this.state.hosts.map(host => {

      if(host.id === id){
        host.active ?
        this.setState({log: [Log.notify(`Decommisioned ${host.firstName}`), ...this.state.log]})
        :
        this.setState({log: [Log.warn(`Activated ${host.firstName}`), ...this.state.log]})
        
        return {...host, active: !host.active}
      } else {
          return host
      }
  })
    this.setState({
      hosts: newHosts
    })
  }

  toggleAll = () => {
    this.state.activateToggle ?
    this.setState({log: [Log.warn("Activating all hosts!"), ...this.state.log]})
    :
    this.setState({log: [Log.notify("Decommissiong all hosts."), ...this.state.log]})
    const hosts = this.state.hosts.map(host => {
      return {...host, active: this.state.activateToggle}})
    this.setState({hosts, activateToggle: !this.state.activateToggle})
  }

  tooManyBro = (name, area) => {   
    this.setState({log: [Log.error(`Too many hosts. Cannot add ${name} to ${area}`), ...this.state.log]})
  }


  render(){
    return (
      <Segment id='app'>
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
        <WestworldMap selectedHost={this.state.selectedHost} areas={this.state.areas} hosts={this.state.hosts} handleClick={this.handleClick} />
        <Headquarters tooManyBro={this.tooManyBro} log={this.state.log} activateToggle={this.state.activateToggle} toggleAll={this.toggleAll} selectedHost={this.state.selectedHost} hosts={this.state.hosts} toggle={this.toggle} areas={this.state.areas} updateHostArea={this.updateHostArea} handleClick={this.handleClick} />
      </Segment>
    )
  }
}

export default App;
