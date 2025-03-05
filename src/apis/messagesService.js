import axiosClient from '../axiosClient'

import API_ENDPOINTS from './apiConfig'

const postMessage = ( message ) => axiosClient.post( API_ENDPOINTS.messages.postMessage, message )

export {
  postMessage
}