import './App.css';
import { useState } from 'react';

export default function Exercicio1() { 
  const [texto, setTexto] = useState("Olá");
  
  function handleChangeText() {
    setTexto("Olá Mundo")
  }

  return (
    <>
    <h1>{texto}</h1>
    <button onClick={handleChangeText}>Trocar texto</button>
    </>
  );
}
