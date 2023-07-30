import './App.css'
import Card from './components/Card'
import { useState } from 'react'

const characters = [
  {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
  {
    name: 'Summer Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  },
  {
    name: 'Beth Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
  },
  {
    name: 'Jerry Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
  },
  {
    name: 'Abadango Cluster Princess',
    image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
  },
  {
    name: 'Abradolf Lincler',
    image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
  },
  {
    name: 'Adjudicator Rick',
    image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
  },
  {
    name: 'Agency Director',
    image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
  },
  {
    name: 'Alan Rails',
    image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
  },
  {
    name: 'Albert Einstein',
    image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
  },
  {
    name: 'Alexander',
    image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
  },
  {
    name: 'Alien Googah',
    image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
  },
  {
    name: 'Alien Morty',
    image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
  },
  {
    name: 'Alien Rick',
    image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
  },
  {
    name: 'Amish Cyborg',
    image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg',
  },
  {
    name: 'Annie',
    image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
  },
  {
    name: 'Antenna Morty',
    image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
  },
  {
    name: 'Antenna Rick',
    image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
  },
  {
    name: 'Ants in my Eyes Johnson',
    image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
  },
  {
    name: 'Aqua Morty',
    image: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
  },
]


let fail = false;


//write a function that takes in an array and returns a new array with the same elements in a random order
function shuffle(array) {
  
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}


function App() {
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [successCount, setSuccessCount] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  console.log(selectedCharacters);
  const shuffledCharacters = shuffle(characters)
  return (
    <>
      <nav className=' bg-black w-full opacity-75 h-24 flex justify-center items-center relative'>
        <h1 className='text-4xl font-medium text-white'>Rick and Morty Memory Game</h1>
        <div className='absolute right-0 mr-10'>
          <h2 className='text-2xl font-medium text-white'>Score: {successCount}</h2>
          <h2 className='text-2xl font-medium text-white'>Best Score: {bestScore}</h2>
        </div>
      </nav>
      <div className='flex flex-wrap gap-3 p-[4rem]'>
        {shuffledCharacters.map((character) => {
          return (
            <Card
              key={character.name}
              title={character.name}
              image={character.image}
              setSelectedCharacters={setSelectedCharacters}
              successCount={successCount}
              setSuccessCount={setSuccessCount}
              bestScore={bestScore}
              setBestScore={setBestScore}
              fail={fail}
            />
          )
        })}
      </div>
    </>
  )
}

export default App
