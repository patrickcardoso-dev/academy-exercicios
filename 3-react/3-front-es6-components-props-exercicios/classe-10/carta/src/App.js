import './App.css';
import Letter from './components/Letter'

export default function App() {
  return (
    <div>
      <Letter 
        titulo="Olá, mundo!"
        conteudo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus eu mauris in interdum. Donec ornare nisl sed aliquet viverra. Ut elementum, augue eget molestie convallis, nisl magna molestie nunc."
      />
    </div>
  );
}

