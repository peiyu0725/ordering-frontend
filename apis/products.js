import request from '../utils/request'

export function fetchProduct(id) {
    return request({
        url: `/v1/product/${id}`,
    })
}