<template>

  <div class="goodlist">
    <div class="goodlist-item"
         v-for="(item ,index) in goods"
         :key="item.iid"
         @click="itemclick($event,item.iid)">
      <img :src="item.show.img"
           @load="loadimg">
      <div>
        <p>{{item.title.substr(0,12)+'...'}}</p>

        <span>￥{{item.price}}</span><span></span>❤️<span>{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      },
    },
    itemurl: '',
  },
  methods: {
    // 点击跳转到详情页面，由于这里的每个item跳转的页面不一样，所以要加个参数传进来
    itemclick(event, iid) {
      this.$router.push(this.itemurl + '/' + iid)
    },

    // 解决的问题：
    // scroll会计算content的height来计算可滚动距离。由于图片的加载属于异步任务，而计算高度的是同步任务。
    // 计算高度的时候，图片还没加载进来，只有gooditem的div结构。所以当图片渲染到页面上后。实际的content的height会边变高，导致没法看到全部的图片，又加载了30个...
    //
    // 解决的方法：
    // 核心思路--每次图片加载完，都让scroll  refresh()一次重新计算高度，就可以了
    // step1：监听图片的加载。 使用vue的方法   <img   @load='fun'>
    // step2: goodlist组件 fun里面发送一个事件，通知外部加载完毕。利用【事件总线】 this.$bus.$emit('事件名',参数)
    // step3：scroll组件使用     this.$bus.$on('事件名',()=>{})接收并重新刷新。
    // 但是为了封装 就在home中转了

    // refresh()解释：recalculate BetterScroll to ensure scroll work properly when the structure of DOM changes.
    //             重新计算BetterScroll以确保在DOM结构更改时滚动正常工作。
    //-------------事件总线----------------
    // 在main.js里    添加原型对象 Vue.prototype.$bus= new Vue()，这样大家都能访问了。就可实现跨组件层级之间的通信
    // step1：main.js里    添加原型对象 Vue.prototype.$bus= new Vue()
    // step2：分支组件  使用this.$bus.$emit('事件名',参数)  参数只一个
    // step3: 顶层组件   this.$bus.$on('事件名',(参数)={xx})接收。
    //--------------解决方案的优化---------------
    // step1：使用setTimeout  和clearTime 来取消重复发起的refresh()

    loadimg() {
      // console.log('图片加载了')
      this.$bus.$emit('loadimg')
    },
  },
}
</script>
<style  scoped>
.goodlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: white;
  padding: 1vw;
  font-size: 14px;
  z-index: -1;

  /* position: relative; */
}
.goodlist-item {
  position: relative;
  padding: 1vw;
  flex: 35%;
  height: 45vh;
}
img {
  width: 100%;
}
.goodlist-item div {
  text-align: center;
  position: absolute;
  bottom: 0;
}
/* p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
} */
</style>