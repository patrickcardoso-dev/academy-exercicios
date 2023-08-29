import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { setItem, getItem } from '../../utils/storage';
import './styles.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        console.log("Preencha todos os campos!");
        return;
      }

      const response = await api.post('/login', {
        email,
        password
      })

      const { token } = response.data;
      setItem('token', token);
      navigate('/main');

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = getItem('token');
    
    if (token) {
      navigate('/main');
    }
  }, [])
  
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Passsword'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>
          Login
        </button>
      </form>
    </div>
  );
}

export default SignIn;
