import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [characters, setCharacters] = useState([])
  // ❗ Create effects to fetch the data and put it in state

  useEffect(() => {
    const peopleRequest = axios.get(urlPeople)
    .then(res => res.data)
    .catch(err => console.error(err))

    const planetsRequest = axios.get(urlPlanets)
    .then(res => res.data)
    .catch(err => console.error(err))

    Promise.all([peopleRequest, planetsRequest])
    .then(([ppl, plnts]) => {
      const people = ppl;
      const planets = plnts
      const mergedData = people.map((prsn) => {
        let homeWorld = "Unknown";
        if (prsn.homeWorld !== undefined) {
          const homeWorldPlanet = planets.find(planet => planet.id === prsn.homeWorld);
          if (homeWorldPlanet) {
            homeWorld = homeWorldPlanet.name;
          }
        }
        return { ...prsn, homeWorld, isHomeWorldVisible: false };
      });
      
      console.log(mergedData)

      setCharacters(mergedData);
    })
    .catch(err => {console.error(err)});
  }, [])

  const toggleShowHomeWorld = (id) => {
    setCharacters(prevCharacters => prevCharacters.map(character => 
      character.id === id 
      ? {...character, isHomeWorldVisible: !character.isHomeWorldVisible} 
      : character
      )
      );
  }



  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */
      characters.map((character, idx) => {
        return (
        <Character key={character.id} character={character} toggleShowHomeWorld={toggleShowHomeWorld}/>
        )
      })
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
