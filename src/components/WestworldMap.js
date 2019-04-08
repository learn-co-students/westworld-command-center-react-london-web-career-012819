import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = (props) => {

  return (
    <Segment id="map" >
      {props.areas.map(area => <Area {...area} />)}
    </Segment>
  )
}

export default WestworldMap
