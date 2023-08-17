import request from '@/utils/request'

// 查询【请填写功能名称】列表
export function listDevice(query) {
  return request({
    url: '/system/device/list',
    method: 'get',
    params: query
  })
}

// 查询【请填写功能名称】详细
export function getDevice(id) {
  return request({
    url: '/system/device/' + id,
    method: 'get'
  })
}

// 新增【请填写功能名称】
export function addDevice(data) {
  return request({
    url: '/system/device',
    method: 'post',
    data: data
  })
}

// 修改【请填写功能名称】
export function updateDevice(data) {
  return request({
    url: '/system/device',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delDevice(id) {
  return request({
    url: '/system/device/' + id,
    method: 'delete'
  })
}
