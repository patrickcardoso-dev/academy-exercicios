import './App.css';
import Lista from './components/Lista';

export default function App() {
  return (
    <div className="App">
      <Lista 
        item1="Banana"
        item2="Kiwi"
        item3="Melão"
      />
    </div>
  );
}

