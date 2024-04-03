import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [characters, setCharacters] = useState([])
  // const [showHomeWorld, setShowHomeWorld] = useState(true);
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    const peopleRequest = axios.get(urlPeople)
    const planetsRequest = axios.get(urlPlanets)

    Promise.all([peopleRequest, planetsRequest])
    .then(([ppl, plnts]) => {
      const people = ppl.data;
      const planets = plnts.data
      const mergedData = people.map((prsn => {
        const homePlanet = planets.find(planet => planet.id === prsn.planetId);
        return { ...prsn, homePlanet: homePlanet ? homePlanet.name :
        "Unknown"}
      }));

      // console.log(mergedData)

      setCharacters(mergedData);
    })
    .catch(err => {console.error(err)});
  }, [])

  
  // const toggleShowHomeWorld = () => {
  //   setShowHomeWorld(!showHomeWorld);
  // }


  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */
      characters.map((character, idx) => {
        <Character key={idx} character={character}/>
      })
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
