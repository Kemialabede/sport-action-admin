import React from 'react'
import DashboardLayout from '../../components/layout/dashboardLayout'
import AggregateCard from '../dashboard/aggregateCard';
import UsersIcon from '../../assets/icons/total-admins.svg';
import AdminTable from './adminTable';

const Admin = () => {
  return (
    <DashboardLayout search>
          <div className="aggregateContainer">
        <AggregateCard count={'103'} title="Total admins" icon={UsersIcon} />
        <AggregateCard count={'70'} title="Active Uadmins" icon={UsersIcon} />
        <AggregateCard
          count={'5'}
          title="Inactive admins"
          icon={UsersIcon}
        />
      </div>
      <AdminTable />

    </DashboardLayout>
  )
}

export default Admin