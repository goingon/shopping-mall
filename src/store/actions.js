import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  // actions不要直接操作state里面的数据，要直接调用mutations里面的方法去操作

  //做了两件事：1、增加商品payload 2、数量count++, 所以一般放在actions
  /* 原始写法
  addCart(context, payload) {
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if (oldProduct) {
      context.commit('addCount', oldProduct)
    } else {
      payload.count = 1
      context.commit('addProduct', payload)
    }
  }*/
  // 把context解构赋值
  addCart({ state, commit }, payload) {
    // 返回一条promise，处理成功后的事务
    return new Promise((resolve, reject) => {
      let oldProduct = state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        commit(ADD_COUNTER, oldProduct)
        resolve('已有商品数量 +1')
      } else {
        commit(ADD_TO_CART, payload)
        resolve('添加一条商品信息')
      }
    })
  }
}