import './App.css';
import { useState } from 'react'

export default function Exercicio2() { 

  const [frutas, setFrutas] = useState(["Uva", "Maçã", "Banana", "Melão", "Mamão"]);

  function handleAddFruta() {
    setFrutas([...frutas, "Goiaba"])
  }

  return (
    <>
      <ul>
        {frutas.map(fruta => <li  key={fruta}>{fruta}</li>)}
      </ul>
      <button onClick={handleAddFruta}>Adicionar fruta</button>
    </>
    );
}

