import axios from 'axios'

const service = axios.create({
    baseURL: '/api',
    timeout: 1000 * 60
})

service.interceptors.request.use(
    config => config,
    error => {
        console.error(error) // for debug
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        console.error('err', error.response) // for debug
        return Promise.reject(error)
    }
)

export default service
