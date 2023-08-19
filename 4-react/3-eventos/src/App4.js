import './App.css';
import { useRef } from 'react' 

function App4() {
  const btnOpen = useRef(null);
  const btnClose = useRef(null);

  function handleClick(command) {
    if (command === "abrir") {
      console.log("Aberto")
    }

    if (command === "fechar") {
      console.log("Fechado")
    }
  }

  return (
    <div>   
      <button onClick={() => handleClick("abrir")} ref={btnOpen}>Abrir</button>
      <button onClick={() => handleClick("fechar")} ref={btnClose}>Fechar</button>
    </div>
  )
}

export default App4;
