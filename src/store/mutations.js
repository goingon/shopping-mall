import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  // mutations唯一的目的就是修改state中的状态
  // mutations中的方法功能尽可能单一
  // mutations里面的操作可以被跟踪

  //给商品product数量+1
  [ADD_COUNTER](state, product) {
    product.count++
  },

  //在store中新增一条商品数据product
  [ADD_TO_CART](state, product) {
    product.count = 1
    product.isChecked = true
    state.cartList.push(product)
  }
}