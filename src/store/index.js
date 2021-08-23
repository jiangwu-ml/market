import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartGoods: [],
  },
  mutations: {
    addGoods (state,payload) {
      state.cartGoods.push(payload)
    },
    addGoodsNum (state,iid) {
      // 为何？我认为这里传过来的不过是个 state.cartGoods 的某个元素的拷贝对象

      // --------因为。这里的state传进来的时候直接指向的原来的地址，因为这里面的方法能直接改变state的数据的值。同理，里面的所有的指向的都是原数据的地址
      // oldgood.count++;
      // for (const item of state.cartGoods) {
      //   if (item.iid === iid) {
      //     item.count++
      //   }
      // }这里的for of 的item 不能直接用来改变state的值，最好直接使用for循环

      for (let i = 0; i < state.cartGoods.length; i++){
        if (state.cartGoods[i].iid === iid) {
          state.cartGoods[i].count++
        }
      }
    }
  },
  actions: {
    add ({ commit, state }, payload) {
      // find函数的作用是查找数组中是否有符合条件的数据，并返回该数据
      return new Promise((resolve) => {
        let oldgood = state.cartGoods.find((item) => {
          return item.iid == payload.iid
        })
        if (oldgood) {
          commit('addGoodsNum',oldgood.iid);
          resolve('此商品个数+1')
        } else {
          payload.count = 1;
          commit('addGoods', payload)
          resolve('添加新商品')
          
        }
      })
     
      
    }
  },
  getters: {
    list_length (state) {
      return state.cartGoods.length
    },
    goods_num (state) {
      let num = 0;
      for (const item of state.cartGoods) {
        num+=item.count
      }
      return num
    },
    goods_settlement (state) {
      let sum = 0;
      for (const item of state.cartGoods) {
        sum+= item.count* parseFloat(item.unitPrice)
      }
      return sum
    }
  }
})
