import React, { useState } from 'react';
import Table from '../../components/table';
import Indicator from '../../components/indicator';
import Dropdown from '../../components/dropdown';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Tabs from '../../components/tab';
import './admin.scss';
import Button from '../../components/button';
import { MenuItem } from '@headlessui/react';
import addIcon from '../../assets/icons/add.svg';
import { adminData, adminHeader, adminTabs } from '../../services/api/admin';
import AddNewAdminModal from './addNewAdmin';
import BanAdminModal from './banAdminModal';
import ViewAdminDetails from './viewAdminDetails';

const AdminTable = () => {
  const [activeTab, setActiveTab] = useState(adminTabs[0]);
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };


  return (
    <>
      <div className="admins__tabs">
        <Tabs
          tabs={adminTabs}
          setActive={(e) => setActiveTab(e)}
          active={activeTab}
        />
        <div>
            <Button theme="primary" size="sm" onClick={() => handleOpenModal('add')}>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              >
                <img src={addIcon} alt="add" />
                <p>Add new admin</p>
              </div>
            </Button>
        </div>
      </div>
      <Table
        tableData={adminData}
        tableHeaders={adminHeader}
        totalPage={2}
        currentPage={1}
      >
        {(row, index) => {
              const status = activeTab?.label === "Banned" ? "banned" : "active"
          return (
            <>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phone}</td>
              <td>{row.boards}</td>
              <td>{row.date}</td>
              <td>
                <Indicator status={activeTab?.label === "All admins" ? row.status : status} statusIndicator={activeTab?.label === "All admins" ? row.status : status} />
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
                    <div onClick={() => handleOpenModal('ban')}>
                      Ban Admin
                    </div>
                  </MenuItem>
                </Dropdown>
                </div>
              </td>
            </>
          );
        }}
      </Table>
      <BanAdminModal
        isShown={openModal === 'ban'}
        onCloseComplete={() => setOpenModal(false)}
      />
       <AddNewAdminModal
        isShown={openModal === 'add'}
        onCloseComplete={() => setOpenModal(false)}
      />
      <ViewAdminDetails
        isShown={openModal === 'view'}
        onCloseComplete={() => setOpenModal(false)}
      />
    </>
  );
};

export default AdminTable;
