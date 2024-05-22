import React from 'react'

const Detalle = ({originalPrice, name, image}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{originalPrice}</h2>
        <img src={image} alt="" />
        <p>hola</p>
    </div>
  )
}

export default Detalle