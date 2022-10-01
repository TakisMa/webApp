import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import AuthContext from '../context/AuthContext'
import { itemApi } from '../api/ItemApi'
import AdminTab from './AdminTab'
import { handleLogError } from '../misc/Helpers'

class AdminPage extends Component {
  static contextType = AuthContext

  state = {
    users: [],
    userUsernameSearch: '',
    itemCategorySearch: '',
    isAdmin: true,
    isUsersLoading: false,
    isItemsLoading: false,
    items: null,
  }

  componentDidMount() {
    const Auth = this.context
    const user = Auth.getUser()
    const isAdmin = user.data.rol[0] === 'ADMIN'
    this.setState({ isAdmin })

    this.handleGetUsers()
    this.handleGetItems()
  }

  handleInputChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleGetUsers = () => {
    const Auth = this.context
    const user = Auth.getUser()

    this.setState({ isUsersLoading: true })
    itemApi.getUsers(user)
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch(error => {
        handleLogError(error)
      })
      .finally(() => {
        this.setState({ isUsersLoading: false })
      })
  }

  handleDeleteUser = (username) => {
    const Auth = this.context
    const user = Auth.getUser()

    itemApi.deleteUser(user, username)
      .then(() => {
        this.handleGetUsers()
      })
      .catch(error => {
        handleLogError(error)
      })
  }

  handleEnableUser = (username) => {
    const Auth = this.context
    const user = Auth.getUser()

    itemApi.enableUser(user, username)
      .then(() => {
        this.handleGetUsers()
      })
      .catch(error => {
        handleLogError(error)
      })
  }


  handleGetItems = () => {
    this.setState({ isItemsLoading: true })
    itemApi.getAllItems()
      .then(response => {
        this.setState({ items: response.data })
      })
      .catch(error => {
        this.handleLogError(error)
      })
      .finally(() => {
        this.setState({ isItemsLoading: false })
      })
  }

  handleDeleteItem = (itemId) => {
    const Auth = this.context
    const user = Auth.getUser()

    itemApi.deleteItem(user, itemId)
      .then(() => {
        this.handleGetUsers()
      })
      .catch((error) => {
        this.handleLogError(error)
      })

  }


  render() {
    if (!this.state.isAdmin) {
      return <Redirect to='/' />
    } else {
      const { isUsersLoading, users, userUsernameSearch, items, isItemsLoading, itemCategorySearch } = this.state
      return (
        <Container>
          <AdminTab
            isUsersLoading={isUsersLoading}
            users={users}
            userUsernameSearch={userUsernameSearch}
            handleDeleteUser={this.handleDeleteUser}
            handleEnableUser={this.handleEnableUser}
            handleInputChange={this.handleInputChange}
            items={items}
            isItemsLoading={isItemsLoading}
            itemCategorySearch={itemCategorySearch}
            handleDeleteItem={this.handleDeleteItem}
          />
        </Container>
      )
    }
  }
}

export default AdminPage