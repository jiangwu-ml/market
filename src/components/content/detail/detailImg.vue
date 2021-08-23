<template>
  <div id="detailImg"
       v-if="Object.keys(detailInfo).length !== 0">
    <!-- 为何这个v-if要加在这里呢？因为渲染模板的时候 detailInfo还没加载出来。而且只要(detailInfo).length !== 0了，所有的数据都出来了-->
    <div class="desc">{{detailInfo.desc}}</div>

    <div class="title">{{detailInfo.detailImage[0].key}}</div>

    <div class="imgs">
      <img v-for="(item,index) in detailInfo.detailImage[0].list"
           :src="'http:'+item "
           :key="index"
           @load.stop="detailImgload">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image_num: 0,
    }
  },

  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      },
    },
  },

  methods: {
    // 监听图片是否加载完成
    detailImgload() {
      // 只有全部的image都load了，才向父组件传递以全部加载的讯息，并重新计算scroll
      this.image_num++ //节流阀
      if (this.image_num >= this.detailInfo.detailImage[0].list.length) {
        this.$emit('detailImagload')
      }
    },

    text() {
      console.log(this.detailInfo)
    },
  },
}
</script>
<style  scoped>
#detailImg {
  background-color: white;
  margin-top: 5px;
}
.desc {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.title {
  padding: 10px;
}
img {
  width: 100vw;
}
</style>