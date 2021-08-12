<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    
    <mainTabBar/>
  </div>
</template>

<script>
import mainTabBar from './components/content/MainTabBar.vue';
export default {
  components: { mainTabBar },

  data() {
    return {
      
    };
  },

};
</script>

<style>
@import url('assets/css/base.css');

</style>
