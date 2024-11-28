import React from 'react';
import Modal from '../../components/modal/modal';
import { useNavigate } from 'react-router-dom';
// import Tick from '../../assets/icons/tick-circle.svg';
import '../assets/assets.scss';

const NewPostAddedModal = ({ isShown, onCloseComplete, fiat }) => {
  const navigate = useNavigate();

  const handleModalSuccess = () => {
    onCloseComplete();
    navigate('/dashboard');
  };
  return (
    <Modal
      isShown={isShown}
      onCloseComplete={onCloseComplete}
      title="New Signal"
    >
      <div className="assetsContainer__successModal">
        {/* <img src={Tick} alt="tick" /> */}
        <h4 className="assetsContainer__successModal__title">
          New Signal Posted
        </h4>
        <p className="assetsContainer__successModal__caption">
          You have successfully posted a new signal to the signal room in the
          app
        </p>
        <Button theme="primary" size="lg" onClick={handleModalSuccess}>
          Go to dashboard
        </Button>
      </div>
    </Modal>
  );
};

export default NewPostAddedModal;
