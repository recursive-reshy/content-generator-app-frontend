import axiosClient from '../axiosClient'

import API_ENDPOINTS from './apiConfig'

const postMessage = () => axiosClient.post( API_ENDPOINTS.messages.postMessage )

export {
  postMessage
}