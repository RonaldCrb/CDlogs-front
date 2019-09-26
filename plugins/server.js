import Axios from 'axios'
import Cookie from 'js-cookie'

const dev = false
const prodUrl = 'https://webiserver.herokuapp.com/api/v1'
const localUrl = 'http://localhost:3001/api/v1'
const theUrl = dev ? localUrl : prodUrl

let token;
let userId;

// Authentication Routes
export const signIn = payload => {
  return Axios.post(`${theUrl}/cdAuth/cdSignIn`, payload)
}

export const signUp = payload => {
  return Axios.post(`${theUrl}/cdAuth/cdSignUp`, payload)
}

export const verifyAuth = payload => {
  return Axios.post(`${theUrl}/cdAuth/verifyAuth`, payload)
}

// Smartlogs Routes
export const getSmartlogs = () => {
  token = Cookie.get('idToken')
  userId = Cookie.get('idUser')
  let axiosConfig = {
    headers: {
      Authorization: "Bearer " + token,
      UserId: userId
    }
  }
  return Axios.get(`${theUrl}/smartlogs`, axiosConfig)
}

export const createSmartlog = smartlog => {
  token = Cookie.get('idToken')
  userId = Cookie.get('idUser')
  let axiosConfig = {
    headers: {
      Authorization: "Bearer " + token,
      UserId: userId
    }
  }
  return Axios.post(`${theUrl}/smartlogs`, smartlog, axiosConfig)
}

export const deleteSmartlog = id => {
  token = Cookie.get('idToken')
  userId = Cookie.get('idUser')
  let axiosConfig = {
    headers: {
      Authorization: "Bearer " + token,
      UserId: userId
    }
  }
  return Axios.delete(`${theUrl}/smartlogs/${id}`, axiosConfig)
}

// userdata Routes
export const getUserData = () => {
  token = Cookie.get('idToken')
  userId = Cookie.get('idUser')
  let axiosConfig = {
    headers: {
      Authorization: "Bearer " + token,
      UserId: userId
    }
  }
  return Axios.get(`${theUrl}/cdUsers/${userId}`, axiosConfig)
}

export const createCertification = (certification) => {
  token = Cookie.get('idToken')
  userId = Cookie.get('idUser')
  let axiosConfig = {
    headers: {
      Authorization: "Bearer " + token,
      UserId: userId
    }
  }
  return Axios.put(`${theUrl}/cdUsers/${userId}`, certification, axiosConfig)
}

export const createContact = (contact) => {
  token = Cookie.get('idToken')
  userId = Cookie.get('idUser')
  let axiosConfig = {
    headers: {
      Authorization: "Bearer " + token,
      UserId: userId
    }
  }
  return Axios.put(`${theUrl}/cdUsers/${userId}`, contact, axiosConfig)
}

