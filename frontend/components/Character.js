import React, { useState } from 'react'

function Character({ character, showHomeWorld}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [isHomeWorldVisible, setIsHomeWorldVisible] = useState(true)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleShowHomeWorld = () => {
    setIsHomeWorldVisible(!isHomeWorldVisible);
  }

  return (
    <div className='character-card' onClick={toggleShowHomeWorld}>
     <h3 className='character-name'>{character.name}</h3>
     {isHomeWorldVisible && 
     <p>Planet: 
      <span className='character-planet'>{character.homePlanet}</span>
     </p>
     }
    </div>
  )
}

export default Character
