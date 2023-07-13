import './App.css'
import Card from './components/Card'

const characters = ["Sam Winchester",
"Dean Winchester",
"Castiel",
"Bobby Singer",
"Crowley",
"Charlie Bradbury",
"Rowena MacLeod",
"Lucifer",
"Gabriel",
"Meg Masters",
"Jack Kline",
"Mary Winchester",
"John Winchester",
"Jo Harvelle",
"Ellen Harvelle",
"Ruby",
"Kevin Tran",
"Balthazar"]

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
  const shuffledCharacters = shuffle(characters)
  console.log(shuffledCharacters)
  return (
    <>
      <nav className=' bg-black w-full opacity-75 h-24 flex justify-center items-center'>
        <h1 className='text-4xl font-medium text-white'>SUPERNATURAL MEMORY GAME</h1>
      </nav>
      <div className='flex flex-wrap gap-3 p-[4rem]'>
        {shuffledCharacters.map((character) => {
          return (
            <Card
              key={character}
              title={character}
              image={`https://rickandmortyapi.com/api/character/avatar/${Math.floor(
                Math.random() * 671
              )}.jpeg`}
            />
          )
        })}
      </div>
    </>
  )
}

export default App
