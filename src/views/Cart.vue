<template>
  <div>
    <router-view />
    <!-- 顶部栏 -->
    <topBar :bcgcolor='"#5776ff"'>
      <template v-slot:center>
        <div class="cart-top">
          {{topbar}}({{list_length}})
        </div>
      </template>
    </topBar>

    <!-- 列表 -->
    <cartlist class="cartlist" />

    <!-- 底部结算 -->
    <settlement class="settlement" />

  </div>
</template>
<script>
import topBar from '@/components/common/topBar/topbar.vue'
import settlement from '@/components/content/cart/settlement.vue'
import cartlist from '@/components/content/cart/cartlist.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    topBar,
    settlement,
    cartlist,
  },
  data() {
    return {
      topbar: '购物车',
      cartGoods: this.$store.state.cartGoods,
    }
  },
  computed: {
    ...mapGetters(['list_length', 'goods_num']),
  },
}
</script>
<style scoped>
.cart {
  margin-top: 50px;
}
.cartlist {
  margin-top: 40px;
}
.settlement {
  position: fixed;
  bottom: 50px;
}
</style>
