import React, { useState } from 'react'

function Character({ characters }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showHomeWorld, setShowHomeWorld] = useState(true);  

  const toggleShowHomeWorld = () => {
    setShowHomeWorld(!showHomeWorld);
  }

  return (
    <div className='character-card' onClick={toggleShowHomeWorld}>
     <h3 className='character-name'>{characters.name}</h3>
     {showHomeWorld && 
     <p>Planet: 
      <span className='character-planet'>{characters.homePlanet}</span>
     </p>
     }
    </div>
  )
}

export default Character
