import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

const db = [
  {
    name: 'Karaluch',
    url: './img/mrowa.jpg'
  },
  {
    name: 'Mól książkowy',
    url: './img/mrowa.jpg'
  },
  {
    name: 'Rybik cukrowy',
    url: './img/mrowa.jpg'
  },
  {
    name: 'Kątnik',
    url: './img/mrowa.jpg'
  },
  {
    name: 'Mrówka Faraonka',
    url: './img/mrowa.jpg'
  }
]

function Simple () {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>Creeper</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>Wybrałeś {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default Simple
