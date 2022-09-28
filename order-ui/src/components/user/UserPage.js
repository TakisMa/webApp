import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import OrderTable from './OrderTable'
import ItemTable from '../item/ItemTable'
import AuthContext from '../context/AuthContext'
import { itemApi } from '../api/ItemApi'
import { handleLogError } from '../misc/Helpers'

class UserPage extends Component {
  static contextType = AuthContext

  state = {
    userMe: null,
    isUser: true,
    isLoading: false,
    orderDescription: '',
    itemName: '',
    itemCategory: '',
    itemCurrently: '',
    itemBuyPrice: '',
    itemDescription: '',
    bidAmount: ''
  }

  componentDidMount() {
    const Auth = this.context
    const user = Auth.getUser()
    const isUser = user.data.rol[0] === 'USER'
    this.setState({ isUser })

    this.handleGetUserMe()
  }

  handleInputChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleGetUserMe = () => {
    const Auth = this.context
    const user = Auth.getUser()

    this.setState({ isLoading: true })
    itemApi.getUserMe(user)
        .then(response => {
          this.setState({ userMe: response.data })
        })
        .catch(error => {
          handleLogError(error)
        })
        .finally(() => {
          this.setState({ isLoading: false })
        })
  }

  handleCreateOrder = () => {
    const Auth = this.context
    const user = Auth.getUser()

    let { orderDescription } = this.state
    orderDescription = orderDescription.trim()
    if (!orderDescription) {
      return
    }

    const order = { description: orderDescription }
    itemApi.createOrder(user, order)
      .then(() => {
        this.handleGetUserMe()
        this.setState({ orderDescription: '' })
      })
      .catch(error => {
        handleLogError(error)
      })
  }

  handeCreateItem = () => {
    const Auth = this.context
    const user = Auth.getUser()

    let { itemName, itemCategory, itemCurrently, itemBuyPrice, itemDescription } = this.state
    itemName = itemName.trim();
    itemCategory = itemCategory.trim();
    itemDescription = itemDescription.trim()
    if (!itemName || !itemCategory || !itemCurrently || !itemDescription) {
      return
    }

    const item = {
      name: itemName,
      category: itemCategory,
      currently: itemCurrently,
      buyPrice: itemBuyPrice,
      description: itemDescription
    }
    itemApi.createItem(user, item)
      .then(() => {
        this.handleGetUserMe()
        this.setState({
          itemName: '',
          itemCategory: '',
          itemCurrently: '',
          itemBuyPrice: '',
          itemDescription: ''
        })
      })
      .catch(error => {
        handleLogError(error)
      })
  }

  handleUpdateBid = (itemId) => {
    const Auth = this.context
    const user = Auth.getUser()

    let { itemName, bidAmount } = this.state

    const newBid = {
      itemId: itemId,
      newAmount: bidAmount
    }
    console.log(`newBid.name: ${newBid.name}\nnewBid.amount: ${newBid.newAmount}`)
    itemApi.updateBid(user, newBid)
      .then(() => {
        this.handleGetUserMe()
        this.setState({
          itemName: '',
          bidAmount: ''
        })
      })
      .catch(error => {
        handleLogError(error)
      })

  }

  render() {
    if (!this.state.isUser) {
      return <Redirect to='/' />
    } else {
      const { userMe, isLoading, orderDescription, itemName, itemCategory, itemCurrently, itemBuyPrice, itemDescription, bidAmount } = this.state
      return (
        <Container>
          <ItemTable
            items={userMe && userMe.items}
            isLoading={isLoading}
            itemName={itemName}
            itemCategory={itemCategory}
            itemCurrently={itemCurrently}
            itemBuyPrice={itemBuyPrice}
            itemDescription={itemDescription}
            bidAmount={bidAmount}
            handleCreateItem={this.handeCreateItem}
            handleInputChange={this.handleInputChange}
            handleUpdateBid={this.handleUpdateBid}
          />

          <OrderTable
            orders={userMe  && userMe.orders}
            isLoading={isLoading}
            orderDescription={orderDescription}
            handleCreateOrder={this.handleCreateOrder}
            handleInputChange={this.handleInputChange}
          />
        </Container>
      )
    }
  }
}

export default UserPage