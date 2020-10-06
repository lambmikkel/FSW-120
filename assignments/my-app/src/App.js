import React from 'react';
// import ColorCard from './components/ColorCard';
import VacayCard from "./components/VacayCard"
import VacationSpots from "./components/VacationSpots"

function App(){
  const vacayComponents = VacationSpots.map(vacation => 
  <VacayCard 
  place={vacation.place} 
  price={vacation.price}
  background={vacation.timeToGo}
  />)
  return (
    <div>
      <h1>Check out our vacation options!</h1>
      {vacayComponents}
    </div>
    
  )
  }

    




export default App;



 



