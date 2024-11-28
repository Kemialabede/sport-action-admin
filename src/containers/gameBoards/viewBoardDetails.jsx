import React from 'react'
import Modal from '../../components/modal/modal';
import Indicator from '../../components/indicator';
import NFL10 from '../../assets/icons/NFL Smoke Helmet (10) 1.svg';
import NFL25 from '../../assets/icons/NFL Smoke Helmet (25) 1.svg';

const ViewBoardDetails = ({ isShown, onCloseComplete }) => {
  return (
      <Modal
      isShown={isShown}
      onCloseComplete={onCloseComplete}
      title="Board Details"
    >
            <div>
                <div className='viewAdminDetails__adminInfo'>
                    <div className='viewAdminDetails__indicatorOnly'>
                    <Indicator status="completed" statusIndicator="completed" />
                    </div>
                </div>
                <div>
                    <div className='viewAdminDetails__details'>
                        <h4>Admin Name</h4>
                        <p>Marcel Kingston</p>
                    </div>
                    <div className='viewAdminDetails__details'>
                        <h4>Team 1</h4>
                        <div className='viewAdminDetails__details__withImage'>
                            <img src={NFL10} />
                        <p>Atlanta Falcons</p>
                        </div>
                    </div>
                    <div className='viewAdminDetails__details'>
                        <h4>Team 2</h4>
                        <div className='viewAdminDetails__details__withImage'>
                            <img src={NFL25} />
                        <p>Denver Broncos</p>
                        </div>
                    </div>
                    <div className='viewAdminDetails__details'>
                        <h4>Game Date & Time</h4>
                        <p>Nov 12, 2024 | 9;34AM </p>
                    </div>
                </div>
             
            </div>
    </Modal>
  )
}

export default ViewBoardDetails