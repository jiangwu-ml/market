<template>
  <div>
    <!-- 这里是顶部导航栏 -->
    <router-view/>
    <!-- 导航栏的颜色是动态指定的 -->
    <topBar :bcgcolor='topbarcolor'>
      <template v-slot:center>
        <div class="home-top">
        {{topbar}}
        </div>
      </template>
    </topBar>

    <!-- 这里是主体部分 -->
    <div class="home">
      <!-- banner -->
      <home-swiper :picList='bannerlist' />
      <!-- recommend -->
      <recommend :list='recommendlist' />
      <!-- feature -->
      <feature/>
      <!-- <router-view/> -->
      <router-view/>
      首页
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import topBar from '@/components/common/topBar/topbar.vue'
import { gethomedata } from '@/Internet/home.js'

import HomeSwiper from '@/components/common/swipe/Swipe.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../../node_modules/swiper/dist/css/swiper.css'
import Vue from 'vue'
Vue.use(VueAwesomeSwiper)

import recommend from '@/components/content/home/recommend.vue'

import feature from '@/components/content/home/feature.vue'

export default {
  name: 'Home',
  components: {
    topBar,
    HomeSwiper,
    recommend,
    feature,
  },
  data() {
    return {
      topbar:'首页',
      topbarcolor:'#5776ff',
      bannerlist:[],
      recommendlist:[],

    };
  },

  // 在创建之后，利用axios 将数据请求过来,并保存在homevue实例的date中
  created(){
    gethomedata()
    .then((res)=>{

      // 这部分直接全部传过去，不做数据提取
      this.bannerlist=res.data.banner.list;
      this.recommendlist=res.data.recommend.list;
      
      console.log(this.recommendlist);
      console.log(res);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}
</script>
<style  scoped>
  .home{
    margin-top: 50px;
  }
  
  /* *{touch-action: none;}  */
</style>
