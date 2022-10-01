import React from 'react'
import { Form, Tab } from 'semantic-ui-react'
import AdminItemTable from './AdminItemTable'
import AdminUserTable from './AdminUserTable'

const handleSearchUser = (users) => {
  let userList, searchTerm
  if (!users || users.length() == 0) {
    return users
  } else {
    <Form>
      <Form.Input
        icon='search icon'
        placeholder='Search' type='text'
        onChange={(e) => {
          searchTerm = e.target.value
        }}
      />

    </Form>
  }
}

function AdminTab(props) {
  const { handleInputChange } = props
  const { isUsersLoading, users, userUsernameSearch, handleDeleteUser, handleEnableUser, handleSearchUser } = props
  const { isItemsLoading, items, handleDeleteItem, itemCategorySearch } = props

  const panes = [
    {
      menuItem: { key: 'users', icon: 'users', content: 'Users' },
      render: () => (
        <Tab.Pane loading={isUsersLoading}>
          <AdminUserTable
            users={users}
            userUsernameSearch={userUsernameSearch}
            handleInputChange={handleInputChange}
            handleDeleteUser={handleDeleteUser}
            handleEnableUser={handleEnableUser}
            handleSearchUser={handleSearchUser}
          />
        </Tab.Pane>
      )
    },
    {
      menuItem: { key: 'items', icon: 'laptop', content: 'Items' },
      render: () => (
        <Tab.Pane loading={isItemsLoading}>
          <AdminItemTable
            items={items}
            handleDeleteItem={handleDeleteItem}
            itemCategorySearch={itemCategorySearch}
            handleInputChange={handleInputChange}
          />
        </Tab.Pane>
      )
    }
  ]

  return (
    <Tab menu={{ attached: 'top' }} panes={panes} />
  )
}

export default AdminTab