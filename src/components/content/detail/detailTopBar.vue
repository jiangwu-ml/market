<template>
  <div>
    <topBar class="dtb">
      <template v-slot:left>
        <div class="iconfont icon-arrow-left-bold"
             @click="backclick()">
        </div>
      </template>
      <template v-slot:center>
        <div class="topselect">
          <span v-for="(item,i) in topBarselect"
                :class="{topBaractive : currentTopIndex === i}"
                @click="topbarclick(i)">
            {{item}}
          </span>
        </div>
      </template>
    </topBar>
  </div>
</template>

<script>
import topBar from '@/components/common/topBar/topbar.vue'
require('@/assets/font/iconfont.js')

export default {
  name: 'MarketDetail',
  data() {
    return {
      topBarselect: ['商品', '评论', '参数', '推荐'],
      currentTopIndex: 0,
    }
  },
  components: {
    topBar,
  },
  methods: {
    // 当点击topbar的文字时，改变点击tab的状态，并向外传递当前的index.方便滚动
    topbarclick(i) {
      this.$emit('topbarclick', i)
      this.currentTopIndex = i
      console.log(i)
    },
    // 当点击返回的时候，返回到上一页s
    backclick() {
      // this.$route.back()
      history.back()
    },
  },
}
</script>
<style  scoped>
@import url('~@/assets/font/iconfont.css');
.icon-arrow-left-bold {
  font-size: 30px;
}
.topselect {
  display: flex;
  text-align: center;
}
.topselect span {
  flex: 1;
}
.topBaractive,
.topBaractive a {
  color: var(--color-tint) !important;
}
.dtb {
  border-bottom: 1px solid #ccc;
}
</style>
