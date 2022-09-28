import { instance } from './Axios'
import { bearerAuth } from '../misc/Helpers'

export const itemApi = {
  authenticate,
  signup,
  getUsers,
  deleteUser,
  enableUser,
  getItems,
  getAllItems,
  deleteItem,
  createItem,
  updateBid,
  getUserMe,
  getOrders,
  deleteOrder,
  createOrder
}

function authenticate(username, password) {
  return instance.post('/auth/authenticate', { username, password }, {
    headers: { 'Content-type': 'application/json' }
  })
}

function signup(user) {
  return instance.post('/auth/signup', user, {
    headers: { 'Content-type': 'application/json' }
  })
}

function getUsers(user, username) {
  const url = username ? `/api/users/${username}` : '/api/users'
  return instance.get(url, {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function deleteUser(user, username) {
  console.log(`[DELETE]: User is: ${user} with username: ${username}`)
  return instance.delete(`/api/users/${username}`, {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function enableUser(user, username) {
  return instance.patch(`/api/users/${username}`, {
    headers: { 
      'Content-type': 'application/json',
      'Authorization': bearerAuth(user) 
    }
  })
}

function getItems(user, text) {
  const url = text ? `/api/items?text=${text}` : '/api/items'
  return instance.get(url, {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function getAllItems() {
  return instance.get(`/api/items`)
}

function deleteItem(user, itemId) {
  return instance.delete(`/api/items/${itemId}`, {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function createItem(user, item) {
  return instance.post('/api/items', item, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': bearerAuth(user)
    }
  })
}

function updateBid(user, newBid) {
  console.log(`newBid.name: ${newBid.name}\nnewBid.amount: ${newBid.newAmount}`)
  return instance.post(`/api/bids`, newBid, {
    headers: { 
      'Content-type': 'application/json',
      'Authorization': bearerAuth(user) 
    }
  })
}

function getUserMe(user) {
  return instance.get('/api/users/me', {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function getOrders(user, text) {
  const url = text ? `/api/orders?text=${text}` : '/api/orders'
  return instance.get(url, {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function deleteOrder(user, orderId) {
  return instance.delete(`/api/orders/${orderId}`, {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function createOrder(user, order) {
  return instance.post('/api/orders', order, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': bearerAuth(user)
    }
  })
}