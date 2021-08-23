import {xhr} from '@/Internet/request'

export function gethomedata() {
  return xhr({
    url:'home/multidata/'
  })
}
export function getHomegoods(type,page) {
  return xhr({
    url: 'home/data/',
    params: {
      type:type,
      page:page,
      
    }
  })
}

