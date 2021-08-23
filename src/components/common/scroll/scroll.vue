<template>
  <div class="wrapper"
       ref='wrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import bs from 'better-scroll'
export default {
  data() {
    return {
      scroll: null,
      flag: false,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    // 功能点：实现点击totop到达顶部
    // 1、将点击事件通过emit传送给home
    // 2、home 接受到后通过refs调用scroll的这个方法
    totop() {
      // scroll.scrollTo(x,y[时间 ms,behavior])
      // behavior的取值： smooth(平滑滚动),instant(瞬间滚动),默认值auto,实测效果等同于instant
      // 时间 毫秒
      this.scroll.scrollTo(0, 0, 1000)
    },

    // 实现一个页面多次上拉加载更多
    finishpullup() {
      this.scroll.finishPullUp()
    },

    //刷新scroll重新计算content高度
    refresh() {
      this.scroll.refresh()
    },
  },

  mounted() {
    this.scroll = new bs(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType, //监听位置，1 表示不监听   2 表示只监听鼠标在页面时候  3 表示任何滑动的时候
      pullUpLoad: true, //上拉加载更多
    })

    // 这里通过srcoll的监听事件和emit，实时发送当前的position出去了，这样就能从外部获取到数据了
    this.scroll.on('scroll', (position) => {
      this.$emit('onscroll', position)
    })

    // 实现功能：0、监听pullingUp事件
    // 1、当拉到底部的时候，通过emit通知home 并调用加载更多的方法
    // 2、数据加载完后，调用scroll.finishPullUp()
    this.scroll.on('pullingUp', () => {
      console.log('scroll pull up')
      this.$emit('loadMore')
    })
  },
}
</script>
<style  scoped>
.wrapper {
  overflow: hidden;
}
</style>