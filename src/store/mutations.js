import {
  ADD_TO_CART,
  ADD_COUNTER,
  CHECKED_CLICK,
  CHECK_ALL_CLICK
} from "./mutation-type"

export default {
  [ADD_TO_CART](state, data) {
    data.count = 1
    data.checked = true
    state.cartList.push(data)
  },
  [ADD_COUNTER](state, data) {
    state.cartList[data].count += 1
  },
  [CHECKED_CLICK](state, iid) {
    let index = state.cartList.findIndex(item => {
      return item.iid == iid
    })
    state.cartList[index].checked = !state.cartList[index].checked
  },
  [CHECK_ALL_CLICK](state, boolean) {
    if (boolean) {
      state.cartList.forEach(item => {
        item.checked = false
      })
    } else {
      state.cartList.forEach(item => {
        item.checked = true
      })
    }

  }

}