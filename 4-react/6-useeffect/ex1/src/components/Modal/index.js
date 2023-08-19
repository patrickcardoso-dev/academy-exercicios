import './style.css';

export default function Modal({ isOpen, setIsOpen }) {
  return (
    <>
      { isOpen &&
        <div className='container-modal'>
          <div className='modal'>
            <h1>Users</h1>
            <div className='modal-body'>
              <span>Patrick</span>
              <span>Patrick</span>
              <span>Patrick</span>
              <span>Patrick</span>
              <span>Patrick</span>
              <span>Patrick</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      }
    </>
  )
}
