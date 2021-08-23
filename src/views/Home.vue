<template>
  <div id="homewrapper">
    <!-- <router-view /> -->
    <!-- 这里是顶部导航栏 -->
    <topBar :bcgcolor='topbarcolor'>
      <template v-slot:center>
        <div class="home-top">
          {{topbar}}
        </div>
      </template>
    </topBar>
    <!--totop  -->
    <to-top :color='totopcolor'
            v-show="totopisshow"
            @click.native='clickToTop' />
    <!-- tab control -->
    <tab-control :titles="tabControlTitle"
                 @tabcontrol_click='getTabControlIndex'
                 v-show="tabControlisshow"
                 ref='tabcontrol1' />
    <!-- scroll -->
    <bscroll id="homescroll"
             ref="homescroll"
             :probe-type='3'
             @onscroll='onscroll'
             @loadMore='loadMore'>

      <!-- 这里是主体部分 -->
      <div class="home">
        <!-- banner -->
        <home-swiper :picList='bannerlist'
                     @swiperImageLoad='swiperImageLoad' />
        <!-- recommend -->
        <recommend :list='recommendlist' />
        <!-- feature -->
        <feature />
        <!-- tabcontrol -->
        <tab-control :titles="tabControlTitle"
                     @tabcontrol_click='getTabControlIndex'
                     ref="tabcontrol2" />
        <!-- goodlist -->
        <good-list :goods='goods[currentTabControl].list'
                   itemurl="/detail" />

        <!-- <router-view/> -->
        <router-view />

      </div>
    </bscroll>
  </div>
</template>

<script>
// @ is an alias to /src
import topBar from '@/components/common/topBar/topbar.vue'
import tabControl from '@/components/common/tabControl/tabcontrol.vue'
import goodList from '@/components/common/goodList/GoodList.vue'
import { totop } from '@/common/const.js'
import bscroll from '@/components/common/scroll/scroll.vue'
import { gethomedata, getHomegoods } from '@/Internet/home.js'

import HomeSwiper from '@/components/common/swipe/Swipe.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../../node_modules/swiper/dist/css/swiper.css'
import Vue from 'vue'
Vue.use(VueAwesomeSwiper)

import recommend from '@/components/content/home/recommend.vue'
import feature from '@/components/content/home/feature.vue'

