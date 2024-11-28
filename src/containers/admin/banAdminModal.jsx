import React from 'react';
import ConfirmationModal from '../../components/modal/confirmationModal';
import Button from '../../components/button';

const BanAdminModal = ({ isShown, onCloseComplete }) => {
  return (
    <ConfirmationModal
      isShown={isShown}
      onCloseComplete={onCloseComplete}
      title="Ban admin?"
    >
      <div className="admin__modal">
        <p>
          Are you sure that you want to ban this account.  The admin will no longer have access to their account
        </p>
        <div className="admin__modal__btn" style={{ marginTop: '32px', display: 'flex', gap: "11px"}}>
          <Button theme="primary" size="md">
            Ban
          </Button>
          <Button theme="secondary" size="md" onClick={onCloseComplete}>
            Cancel
          </Button>
        </div>
      </div>
    </ConfirmationModal>
  );
};

export default BanAdminModal;
