import './App.css';
import Gabriela from './assets/gabriela.jpg';
import PrevIcon from './assets/icon-prev.svg';
import NextIcon from './assets/icon-next.svg';


export default function App() {
  return (
      <div className="content-wrapper">
        <div className="text-wrapper">
            <p className="review-text">“Estive interessada em código por um tempo mas não tomava uma atitude, até agora. Não
                consigo recomendar esse curso o suficiente. Estou no trabalho dos meu sonhos e vejo um futuro
                brilhante!”</p>
            <div className="author__content-wrapper">
                <div className="author__name">Gabriela da Silva</div>
                <div className="author__title">Desenvolvedora Fullstack</div>
            </div>
        </div>

        <div className="carousel">
            <div className="carousel__img-wrapper">
                <img src={ Gabriela } alt="bootcamp graduate" className="carousel__img"/>
            </div>
            <div className="carousel__btn-wrapper">
                <button id="btn-prev" className="btn btn--previous">
                  <img src={ PrevIcon } alt="previous button"/>
                </button>
                <button id="btn-next" className="btn btn--next">
                  <img src={ NextIcon } alt="next button"/>
                </button>
            </div>
        </div>
    </div>
  );
};
