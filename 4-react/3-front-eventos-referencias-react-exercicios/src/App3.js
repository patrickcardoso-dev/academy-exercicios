import './App.css';
import { useRef} from 'react'

function App3() {

  const strong1 = useRef(null);
  const strong2 = useRef(null);
  const strong3 = useRef(null);

  function handleClick(name) {
    if (name === "Daniel") {
      strong1.current.style.color = 'red';
      strong1.current.style.fontSize = '30px';
    } 
    
    if (name === "João") {
      strong2.current.style.color = 'green';
      strong2.current.style.fontSize = '60px';
    }
    
    if (name === "Pedro") {
      strong3.current.style.color = 'blue';
      strong3.current.style.fontSize = '90px';
    }
  }

  return (
    <div className="App">
      <strong onClick={() => handleClick("Daniel")} ref={strong1}>Daniel</strong>
      <strong onClick={() => handleClick("João")} ref={strong2}>João</strong>
      <strong onClick={() => handleClick("Pedro")} ref={strong3}>Pedro</strong>
    </div>
  );
}

export default App3;
