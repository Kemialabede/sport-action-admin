import React, { useState } from 'react'
import DashboardLayout from '../../components/layout/dashboardLayout'
import addIcon from '../../assets/icons/add.svg';
import colorAddIcon from '../../assets/icons/colored-add.svg'
import TeamsContent from './teamsContent';
import Button from '../../components/button';
import { teamTabs } from '../../mocks/teams';
import Tabs from '../../components/tab';
import AddNewCategoryModal from './addNewCategoryModal';
import AddNewTeamModal from './addNewTeamModal';

const Teams = () => {
      const [activeTab, setActiveTab] = useState(teamTabs[0]);
         const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };
    
  return (
    <DashboardLayout title="Teams">
        <div className="admins__tabs">
        <Tabs
          tabs={teamTabs}
          setActive={(e) => setActiveTab(e)}
          active={activeTab}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px'}}>
            <Button theme="primary" size="sm" onClick={() => handleOpenModal('addTeam')}>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <img src={addIcon} alt="add" />
                <p>New team</p>
              </div>
            </Button>
            <Button theme="action" size="lg" onClick={() => handleOpenModal('addCategory')}>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <img src={colorAddIcon} alt="add" />
                <p>New category</p>
              </div>
            </Button>
        </div>
      </div>
      <TeamsContent />
      <AddNewCategoryModal
       isShown={openModal === 'addCategory'}
        onCloseComplete={() => setOpenModal(false)}
       />
       <AddNewTeamModal
       isShown={openModal === 'addTeam'}
        onCloseComplete={() => setOpenModal(false)}
       />

    </DashboardLayout>
  )
}

export default Teams