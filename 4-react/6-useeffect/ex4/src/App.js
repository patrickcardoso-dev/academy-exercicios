import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [tarefas, setTarefas] = useState([])
  const [importar, setImportar] = useState(true)

  function importarDados() {
    const dados = [

      {
        id: 3,
        nome: 'Estudar Nodejs',
        feito: false
      },
      {
        id: 4,
        nome: 'Criar Projeto para estudo',
        feito: false
      },
      {
        id: 5,
        nome: 'Criar planejamento de estudo',
        feito: true
      },
    ]
    setTarefas([...tarefas, ...dados])
  }

  useEffect(() => {
      const dados = [
        {
          id: 1,
          nome: 'Estudar React',
          feito: false
        },
        {
          id: 2,
          nome: 'Estudar DOM',
          feito: false
        },
      ]
      setTarefas([...dados])     
  }, [])

  useEffect(() => {
    if(tarefas.length === 2) {
      alert('Dados iniciais importados')
    }
    else if (tarefas.length > 2) {
      alert('Dados importados')
      setImportar(false)
    }
  }, [tarefas])

  return (
    <div>
      <ul>
        {tarefas.map(({ id, nome, feito }) => <li key={id}>{id}-{nome}-{feito ? 'sim' : 'não'}</li>)}
      </ul>
      <button 
        disabled={!importar} 
        onClick={importarDados}>
        {importar ? 'Importar Dados' : 'Todos os dados importados'}
      </button>
    </div>
  );
}
