<template>
  <div id="detailRecommend"
       v-if="goods.length !=0">

    <a class="goodsItem"
       v-for="item in goods"
       :href="item.item_url"
       :key="item.item_id">
      <img :src="item.image"
           @load="imgload">
      <div class="bottom">
        <p>{{item.title.substr(0,11)+'...'}}</p>
        <div class="price">
          <span>￥{{item.price}}</span>❤<span>{{item.cfav}}</span>
        </div>
      </div>
    </a>

  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0,
    }
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    imgload() {
      this.num++ //节流
      if (this.num == this.goods.length) {
        this.$emit('recommendload')
      }
    },
  },
}
</script>
<style  scoped>
#detailRecommend {
  background-color: rgb(252, 249, 249);
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}
.goodsItem {
  flex: 40%;
  margin: 5px;
  height: 45vh;

  position: relative;
}
img {
  width: 100%;
}
.title {
  font-weight: 900;
  border-bottom: 1px solid #ccc;
}
.bottom {
  text-align: center;
  font-size: 14px;

  position: absolute;
  bottom: 0;
}
</style>