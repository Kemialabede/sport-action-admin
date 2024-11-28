import React from 'react';
import Modal from '../../components/modal/modal';
import Button from '../../components/button';
import '../admin/admin.scss';
import Input from '../../components/input';
import { Formik } from 'formik';

const AddNewAdminModal = ({ isShown, onCloseComplete }) => {
  return (
    <Modal
      isShown={isShown}
      onCloseComplete={onCloseComplete}
      title="Add New Admin"
    >
      <Formik>
        {(formik) => {
          return (
            <>
              <div>
                <Input
                  title="Full Name"
                  placeholder="Enter full name"
                  labelClass="adminAddInput__label"
                  className="adminAddInput"
                />
              </div>
              <div>
                <Input
                  title="Email address"
                  placeholder="Enter email address"
                  labelClass="adminAddInput__label"
                  className="adminAddInput"
                />
              </div>
              
              <div className="transactionDetails__btn">
                <Button theme="primary" size="lg">
                  Add Admin
                </Button>
              </div>
            </>
          );
        }}
      </Formik>
    </Modal>
  );
};

export default AddNewAdminModal;
