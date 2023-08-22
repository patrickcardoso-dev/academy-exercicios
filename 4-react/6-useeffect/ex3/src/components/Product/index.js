import './styles.css';
import { handleCalculateInstallments } from '../../utils/functions';

function Product({ item, handleDetailProduct }) {
    return (
    <div       
        className='product-container'
        onClick={() => handleDetailProduct(item)}
    >
        <img src={item.image} alt="Product" />
        <span>{item.name}</span>
    
      <div className='prices-content'>
        <span>R$ {item.oldPrice.toFixed(2)}</span>
        <h2>R$ {item.currentPrice.toFixed(2)}</h2>
      </div>
      
      <div className='installments-content'>
        <h4>6x R$ {handleCalculateInstallments(item.currentPrice)}</h4>
        <span>Sem juros</span>
      </div>
    </div>)
}

export default Product;