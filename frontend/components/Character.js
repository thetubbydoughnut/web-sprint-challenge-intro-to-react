import React, { useState } from 'react'

function Character({ character, toggleShowHomeWorld }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [isHomeWorldVisible, setIsHomeWorldVisible] = useState(true)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const handleClick = () => {
      toggleShowHomeWorld(character.id);
      setIsHomeWorldVisible(!isHomeWorldVisible);
  }


  return (
    <div className='character-card' onClick={handleClick}>
     <h3 className='character-name'>{character.name}</h3>
     {character.isHomeWorldVisible && 
     <p>Planet:  
      <span className='character-planet'> {character.homeWorld}</span>
     </p>
     }
    </div>
  )
}

export default Character
