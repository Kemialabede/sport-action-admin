import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/dashboardLayout';
import '../dashboard/dashboard.scss';
import { gameBoardData, gameBoardHeader, gameBoardTabs } from '../../mocks/gameBoards';
import Table from '../../components/table';
import Indicator from '../../components/indicator';
import Tabs from '../../components/tab';
import addIcon from '../../assets/icons/file-export.svg';
import Button from '../../components/button';
import Dropdown from '../../components/dropdown';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MenuItem } from '@headlessui/react';
import ApproveBoardStatusModal from './approveBoardStatusModal';
import ViewBoardDetails from './viewBoardDetails';

const GameBoards = () => {
      const [activeTab, setActiveTab] = useState(gameBoardTabs[0]);
        const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };
  const status = activeTab?.label === "Unapproved" ? "unapproved" : "pending";
  const ongoingStatus = activeTab?.label === "Ongoing" ? "ongoing" : status;
  const completedStatus = activeTab?.label === "Completed" ? "completed" : ongoingStatus
  return (
    <DashboardLayout title="Game Boards">
        <div className="admins__tabs">
        <Tabs
          tabs={gameBoardTabs}
          setActive={(e) => setActiveTab(e)}
          active={activeTab}
        />
        <div>
            <Button theme="primary" size="sm" onClick={() => handleOpenModal('add')}>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <img src={addIcon} alt="add" />
                <p>Export</p>
              </div>
            </Button>
        </div>
      </div>
      <Table
        tableHeaders={gameBoardHeader}
        tableData={gameBoardData}
        noPagination
      >
        {(row) => {
          return (
            <>
              <td>{row?.admin_name}</td>
              <td>
                <div className='flexContainers'>
                <img src={row.team1Icon} />
                <p>{row.team1}</p>
                </div>
              </td>
              <td>
                <div className='flexContainers'>
                <img src={row.team2Icon} />
                <p>{row.team2}</p>
                </div>
              </td>
              <td>{row.date}</td>
              <td>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                <Indicator 
                statusIndicator={activeTab?.label === "All boards" 
                ? row.status : completedStatus} 
                status={activeTab?.label === "All boards" 
                ? row.status : completedStatus} 
                />
                </div>
              </td>
              <td>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                <Dropdown icon={<BsThreeDotsVertical />}>
                  <MenuItem className="menu-item">
                    <div onClick={() => handleOpenModal('view')}>
                      View profile
                    </div>
                  </MenuItem>
                  <MenuItem className="menu-item">
                    <div onClick={() => handleOpenModal('approve')}>
                      Approve board
                    </div>
                  </MenuItem>
                </Dropdown>
                </div>
              </td>
              
            </>
          );
        }}
      </Table>
      <ApproveBoardStatusModal
        isShown={openModal === 'approve'}
        onCloseComplete={() => setOpenModal(false)}
      />
      <ViewBoardDetails
        isShown={openModal === 'view'}
        onCloseComplete={() => setOpenModal(false)}
      />
    </DashboardLayout>
  );
};

export default GameBoards;
