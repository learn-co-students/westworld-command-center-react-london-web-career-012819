import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'
import { RENAME } from './constants.js'

class HostInfo extends Component {

  




  dropdownOptions = () => {
    return this.props.areas.map(area => ({key: area.name, text: RENAME(area.name), value: area.name}))
  }

  handleChange = (e, {value}) => {
    
    this.props.updateHostArea(this.props.host.id, value)
  }





  render(){
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.host.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.host.firstName} | { this.props.host.gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}
                { /* Think about how the above should work to conditionally render the right First Name and the right gender Icon */ }
              </Card.Header>
              <Card.Meta>
              <Radio
                  onChange={() => this.props.toggle(this.props.host.id)}
                  label={this.props.host.active ? "Active" : "Decomissioned"}
                 
                  checked={this.props.host.active}
                  
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.props.host.area}
                options={this.dropdownOptions()}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
