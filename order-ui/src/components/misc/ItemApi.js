import { instance } from './Axios'
import { bearerAuth } from './Helpers'

export const itemApi = {
  authenticate,
  signup,
  getUsers,
  deleteUser,
  getItems,
  deleteItem,
  createItem,
  getUserMe
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

function getItems(user, text) {
  const url = text ? `/api/items?text=${text}` : '/api/items'
  return instance.get(url, {
    headers: { 'Authorization': bearerAuth(user) }
  })
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

function getUserMe(user) {
  return instance.get('/api/users/me', {
    headers: { 'Authorization': bearerAuth(user) }
  })
}