import { useState } from 'react';
import BackgroundImg from '../../assets/background.jpg';
import SuccessImg from '../../assets/woman-success.png';
import ShowBtn from '../../assets/open-eye.svg';
import HideBtn from '../../assets/close-eye.svg';
import './style.css';

export default function SignUp() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowing, setIsShowing] = useState(false);

  const toggleShowHide = () => {
    const prevShowing = isShowing;
    setIsShowing(!prevShowing);
  }
  
  const handleReset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError(true);
      return;
    }

    setSuccess(true);
  }
  
  return <div className='container'>
    <img src={BackgroundImg} alt='Slogan da Cubos Academy sobre fundo azul'/>
    { !success ? (
      <div className='signup-form'>
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
      <input 
          type="text" 
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}       
        />
        <input 
          type="email" 
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}       
        />
        <input 
          type={ isShowing ? "text" : "password"} 
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
          type="button"
          onClick={toggleShowHide}
        >
          {isShowing 
          ? <img 
              src={HideBtn} 
              alt="Ícone de ocultar senha" 
            /> 
          : <img 
              src={ShowBtn} 
              alt="Ícone de mostrar senha" 
            />
          }
        </button>
        { error 
          ? <span>Preencha todos os campos</span>
          : ""
        }
        <button type="submit" id="submit-btn">Cadastrar</button>
        <button 
          type="button" 
          id="reset-btn"
          onClick={handleReset}
        >Cancelar</button>
      </form>
      <h4>Já tem cadastro? Clique aqui!</h4>
      </div>
    ) 
    : (
      <div className='success-container'>
        <img src={SuccessImg} alt="Mulher com símbolo de check"/>
        <h3>Cadastro efetuado com sucesso!</h3>
      </div>
    )}
  </div>
}

