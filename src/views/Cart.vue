<template>
  <div>
    <router-view/>
    <topBar>
      <template v-slot:center>
        <div class="cart-top">
        {{topbar}}({{counter}})
        </div>
      </template>
    </topBar>

    <div class="cart">
      购物车
    </div>
  </div>
</template>
<script>
import topBar from '@/components/common/topBar/topbar.vue'

export default {
  components:{
    topBar,
    
  },
  data() {
    return {
      topbar:'购物车',
      counter:0,
    };
  },

};
</script>
<style scoped>
  .cart{
    margin-top: 50px;
  }
</style>
