import React from 'react';

export default function Interaction(props) {

  return (
    <div>
      <h1>Interaction</h1>
      <button onClick={props.onAllowanceClick}>`Pay yo 'gucci`</button>
      <button onClick={props.onShineClick}>`Shine yo 'gucci`</button>
    </div>
  )
}
