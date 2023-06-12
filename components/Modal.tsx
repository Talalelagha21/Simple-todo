import React from "react";


interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode
}


export const Modal: React.FC<ModalProps> = ({ modalOpen,setModalOpen, children }) => {
  return (
    <div className={`modal ${modalOpen ? 'modal-open' : ''}`}>
      <div className="modal-box relative">
        <div className="modal-action">
          <label onClick={()=>(setModalOpen(false))} className="btn">
            Close!
          </label>
          {children}
        </div>
      </div>
    </div>
  );
};
