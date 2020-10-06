import React from'react'

function ColorCard(props) {
  let changeStyle = 
  {
        backgroundColor: props.boxColor,
        textAlign: "center",
        border: "solid black 3px",
        width: "40%",
        height: 145,
        margin: "auto"

  }
  return (
    <div style={changeStyle}>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
      <p>{props.information}</p>

    </div>
  )
  
}



export default ColorCard