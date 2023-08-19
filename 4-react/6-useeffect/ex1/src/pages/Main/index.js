import { useState } from 'react';
import Modal from '../../components/Modal';
import './style.css';

function Main() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <button onClick={() => setIsOpen(true)}>Open</button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export default Main;
