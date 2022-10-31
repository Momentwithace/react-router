import React, {useRef, useEffect} from 'react'

const Modal = ({open, children}) => {
    const dialogRef = useRef();


    useEffect(() => {

        if(open){

            dialogRef.current?.showModal()

        } else {
            dialogRef.current?.close()
        }
        
    }, [open])

  return (
    <dialog ref={dialogRef}>{children}</dialog>
  )
}

export default Modal