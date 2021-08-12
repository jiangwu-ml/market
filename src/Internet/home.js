import {xhr} from '@/Internet/request'

export function gethomedata() {
  return xhr({
    url:'/home/multidata'
  })
}
