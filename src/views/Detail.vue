<template>
  <div id="detail">
    <router-view />

    <!-- topBar -->
    <detail-top-bar id="detailtopbar"
                    ref="detailtopbar"
                    @topbarclick='topbarclick' />
    <!-- 回到顶部 -->
    <to-top @click.native="clickToTop"
            :color="'#3c61b0'"
            class="detailToTop"
            v-show="totopIsshow" />
    <!-- scroll -->
    <scroll id="detailScroll"
            ref="detailScroll"
            @onscroll='onscroll'
            :probe-type='3'>

      <!-- 主体部分 -->
      <div id="detailmain">
        <router-view />

        <!-- 轮播图 -->

        <detail-swiper :picList='swiperPic' />
        <!--  @loadimg='refreshscroll' -->
        <!-- 商品信息 -->
        <detail-goods-info :goodsInfo='goodsInfo' />
        <!-- 门店信息 -->
        <detail-shop-info :shopInfo='shopInfo' />
        <!-- 商品的图片 -->
        <detail-img :detailInfo='detailInfo'
                    ref="detailImage"
                    @detailImagload='refreshscroll' />
        <!-- 评论 -->
        <detail-comment :detailComment='detailComment'
                        ref="detailComment" />
        <!-- 商品的参数 -->
        <detail-params :detailParams='detailParams'
                       ref="detailParams" />
        <!-- 推荐信息 -->
        <detail-recommend :goods='detailRecommend'
                          ref="detailRecommend"
                          @recommendload='refreshscroll' />
      </div>

    </scroll>

    <!-- 底部的加购 -->
    <detail-bottom @addIntoCart='addIntoCart' />
  </div>
</template>
<script>
import { mapActions } from 'vuex'

import {
  getDetailDate,
  goodsInfo,
  shopInfo,
  getDetailRecommend,
} from '@/Internet/detail'

import detailTopBar from '@/components/content/detail/detailTopBar.vue'
import detailGoodsInfo from '@/components/content/detail/goodsInfo.vue'
import detailShopInfo from '@/components/content/detail/shopInfo.vue'
import detailImg from '@/components/content/detail/detailImg.vue'
import detailParams from '@/components/content/detail/detailParams.vue'
import detailComment from '@/components/content/detail/detailComment.vue'
import detailRecommend from '@/components/content/detail/detailRecommend.vue'
import detailBottom from '@/components/content/detail/detailBottom.vue'

import { totop } from '@/common/const.js' //mixin
import scroll from '@/components/common/scroll/scroll.vue'

import detailSwiper from '../components/common/swipe/detailSwiper.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../../node_modules/swiper/dist/css/swiper.css'
import Vue from 'vue'
Vue.use(VueAwesomeSwiper)

