

<template>
  <!-- 判断一下只有当收到数据的时候才会渲染这个商品信息模块 -->
  <div id="GoodsInfo"
       v-if="Object.keys(goodsInfo).length !== 0">
    <!--上  -->
    <div class="top">
      <div class="title">{{goodsInfo.title}}</div>
      <div class="price">
        <span class="newprice">{{goodsInfo.price}}</span>
        <span class="oldprice"> {{goodsInfo.oldPrice}}</span>
        <span class="tag"
              v-if="goodsInfo.discountDesc.length > 0"
              :style="{backgroundColor:goodsInfo.discountBgColor}">{{goodsInfo.discountDesc}}</span>
      </div>
    </div>
    <!-- 中 -->
    <div class="center">
      <span v-for="item in goodsInfo.columns">{{item}}</span>
    </div>
    <!-- 下 -->
    <div class="bottom">
      <span v-for="item in goodsInfo.service">
        <img :src="':'+item.icon"
             alt="">
        {{item.name}} </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsInfo',

  data() {
    return {}
  },
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      },
    },
  },

  mounted() {},

  methods: {},
}
</script>
<style  scoped>
#GoodsInfo {
  padding: 10px 5px 0 5px;
  width: 100vw;
  background-color: white;
}
.top {
  margin-bottom: 5px;
}
.price {
  margin: 5px 0;
}
.price .newprice {
  color: var(--color-tint);
  font-size: 26px;
}
.price .oldprice {
  color: #ccc;
  text-decoration-line: line-through;
  font-size: 12px;
}
.price .tag {
  border-radius: 10px;
  padding: 0 4px;
  font-size: 12px;
  color: white;
  position: relative;
  top: -10px;
}
.center {
  display: flex;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
  font-size: 12px;
  color: rgb(165, 162, 162);
}
.center span {
  flex: 1;
}
.center span:nth-child(2) {
  text-align: center;
}
.center span:nth-child(3) {
  text-align: right;
}

.bottom {
  display: flex;
  padding: 20px 0;
  font-size: 12px;
}
.bottom span {
  flex: 1;
  text-align: center;
}
.bottom span img {
  width: 12px;
}
.bottom span:nth-child(1) {
  text-align: left;
}
.bottom span:last-child {
  text-align: right;
}
</style>