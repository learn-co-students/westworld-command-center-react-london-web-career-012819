import React from 'react';
import '../stylesheets/Area.css'
import { RENAME } from './constants.js'
import HostList from './HostList'

function filterHosts (area, hosts) {
  return hosts.filter(host => 
    { return host.area === area})
}

const Area = (props) => (
 
    

  <div className='area' id={props.area.name}>
    <h3 className='labels'>{RENAME(props.area.name)}</h3>
    

    < HostList hosts={filterHosts(props.area.name, props.hosts)} parent="area" handleClick={props.handleClick} />

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
