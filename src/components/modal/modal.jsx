import React from 'react';
import { Dialog } from 'evergreen-ui';
import { IoClose } from 'react-icons/io5';
import './modal.scss';

const Modal = ({ children, isShown, onCloseComplete, title }) => {
  return (
    <div className="modalContainer">
      <Dialog
        isShown={isShown}
        onCloseComplete={onCloseComplete}
        width="460px"
        hasHeader={false}
        hasFooter={false}
        hasCancel={false}
        hasClose={false}
      >
        <div className="modalContainer__header">
          <h4>{title}</h4>
          <IoClose onClick={onCloseComplete} />
        </div>
        <div className="modalContainer__body">{children}</div>
      </Dialog>
    </div>
  );
};

export default Modal;
