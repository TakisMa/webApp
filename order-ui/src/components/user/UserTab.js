import React from 'react'
import { Tab } from 'semantic-ui-react'
import UserTable from './UserTable'
import OrderTable from './OrderTable'

function AdminTab(props) {

  const panes = [
    {
      menuItem: { key: 'users', icon: 'users', content: 'Users' },
      render: () => (
        <Tab.Pane loading={isUsersLoading}>
        </Tab.Pane>
      )
    },
    {
      menuItem: { key: 'orders', icon: 'laptop', content: 'Orders' },
      render: () => (
        <Tab.Pane loading={isOrdersLoading}>
          
        </Tab.Pane>
      )
    }
  ]

  return (
    <Tab menu={{ attached: 'top' }} panes={panes} />
  )
}

export default AdminTab