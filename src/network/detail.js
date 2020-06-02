import request from './request'

// 获取详情页面信息
export function getDetailInfoes(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

// 获取推荐信息
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class goodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class shopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.shopName = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

export class goodParams {
  constructor(goodParams) {
    this.sizeParams = goodParams.rule.tables[0]
    this.factoryParams = goodParams.info.set
  }
}