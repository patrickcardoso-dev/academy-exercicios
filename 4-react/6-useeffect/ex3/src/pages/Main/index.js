import Header from '../../components/Header';
import Product from '../../components/Product';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import data from '../../data';
import { useState } from 'react';
import './style.css';

function Main() {
  const [products, setProducts] = useState([...data]);
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  function handleDetailProduct(product) {
    setOpen(true);
    setCurrentProduct(product);
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div className="container">
      <Header />
      <div className='products-container'>
        {products.map(product => 
        <Product 
          key={product.id}
          item={product}
          handleDetailProduct={handleDetailProduct}
        />)}
      </div>
      <Footer />
      <Modal 
        open={open}
        handleClose={handleClose}
        product={currentProduct}
      />
    </div>
  );
}

export default Main;