export default {
  name: 'Home',
  mixins: [totop],
  components: {
    topBar,
    HomeSwiper,
    recommend,
    feature,
    tabControl,
    goodList,
    bscroll,
  },
  data() {
    return {
      topbar: '首页',
      totopcolor: '#5776ff',
      totopisshow: false,
      tabControlisshow: false,
      topbarcolor: '#5776ff',
      currentTabControl: 'pop',
      tabControlTitleEnglish: ['pop', 'new', 'sell'],
      tabControlTitle: ['流行', '新款', '精选'],
      tabControloffsettop: 0,
      bannerlist: [],
      recommendlist: [],
      goods: {
        // 对于普通的key值加不加引号都一样，但是有连字符 x-x的、或者数字开头的就必须加引号
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      loadImgTimer: null,
      saveY: 0,
      position: { x: 0, y: 0 },
    }
  },
  methods: {
    // 获取home页面上部分的数据。并将逻辑操作放在自己的定义的methods里面。然后调用请求数据的ajax的方法gethomedata。实现逻辑和业务分离。
    gethomedata() {
      gethomedata()
        .then((res) => {
          // 这部分直接全部传过去，不做数据提取
          this.bannerlist = res.data.banner.list
          this.recommendlist = res.data.recommend.list
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // 获取home页面的goods模块的数据
    getHomegoods(type, page) {
      getHomegoods(type, page)
        .then((res) => {
          this.goods[type].list.push(...res.data.list) //这里使用了三点运算符来追加
          this.goods[type].page += 1
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 获取tabcontrol的tabindex
    getTabControlIndex(index) {
      console.log(index)
      //获取英文是为了传参给服务器获取新的数据
      this.currentTabControl = this.tabControlTitleEnglish[index]

      // 此时监听到了点击事件，但是无法判断是谁点击的，就 让两个tabcontrol都改变一下内部的currentindex变量，
      this.$refs.tabcontrol1.currentIndex = index
      this.$refs.tabcontrol2.currentIndex = index
    },

    // 这个函数，是从scroll组件里传递过来的，能 【监听】获取当前的的滚动位置position的函数
    // 判断回到顶部按钮是否展示
    onscroll(position) {
      if (position.y >= -1000) {
        this.totopisshow = false
      } else {
        this.totopisshow = true
      }
      // 判断tabControloffsettop的位置，是否需要展示出来 tabcontrol的替身
      if (-position.y >= this.tabControloffsettop) {
        // console.log('此时需要展示替身')
        this.tabControlisshow = true
      } else {
        this.tabControlisshow = false
      }
      // 记录当前的位置，并home页面离开的时候记录下来
      this.position = position
    },

    // 上拉加载更多
    loadMore() {
      //1、 再去请求一页数据，并保存进来
      console.log(this.currentTabControl)
      this.getHomegoods(
        this.currentTabControl,
        this.goods[this.currentTabControl].page + 1
      )
      //2、 数据请求到后，调用finishpullup
      this.$refs.homescroll.finishpullup()
    },

    // 当轮播图加载完后，获取到 tab-control 距离顶部的距离
    swiperImageLoad() {
      this.tabControloffsettop = this.$refs.tabcontrol2.$el.offsetTop
    },
  },

  // 在创建之后，利用axios 将数据请求过来,并保存在homevue实例的date中
  created() {
    this.gethomedata()
    this.getHomegoods('pop', this.goods.pop.page + 1)
    this.getHomegoods('new', this.goods['new'].page + 1)
    this.getHomegoods('sell', this.goods['sell'].page + 1)
  },

  // 在deactivated时记录下来 此时的位置，activated时再跳回去
  deactivated() {
    this.saveY = this.position.y
  },
  activated() {
    // 为何这里要加个  时间才能让 这玩意不自动从this.saveY  回到顶部？？？？？？
    this.$refs.homescroll.scroll.scrollTo(0, this.saveY, 0.1)
    // this.$refs.homescroll.refresh()
  },

  // 刷新要在挂载以后，调用refresh，这个函数属于监听函数因此会一直触发，不能放在methods里面
  // 为什么不放在scroll直接使用，因为scroll是个组件，要具有封装的通用性
  mounted() {
    //商品列表的加载 为了避免重复refresh(),给个定时器,当想要创建新的settimeout的时候，就先校验前一个执行了没。避免重复执行
    this.$bus.$on('loadimg', () => {
      if (this.loadImgTimer) clearTimeout(this.loadImgTimer)
      this.loadImgTimer = setTimeout(() => {
        // 为了能获取到homescroll才放在mounted里
        this.$refs.homescroll.refresh()
        console.log('loadimg  home里面')
      }, 500)
    })
  },
  //
  updated() {
    // 方法2：直接在页面dom发生改变后，就刷新一次，这种方法，更简单，而且不会产生那么多次的刷新，
    // this.$refs.homescroll.refresh() //这玩意有时候不生效的,
  },
}
</script>
<style  scoped>
/* .home {
  margin-top: 40px; 
 padding-bottom: 50px;   为了适用上拉加载更多
} */
.tabcontrol {
  position: sticky;
  top: 40px;
  z-index: 1;
}
#homescroll {
  height: calc(100vh - 90px);
  width: 100%;
  position: absolute;
  top: 40px;
  bottom: 50px;
}
#homewrapper {
  position: relative;
  height: 100vh;
}
.totop {
  /* position: absolute; */
  z-index: 1;
}
/* *{touch-action: none;}  */
</style>
