import './App.css';
import { useState } from 'react';

export default function Exercicio3() {

  const [animals, setAnimals] = useState([
    {
      id: 1,
      nome: "Cachorro",
      especie: "Canis lupus familiaris"
    },
    {
      id: 2,
      nome: "Coelho",
      especie: "Oryctolagus cuniculus"
    },    
    {
      id: 3,
      nome: "Gato",
      especie: "Felis catus"
    },
  ]);
  
  function handleAddAnimal() {
    setAnimals([...animals, {
      id: 4,
      nome: "Calopsita",
      especie: "Nymphicus hollandicus"
    }])
  }
  
  function handleChangeAnimal() {
    setAnimals(animals => {
      const newAnimals = [...animals];
      newAnimals[1].especie = "Sylvilagus brasiliensis";
      return newAnimals
    })  
  }  

  function handleDeleteAnimal() {
    const newAnimals = animals.filter(animals => animals.id !== 3)
    setAnimals(newAnimals)
  }

  return (
    <>
      {animals.map(animal => 
        <ul key={animal.id}>
          <li>{animal.nome}</li>
          <li><i>{animal.especie}</i></li>
        </ul>
      )}

      <button onClick={handleAddAnimal}>Adicionar animal</button>
      <button onClick={handleChangeAnimal}>Alterar animal</button>
      <button onClick={handleDeleteAnimal}>Remover animal</button>
    </>
  );
}
