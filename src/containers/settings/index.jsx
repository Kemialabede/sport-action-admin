import React, { useState } from 'react'
import DashboardLayout from '../../components/layout/dashboardLayout'
import Avatar from '../../components/avatar'
import './settings.scss'
import ChangePassword from './changePasswordModal'

const Settings = () => {
    const [openModal, setOpenModal] = useState(null);

    const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  return (
    <DashboardLayout title="Settings">
<div className="profileInfoContainer">
          <div className="profileInfoContainer__avatar">
            <Avatar name="Olabode Micheal" width={126} height={126} font={36} />
          </div>
          <div>
            <h5 className="profileInfoContainer__heading">
              Personal Information
            </h5>
            <div className="profileInfoContainer__details">
              <p>Full Name</p>
              <p>Olabode Michael</p>
            </div>
            <div className="profileInfoContainer__details">
              <p>Email Address</p>
              <p>olabodemichael@gmail.com</p>
            </div>
            <div className="profileInfoContainer__details__password">
              <div className="profileInfoContainer__details__password__details">
                <p>Password</p>
                <p>Admin1234</p>
              </div>
              <p
                className="profileInfoContainer__details__password__changePassword"
                onClick={() => handleOpenModal('edit')}
              >
                Edit
              </p>
            </div>
          </div>
        </div>
        <ChangePassword  isShown={openModal === 'edit'}
        onCloseComplete={() => setOpenModal(false)} />
    </DashboardLayout>
  )
}

export default Settings