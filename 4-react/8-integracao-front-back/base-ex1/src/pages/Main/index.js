import { useState, useEffect } from 'react';
import api from '../../services/api';
import './styles.css';

function Main() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.log(error.response.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!name || !email) {
        console.log("Preencha todos os campos!");
        return;
      }

      const response = await api.post('/users', {
        name,
        email
      });

      setEmail('');
      setName('');
      loadUsers();

    } catch (error) {
      console.log(error.response.message);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder='E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Cadastrar</button>
      </form>

      <div className='users-container'>
        <h2>Users</h2>

        <div>
          {users.map((user) => (
            <h4 key={user.id}>{user.name}</h4>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
