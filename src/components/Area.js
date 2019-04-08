import React from 'react';
import '../stylesheets/Area.css'
import { RENAME } from './constants.js'



const Area = ({id, name, limit, auth_req}) => (

  <div className='area' id={name}>
    <h3 className='labels'>{RENAME(name)}</h3>

    {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}

  </div>

)

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
