import './styles.css';
import CloseIcon from '../../assets/close-icon.svg';
import { handleCalculateInstallments } from '../../utils/functions'
import { useEffect, useState } from 'react';

function Modal({ open, handleClose, product }) {
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    if (open) {
      setTopPosition(document.documentElement.scrollTop + 25);
    }
  }, [open]);

  return (
    <>
      {open &&
        <div className='modal-container'>
          <div
            className='modal'
            style={{ top: topPosition }}
          >
            <div className='modal-body'>
              <img
                src={product.image}
                alt="Product image"
                className='product-image'
              />

              <img
                src={CloseIcon}
                alt="close icon"
                className='close'
                onClick={() => handleClose()}
              />

              <strong>{product.name}</strong>
              <p>{product.description}</p>

              <div className='buy-container'>
                <button className='buy-btn'>COMPRAR</button>

                <div className='prices-container'>
                  <div className='prices-content'>
                    <span>R$ {product.oldPrice.toFixed(2)}</span>
                    <h2>R$ {product.currentPrice.toFixed(2)}</h2>
                  </div>

                  <div className='installments-content'>
                    <h4>6x  R$ {handleCalculateInstallments(product.currentPrice)}</h4>
                    <span>Sem juros</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Modal;