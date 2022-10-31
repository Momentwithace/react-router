import React , {useState } from 'react'
import { createPortal} from 'react-dom';
import Modal from './components/Modal';

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <h1>Welcome to my app</h1>
    <button onClick={() => setOpen(true)}>Open Modal</button>

    {
      createPortal(
        <Modal open={open}>
          <h1> A Modal demo</h1>
          <button onClick={() => setOpen(false)}>Close Modal</button>
        </Modal>,
        document.getElementById("modal")
        
      )
    }
    
    </>
  )
}

export default App
