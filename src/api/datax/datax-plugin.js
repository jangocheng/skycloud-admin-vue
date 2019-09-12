import request from '@/router/axios';
import {baseUrl} from '@/config/env';

// datax插件api

export function getList(params) {
  return request({
    url: '/dataxPlugin',
    method: 'get',
    params
  })
}

export function fetchPlugin(params) {
  return request({
    url: '/dataxPlugin/' + params,
    method: 'get'
  })
}

export function updatePlugin(data) {
  return request({
    url: '/dataxPlugin/',
    method: 'put',
    data
  })
}

export function createPlugin(data) {
  return request({
    url: '/dataxPlugin/',
    method: 'post',
    data
  })
}

export function deletePlugin(data) {
  return request({
    url: '/dataxPlugin/',
    method: 'delete',
    params: data
  })
}