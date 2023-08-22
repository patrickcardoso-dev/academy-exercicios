import { useEffect } from "react";
import "./style.css";

function Notification({ showNotification, text, handleClose}) {
  useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        handleClose()
      }, 1500)
    }
  }, [showNotification])

    return (
        <>
          {showNotification &&
            <div className='notification-container'>
              <strong>{text}</strong>
            </div>
          }
        </>
      ) 
}

export default Notification;