import React from 'react';
import Image from './Image';
import Interaction from './Interaction'
import Stats from './Stats';

export default function PlayScreen(props) {
  return(
    <div>
      <h1>{props.facts.name}</h1>
      <Image color={props.facts.color}/>
      <Interaction onAllowanceClick={props.onAllowanceClick} onShineClick={props.onShineClick}/>
      <Stats facts={props.facts}/>
    </div>
  )
}
