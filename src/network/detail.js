import {request} from "@/network/index.js"

export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: "/recommend"
  })
}

export class Goods {
  constructor(data) {
    this.title = data.itemInfo.title
    this.desc = data.itemInfo.desc
    this.price = data.itemInfo.lowNowPrice
    this.oldPrice = data.itemInfo.oldPrice
    this.discountDesc = data.itemInfo.discountDesc
    this.columns = data.columns
    this.services = data.shopInfo.services

  }
}

export class Shop {
  constructor(data) {
    this.logo = data.shopLogo
    this.name = data.name
    this.fans = data.cFans
    this.sells = data.cSells
    this.score = data.score
    this.goodsCount = data.cGoods
  }
}

export class Detail {
  constructor(data) {
    this.key = data.detailInfo.detailImage[0].key
    this.images= data.detailInfo.detailImage[0].list
    this.desc = data.detailInfo.detailImage[0].desc
  }
}

export class Params {
  constructor(data) {
    this.key = data.itemParams.info.set
    this.table = data.itemParams.rule.tables[0]
  }
}