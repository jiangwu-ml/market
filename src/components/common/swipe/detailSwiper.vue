<template>
  <div>
    <div class="wrapper">
      <swiper ref="mySwiper"
              :options="swiperOptions">
        <swiper-slide v-for="(item,index) in picList"
                      :key="index">
          <a href="#">
            <img :src="item"
                 @load="loadswiperimg">
          </a>
        </swiper-slide>
        <div class="swiper-pagination"
             slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailswiper', // 此处不能用Swiper作为name，否则报错
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination', // 轮播图的点
        loop: true, // 循环
        autoplay: 3000, //自动播放  3秒一换
      },
    }
  },
  props: {
    picList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    loadswiperimg() {
      this.$emit('loadimg')
    },
  },
}
</script>
<style  scoped>
.swiper-slide img {
  width: 100%;
  /* height: 100%; */
}
.wrapper {
  height: 40vh;
}
.wrapper .swiper-pagination-bullet-active {
  background-color: #fff;
}
/* 调整高度x */
.swiper-container {
  height: 100%;
}
</style>