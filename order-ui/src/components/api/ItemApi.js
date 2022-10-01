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
  return instance.delete(`/api/users/${username}`, {
    headers: { 'Authorization': bearerAuth(user) }
  })
}

function enableUser(user, username) {
  return instance.put(`/api/users/${username}`, {
    headers: { 
      'Content-type': 'application/json',
      'Authorization': bearerAuth(user) 
    }
  })
}

function getItems(text, currentlyLow, currentlyHigh) {
  const url = text ? `/api/items?text=${text}&currentlyLow=${currentlyLow}&currentlyHigh=${currentlyHigh}` : '/api/items'
  return instance.get(url)
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