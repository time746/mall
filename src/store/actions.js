import {ADD_TO_CART, ADD_COUNTER} from "./mutation-type"

export default {
  addClick(context, data) {
    return new Promise((resolve, reject) => {
      let index = context.state.cartList.findIndex(item => {
        return item.iid == data.iid
      })
      if (index === -1) {
        context.commit(ADD_TO_CART, data)
        resolve("商品已添加到购物车")
      } else {
        context.commit(ADD_COUNTER, index)
        resolve("当前商品数量+1")
      }
    })
    
  }
}