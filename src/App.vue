<template>
  <div id="app">
    <!-- 阻止detail页面 也保留原来状态  exclude='vue页面的 name'-->
    <keep-alive exclude="MarketDetail">
      <router-view />
    </keep-alive>
    <mainTabBar />
  </div>
</template>

<script>
import mainTabBar from './components/content/MainTabBar.vue'
export default {
  components: { mainTabBar },

  data() {
    return {}
  },
}
</script>

<style>
@import url('assets/css/base.css');
</style>
