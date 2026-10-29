import React, { useEffect, useRef } from "react";
import './dialog.styles.css';
import { IconClose } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
    //Não deveriamos fazer buscas no DOM desse jeito!
    //const dialog = document.querySelector("dialog");


   const dialogRef = useRef(null)

   useEffect(() => {
    console.log('Deveriamos mostrar a modal?', isOpen)
    if(isOpen) {
      openDialog()
    } else {
      closeDialog()
    }
   },)
  // ...
  // "Show the dialog" button opens the dialog modally
  const openDialog = () => {
    dialogRef.current.showModal();
}

const closeDialog = () => {
    dialogRef.current.close();
};


  return (
    <React.Fragment>
      <dialog ref={dialogRef}  className="dialog">
        <div className="btn-close-wrapper">
          <button autoFocus onClick={onClose} className="btn-close">
             <IconClose />
          </button>
        </div>
         <div className="body">
            {children}
         </div>
      </dialog>
    </React.Fragment>
  );
}
