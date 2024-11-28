import React from 'react';
import ConfirmationModal from '../../components/modal/confirmationModal';
import Button from '../../components/button';

const ApproveBoardStatusModal = ({ isShown, onCloseComplete }) => {
  return (
    <ConfirmationModal
      isShown={isShown}
      onCloseComplete={onCloseComplete}
      title="Approve Board"
    >
      <div className="admin__modal">
        <p>
Are you sure that you want to approve this game board.  The admin will be able to invite players to play
        </p>
        <div className="admin__modal__btn" style={{ marginTop: '32px', display: 'flex', gap: "11px"}}>
          <Button theme="primary" size="md">
            Approve
          </Button>
          <Button theme="secondary" size="md" onClick={onCloseComplete}>
            Cancel
          </Button>
        </div>
      </div>
    </ConfirmationModal>
  );
};

export default ApproveBoardStatusModal;
