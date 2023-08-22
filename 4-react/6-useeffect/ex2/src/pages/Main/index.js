import { useState, useEffect } from 'react';
import Notification from '../../components/Notification';
import './style.css';

function Main() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (users.length) {
      setShowNotification(true);
    }
  }, [users]);

  const handleNewName = () => {
    setUsers([...users, name]);
    setName("");
  };

  return (
    <div className="container">
      <section className="left">
        <input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={handleNewName}>Adicionar</button>
      </section>

      <section className="right">
        <h1>Usuários</h1>
        <div className="users-container">
          {users.map(user => <h4 key={user}>{user}</h4>)}
        </div>
      </section>

      <Notification 
        showNotification={showNotification} 
        text="Novo usuário adicionado!" 
        handleClose={() => setShowNotification(false)}
      />
    </div>
  );
}

export default Main;
