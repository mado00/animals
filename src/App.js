import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
  
}
// console.log(getRandomAnimal());

function App() {
  // count is state, setCount is setter function
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    // ...animals is creating new array of animals then
    // pass in to the getRandomAnimal funtion
    // CAN'T do that animals.push(getRandonAnimal())
    // b/c cannot modify state "animals"
    setAnimals([...animals, getRandomAnimal()])
  };

  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderAnimals}</div>
    </div>
  );
}

export default App;