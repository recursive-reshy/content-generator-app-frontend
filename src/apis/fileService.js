import axiosClient from '../axiosClient'

import API_ENDPOINTS from './apiConfig'

const { filesApis: { files, deleteFile: deleteEndpoint } } = API_ENDPOINTS

const uploadFiles = ( filesData ) => axiosClient.post( files, filesData )

const getFiles = () => axiosClient.get( files )

const deleteFile = ( fileName ) => axiosClient.delete( deleteEndpoint.replace( ':fileName', fileName ) )

export {
  uploadFiles,
  getFiles,
  deleteFile
}