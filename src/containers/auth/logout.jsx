import React from 'react';
import ConfirmationModal from '../../components/modal/confirmationModal';
import Button from '../../components/button';
import { useNavigate } from 'react-router-dom';

const LogOutModal = ({ isShown, onCloseComplete }) => {
  const navigate = useNavigate();
  return (
    <ConfirmationModal
      isShown={isShown}
      onCloseComplete={onCloseComplete}
      title="Log Out?"
    >
      <div className="admins__modal">
        <p>
          Are you sure that you want to log out? You will be taken back to the
          sign in page.
        </p>
        <div className="admins__modal__btn">
          <Button
            theme="primary"
            size="md"
            style={{
              background: '#E70A0A',
            }}
            onClick={() => navigate('/')}
          >
            Log out
          </Button>
          <Button theme="secondary" size="md" onClick={onCloseComplete}>
            Cancel
          </Button>
        </div>
      </div>
    </ConfirmationModal>
  );
};

export default LogOutModal;
