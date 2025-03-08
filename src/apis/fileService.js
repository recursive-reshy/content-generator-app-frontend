import axiosClient from '../axiosClient'

import API_ENDPOINTS from './apiConfig'

const uploadFiles = ( files ) => axiosClient.post( API_ENDPOINTS.files.uploadFiles, files )

export {
  uploadFiles
}