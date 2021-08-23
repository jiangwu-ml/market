<template>
  <div id="detailShopInfo">
    <div class="top">
      <img :src="shopInfo.shopLogo">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="center clear-fix">
      <div class="left">
        <div class="sell">
          {{cSells}} <br>
          销售总量
        </div>
        <div class="goods">
          {{shopInfo.cGoods}} <br>
          全部宝贝
        </div>
      </div>

      <div class="right">
        <p v-for="item in shopInfo.score">
          <span class="des">{{item.name}}</span>
          <span class='score'
                :style="{color: item.isBetter===true ? 'red':'green' }">{{item.score}}</span>
          <span class='level'
                :style="{backgroundColor: item.isBetter===true ? 'red':'green' }">{{ item.isBetter===true ? '高':'低' }}</span>

        </p>
      </div>
    </div>
    <div class="bottom">
      <button>进店逛逛</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MarketShopinfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    cSells() {
      return (this.shopInfo.cSells / 10000).toFixed(1) + '万'
    },
  },
}
</script>
<style  scoped>
#detailShopInfo {
  margin-top: 5px;
  padding: 10px;
  background-color: white;
}
.top img {
  width: 30px;
  border-radius: 100px;
  margin-right: 10px;
  vertical-align: middle;
}
.top {
  font-weight: 300;
}

.center {
  margin-top: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 12px;
}
.right {
  flex: 1;
}
.right .score {
  display: inline-block;
  width: 50px;
  text-align: left;
  padding-left: 10px;
}
.right span {
  margin: 5px 0;
}
.level {
  color: white;
}
.left {
  flex: 1;
  display: flex;
}
.goods,
.sell {
  flex: 1;
}
.goods {
  border-right: 1px solid #ccc;
}
button {
  background-color: rgb(235, 234, 234);
  width: 200px;
  text-align: center;
  border: 0;
  font-size: 16px;
  height: 40px;
  border-radius: 10px;
}
.bottom {
  text-align: center;
  padding: 10px 0;
}
</style>