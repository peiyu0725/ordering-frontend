import request from '../utils/request'

export function fetchCart() {
    return request({
        url: '/v1/carts',
    })
}