import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = (props) => {

  return (
    <Segment id="map" >
      {props.areas.map(area => <Area area={area} hosts={props.hosts} handleClick={props.handleClick}  />)}
    </Segment>
  )
}

export default WestworldMap
