import React from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import { Formik } from 'formik';
import Modal from '../../components/modal/modal';

const ChangePassword = ({ isShown, onCloseComplete }) => {
  return (
    <Modal isShown={isShown}
      onCloseComplete={onCloseComplete}
      title="Change Password">
    <Formik>
      <div className="changePasswordContainer">
        <div className="changePasswordContainer__body">
          <div>
            <Input
              title="Old Password"
              labelClass="changePasswordContainer__body__inputLabel"
            />
            <Input
              title="New Password"
              labelClass="changePasswordContainer__body__inputLabel"
            />
          </div>
          <Button theme="primary" size="lg">
            Save Changes
          </Button>
        </div>
      </div>
    </Formik>
    </Modal>
  );
};

export default ChangePassword;
