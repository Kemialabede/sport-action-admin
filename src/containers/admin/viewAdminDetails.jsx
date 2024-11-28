import React from 'react'
import Modal from '../../components/modal/modal';
import Avatar from '../../components/avatar';
import Indicator from '../../components/indicator';

const ViewAdminDetails = ({ isShown, onCloseComplete }) => {
  return (
      <Modal
      isShown={isShown}
      onCloseComplete={onCloseComplete}
      title="Admin Profile"
    >
            <div>
                <div className='viewAdminDetails__adminInfo'>
                    <div className='viewAdminDetails__adminInfo__admin'>
                    <Avatar width={46} height={46} color="white" name="Marcel Kingston" />
                    <div className='viewAdminDetails__name'>
                        <p>Marcel Kingston</p>
                        <p>marcelkingston@gmail.com</p>
                    </div>
                    </div>
                    <Indicator status="active" statusIndicator="active" />

                </div>
                <div>
                    <div className='viewAdminDetails__details'>
                        <h4>Full Name</h4>
                        <p>Marcel Kingston</p>
                    </div>
                    <div className='viewAdminDetails__details'>
                        <h4>Email Address</h4>
                        <p>marcelkingston@gmail.com</p>
                    </div>
                    <div className='viewAdminDetails__details'>
                        <h4>Number of boards created</h4>
                        <p>10</p>
                    </div>
                    <div className='viewAdminDetails__details'>
                        <h4>Date Joined</h4>
                        <p>Sept 12, 2024 </p>
                    </div>
                </div>
             
            </div>
    </Modal>
  )
}

export default ViewAdminDetails