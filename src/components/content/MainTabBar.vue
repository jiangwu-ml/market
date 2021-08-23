<template>
  <div id="nav">
    <tabBar>
      <!-- 这里为什么加上  :key="index"  是因为，diff算法的要求，为了区别每一个用v-for创建出来的组件 -->
      <tabBarItem v-for="(item,index) in tb"
                  :to_path='item[2]'
                  :key="index"
                  :active_color='tb_color'>
        <div :class="item[0]"></div>
        <div class="bot">{{item[1]}}</div>
      </tabBarItem>

    </tabBar>
  </div>
</template>



<script >
import tabBar from '@/components/common/tabBar/TabBar.vue'
import tabBarItem from '@/components/common/tabBar/TabBarItem.vue'
require('@/assets/font/iconfont.js')

export default {
  components: { tabBar, tabBarItem },
  data() {
    return {
      tb: [
        ['icon-home iconfont', '首页', '/home'],
        ['icon-cascades iconfont', '分类', '/category'],
        ['icon-cart iconfont', '购物车', '/cart'],
        ['icon-my iconfont', '我的', '/profil'],
      ],
      tb_color: '#5776ff',
      tb_comm_color: 'balck',
    }
  },
}
</script>
<style scoped>
@import '../../assets/font/iconfont.css';
#nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgb(205, 202, 198);
  z-index: 100;
}
.bot {
  height: 24px;
}
.iconfont {
  margin-top: 5px;
  font-size: 24px;
}
</style>