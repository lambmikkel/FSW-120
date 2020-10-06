import React from "react" 

function VacayCard(props) {
  function background() {
    if(props.background.toLowerCase() === "spring"){
      return("yellow") 
    } else if(props.background.toLowerCase() === "winter"){
      return("slategrey")
    } else if(props.background.toLowerCase() === "fall"){
      return("orange")
    } else if(props.background.toLowerCase() === "summer"){
      return("red")
    }
  }
  function dollarSign() {
    if(props.price <= 500){
      return("$")
    } else if(props.price <= 1000){
      return("$$")
    } else if(props.price > 1000){
      return("$$$")
    }
  }
  const style = {
    width: "100%",
    height: 140, 
    border: "solid black 4px",
    background: background(),
    textAlign: "center",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  }

  return (
    <div style={style}>
      <h1>{props.place}<br />{dollarSign()}{props.price}</h1>
    </div>
  )
}

export default VacayCard