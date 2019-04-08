import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

  const PARENT = props.parent

  return(
    <Card.Group itemsPerRow={6}>
      {props.hosts.map(host => {
        if ((!host.active && PARENT === "ColdStorage") || host.active && PARENT === "area") {return <Host host={host} handleClick={props.handleClick} selectedHost={props.selectedHost}/>}

      }
      )}
    </Card.Group>
  )
}

export default HostList
