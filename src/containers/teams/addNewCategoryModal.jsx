import React from 'react'
import Modal from '../../components/modal/modal';
import Input from '../../components/input'
import { Formik } from 'formik';
import Button from '../../components/button';

const AddNewCategoryModal = ({ isShown, onCloseComplete }) => {

  
  return (
      <Modal
      isShown={isShown}
      onCloseComplete={onCloseComplete}
      title="Add New Category"
    >
            <Formik>
                {() => {
                    return(
                        <>
                        <Input title="Category name"  labelClass="adminAddInput__label" />
                        <Button theme="primary" size="lg">Create Category</Button>
                        </>
                    )
                }}
            </Formik>
    </Modal>
  )
}

export default AddNewCategoryModal