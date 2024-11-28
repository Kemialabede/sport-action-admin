import React from 'react';
import { Dialog } from 'evergreen-ui';
import { IoClose } from 'react-icons/io5';
import './modal.scss';

const ConfirmationModal = ({ children, isShown, onCloseComplete, title }) => {
  return (
    <div className="confirmationModal">
      <Dialog
        isShown={isShown}
        onCloseComplete={onCloseComplete}
        width="507px"
        hasHeader={false}
        hasFooter={false}
        hasCancel={false}
        hasClose={false}
      >
        <div className="confirmationModal__close">
          <IoClose onClick={onCloseComplete} />
        </div>
        <div className="confirmationModal__body">
          <h4>{title}</h4>
          {children}
        </div>
      </Dialog>
    </div>
  );
};

export default ConfirmationModal;
