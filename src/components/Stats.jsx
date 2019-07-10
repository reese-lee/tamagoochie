import React from 'react';

export default function Stats(props) {
  return (
    <div>
      <h1>{props.facts.name}</h1>
      <h2><em>I am your sweet Tama'Gucci. I love the color {props.facts.color}! Give me <strong>allowance</strong> so I can go shopping! Buy me jewels so I can get more <strong>bling</strong>. Help me get more <strong>shine</strong> by cleaning me! YeY-Yer my Play-Yer ;)</em></h2>
      <div>
        <h3>Stats</h3>
        <p>Allowance: {props.facts.allowance}</p>
        <p>Bling level: {props.facts.bling}</p>
        <p>Shine level: {props.facts.shine}</p>
        <p>Age: {props.facts.age}</p>
      </div>
    </div>
  )
}
