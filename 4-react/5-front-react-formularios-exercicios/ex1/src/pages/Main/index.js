import { useState } from "react"; 
import ShowBtn from '../../assets/open-eye.svg';
import HideBtn from '../../assets/close-eye.svg';
import './style.css';

export default function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowing, setIsShowing] = useState(false);

  const toggleShowHide = () => {
    const prevShowing = isShowing;
    setIsShowing(!prevShowing);

  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Os campos de nome e e-mail são obrigatórios!");
      return;
    }

    alert("Login efetuado!");
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" id="submit-btn">Login</button>
      </form>
    </div>
  );
};

