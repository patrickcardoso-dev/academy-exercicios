import './styles.css';

export default function AlertModal({main_img, texto, button, close_img, color}) {
    return (
      <div className="alert-modal">
        <img src={main_img} className="main-img"/>
        <p>{texto}</p>
        {
          color === "orange" 
            ? <button className="orange-btn">{button}</button>
            : <button className="blue-btn">{button}</button>
        }
        <img src={close_img} className="close-img"/>
      </div>
    );
  }