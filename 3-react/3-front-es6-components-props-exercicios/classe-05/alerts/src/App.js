import './App.css';
import AlertModal from './components/AlertModal/index';
import CookieImage from './assets/cookie.svg';
import AlertImage from './assets/alert.svg';
import CloseImage from './assets/close.svg';

export default function App() {
  return (
    <div className="container">
      <AlertModal 
        main_img={CookieImage}
        texto="Nós utilizamos cookies para melhorar nossa UX, analytics e marketing."
        button="Tudo bem!"
        close_img={CloseImage}
        color="orange"
      />
      
      <AlertModal 
        main_img={AlertImage}
        texto="Você será deslogado imediatamente!"
        button="Estender login"
        close_img={CloseImage}
        color="blue"
      />
    </div>
  );
}

