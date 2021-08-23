<template>
  <div id="detailBottom">
    <p class="l1 active">
      <span class="iconfont icon-smile"></span><br>
      <span>客服</span>
    </p>
    <p class="l2">
      <span class="iconfont icon-dianpu"></span><br>
      <span>店铺</span>
    </p>
    <p class="l3">
      <span class="iconfont icon-favorite"></span><br>
      <span>收藏</span>
    </p>
    <p class="r1"
       @click="addIntoCart">加入购物车</p>
    <p class="r2">立即购买</p>
  </div>
</template>
<script>
require('@/assets/font/iconfont.js')
export default {
  methods: {
    addIntoCart() {
      this.$emit('addIntoCart')
    },
  },
}
</script>


<style  scoped>
@import url('~@/assets/font/iconfont.css');
#detailBottom {
  position: fixed;
  bottom: 0;
  background-color: white;
  border-top: 1px solid #ccc;
  width: 100vw;
  height: 50px;

  display: flex;
  text-align: center;
}
.r1,
.r2 {
  line-height: 50px;
  font-size: 18px;
}
p {
  font-size: 18px;
  flex: 15;
}
.iconfont {
  font-size: 18px;
}
p:nth-child(4) {
  flex: 28;
  background-color: var(--color-high-text);
}
p:nth-child(5) {
  flex: 27;
  background-color: rgb(224, 145, 54);
}
p span,
p span::before {
  width: 100%;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
}
p .iconfont::before {
  font-size: 20px;
}
.active {
  color: var(--color-tint) !important;
}
</style>