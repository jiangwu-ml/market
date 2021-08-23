import { xhr } from './request'

export function getDetailDate (iid) {
  return xhr({
    url:'/detail/',
    params: {
      iid,
    }
  })
}

export function getDetailRecommend () {
  return xhr({
    url: '/recommend',
  })
}

export class goodsInfo{
  constructor(itemInfo, columns, service) {
    // 模块1
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    // 模块2
    this.columns = columns;//数组
    // 模块3
    this.service = service;//对象数组

    // 添加到购物车需要
    this.newprice = itemInfo.lowNowPrice
    this.desc = itemInfo.desc
    
  }
}

export class shopInfo{
  constructor(shopInfo) {
    this.name = shopInfo.name;
    this.cGoods = shopInfo.cGoods;
    this.cSells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.shopLogo='http:'+shopInfo.shopLogo
  }
}