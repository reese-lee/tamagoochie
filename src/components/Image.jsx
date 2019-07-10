import React from 'react';
import snakeskin from './../assets/images/snakeskin.jpg';
import brown from './../assets/images/brown.jpg';
import glitter from './../assets/images/glitter.jpeg';
import gold from './../assets/images/gold.jpg';
import pink from './../assets/images/pink.jpg';
import rainbow from './../assets/images/rainbow.jpg';
import hiker from './../assets/images/hiker.jpg';

export default function Image(props) {
  let color = '';
  console.log(props.color);
  console.log(color);
  color = props.color
  return (
    <div>
      <h1>Image</h1>
      { props.color === 'snakeskin' && <img src={snakeskin} alt={color}/>}
      { props.color === 'brown' && <img src={brown} alt={color}/>}
      { props.color === 'glitter' && <img src={glitter} alt={color}/>}
      { props.color === 'gold' && <img src={gold} alt={color}/>}
      { props.color === 'pink' && <img src={pink} alt={color}/>}
      { props.color === 'rainbow' && <img src={rainbow} alt={color}/>}
      { props.color === 'hiker' && <img src={hiker} alt={color}/>}
    </div>
  )
}