export default {
  name: 'MarketDetail',
  mixins: [totop],
  data() {
    return {
      iid: '',
      swiperPic: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      detailParams: {},
      detailComment: {},
      detailRecommend: [],
      totopIsshow: false,
      topbarTargetY: [0, 1000, 2000, 3000],
    }
  },
  components: {
    detailTopBar,
    detailSwiper,
    detailGoodsInfo,
    detailShopInfo,
    detailImg,
    detailParams,
    detailComment,
    detailRecommend,
    detailBottom,
    scroll,
  },
  methods: {
    // mapActions
    ...mapActions(['add']),

    // topbar的标题和位置联动,获取当前的index，并跳转到指定的position
    // 1、topbar点击时，$emit（）出当前的index。
    // 2、detail页面接受index，并滚动到指定的位置
    // 3、在所有图片全部加载完成后，获取到指定element元素的 $el.offsetTop并存储,就能完成指定位置的计算
    // 4、监听页面滚动，当position.y属于每个范围内，通过props传递对应的的index 给 子组件
    // 5、 子组件，将获取到的index 赋值给currentTopIndex。来改变颜色
    topbarclick(i) {
      this.$refs.detailScroll.scroll.scrollTo(0, this.topbarTargetY[i], 1000)
      console.log(this.topbarTargetY[i])
    },

    // scroll的滚动监听函数的 向外暴露
    onscroll(position) {
      const y = position.y
      // 控制totop按钮的是否展示
      if (y <= -1000) {
        this.totopIsshow = true
      } else {
        this.totopIsshow = false
      }

      // 控制topBar的当前的currentTopIndex的值
      // let length = this.topbarTargetY.length

      // for (let i = 0; i < length - 1; i++) {
      //   // 就是如果在同一片区域滚动，则不会给子组件的currentTopindex重复赋值
      //   if (
      //     this.$refs.detailtopbar.currentTopIndex !== i &&
      //     y <= this.topbarTargetY[i] &&
      //     y >= this.topbarTargetY[i + 1]
      //   ) {
      //     this.$refs.detailtopbar.currentTopIndex = i
      //     console.log(i)
      //   }
      // }

      //  为了优化，需要阻止这种 由于滚动产生的不停的赋值的行为
      if (
        y <= 0 &&
        y > this.topbarTargetY[1] &&
        this.$refs.detailtopbar.currentTopIndex !== 0
      ) {
        this.$refs.detailtopbar.currentTopIndex = 0
        console.log(this.$refs.detailtopbar.currentTopIndex)
      }
      if (
        y <= this.topbarTargetY[1] &&
        y > this.topbarTargetY[2] &&
        this.$refs.detailtopbar.currentTopIndex !== 1
      ) {
        this.$refs.detailtopbar.currentTopIndex = 1
        console.log(this.$refs.detailtopbar.currentTopIndex)
      }
      if (
        y <= this.topbarTargetY[2] &&
        y > this.topbarTargetY[3] &&
        this.$refs.detailtopbar.currentTopIndex !== 2
      ) {
        this.$refs.detailtopbar.currentTopIndex = 2
        console.log(this.$refs.detailtopbar.currentTopIndex)
      }
      if (
        y <= this.topbarTargetY[3] &&
        this.$refs.detailtopbar.currentTopIndex !== 3
      ) {
        this.$refs.detailtopbar.currentTopIndex = 3
        console.log(this.$refs.detailtopbar.currentTopIndex)
      }
    },
    // 刷新scroll
    refreshscroll() {
      // detailImage的加载造成的refreshscroll,只进行了一次，因为节流了,
      // detailRecommend 的加载造成的刷新，也只进行了一次因为节流了。目前看是调用了2次
      this.$refs.detailScroll.refresh()

      // 获取指定元素的位置
      this.topbarTargetY[0] = 0
      this.topbarTargetY[1] = -this.$refs.detailComment.$el.offsetTop
      this.topbarTargetY[2] = -this.$refs.detailParams.$el.offsetTop
      this.topbarTargetY[3] = -this.$refs.detailRecommend.$el.offsetTop
      this.topbarTargetY[4] = Number.MAX_VALUE
    },

    // 功能点：点击添加到购物车
    //1、 点击添加到购物车，弹出toust弹窗
    // 2、向vuex里添加一条数据 this.$store.commit('方法',{参数})
    // 3、将这条数据展示到购物车页面

    // 疑问：如果我不用vuex呢？，不好实现
    addIntoCart() {
      // toast弹窗

      const add_good = {
        title: this.goodsInfo.title,
        unitPrice: this.goodsInfo.newprice,
        desc: this.goodsInfo.desc,
        img: this.swiperPic[0], //这是轮播图的第一张图
        iid: this.iid,
      }

      this.add(add_good).then((res) => {
        console.log(res)
        this.$toast.show(res, 1500)
      })
      // this.$store.dispatch('add', add_good).then((res) => {
      //   console.log(res)
      // })
    },
  },
  created() {
    // 1、获取页面路由信息里的 iid
    this.iid = this.$route.params.iid

    // 2、将iid作为参数去服务器请求数据
    getDetailDate(this.iid)
      .then((res) => {
        // 3、处理轮播图的资源
        this.swiperPic = res.result.itemInfo.topImages
        for (let i = 0; i < this.swiperPic.length; i++) {
          this.swiperPic[i] = 'http:' + this.swiperPic[i]
        }

        // 4、获取从axios整合过的goodsInfo数据
        this.goodsInfo = new goodsInfo(
          res.result.itemInfo,
          res.result.columns,
          res.result.shopInfo.services
        )
        // 5、获取门店的信息
        this.shopInfo = new shopInfo(res.result.shopInfo)

        // 6、获取很多详情图片
        this.detailInfo = res.result.detailInfo

        // 7、获取商品的参数信息
        this.detailParams = res.result.itemParams

        // 8、获取评论信息
        if (res.result.rate.list.length > 0) {
          this.detailComment = res.result.rate.list[0]
        }
      })
      .catch((err) => {
        console.log(err)
      })

    // 9、获取推荐资源
    getDetailRecommend().then((res) => {
      this.detailRecommend = res.data.list
    })
  },
  updated() {
    //解决:轮播图img加载过慢。导致scroll计算content高度出现的问题
    //方法1： 直接在updated里使用，因为图片高度只有1次即可
    // 这句话只执行1次，不适用与多个图片的情况
    this.refreshscroll()
  },
}
</script>
<style  scoped>
#detail {
  height: 100vh;
  position: relative;
}
#detailScroll {
  height: calc(100vh - 90px);
  width: 100%;
  position: absolute;
  top: 40px;
  bottom: 40px;
}
#detailtopbar {
  z-index: 300;
}
#detailmain {
  margin-bottom: 20px;
}
.detailToTop {
  z-index: 100;
}
#detailBottom {
  z-index: 1000;
}
</style>


