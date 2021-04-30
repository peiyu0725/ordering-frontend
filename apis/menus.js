import request from '../utils/request'

export function fetchMenu() {
    return request({
        url: '/v1/menus',
    })
}