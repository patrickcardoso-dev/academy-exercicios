import './style.css';
import PuzzlePicture from '../../assets/puzzle.png'

export default function Main() {
  return (
    <div className='container'>
      <aside>
        <div className="logo">
          <img src={PuzzlePicture} />
          <h1>Cubos Puzzle</h1>
        </div>

        <button>Reset</button>
      </aside>

      <div className="cards"></div>
    </div>
  );
}
