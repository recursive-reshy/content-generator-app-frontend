import axios from 'axios'

const axiosClient = axios.create( 
  { baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  }
)

// Request Interceptor - Attach Open AI Token
axiosClient.interceptors.request.use(
  async ( config ) => {
    if ( process.env.REACT_APP_OPENAI_API_KEY ) {
      config.headers.Authorization = `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
    }
    // Check if the request data is an instance of FormData
    if (config.data instanceof FormData) {
      // Do not set Content-Type header; let the browser/axios handle it
      delete config.headers['Content-Type']
    }
    return config
  },
  ( error ) => Promise.reject(error)
)

export default axiosClient