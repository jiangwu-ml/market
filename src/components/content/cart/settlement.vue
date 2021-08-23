<template>
  <div id="Marketsettlement">
    <input type="checkbox"
           id="selectAll"
           ref="selectAll"
           @click='all_click'>全选
    <span>合计:￥{{sum}}</span>
    <span class="right">去计算({{sum_count}})</span>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Marketsettlement',
  data() {
    return {
      sum: 0,
      sum_count: 0,
    }
  },
  computed: {
    ...mapGetters(['goods_settlement', 'goods_num']),
  },
  methods: {
    all_click() {
      // 2\,监听全选按钮的状态，发送给子选项
      let res = this.$refs.selectAll.checked
      this.$bus.$emit('selectAllfun', res)
      // 根据全选按钮状态，直接给sum一个值
      if (res) {
        this.sum = this.goods_settlement
        this.sum_count = this.goods_num
      } else {
        this.sum = 0
        this.sum_count = 0
      }
    },
  },
  mounted() {
    this.$bus.$on('selectfun', ({ flag, sum, sum_count }) => {
      // 1\接受来自list的子选项的监听，如果都选中，则总指挥改为true，否则改为false
      this.$refs.selectAll.checked = flag

      //1.1 并将传回来的 sum 和sum_count显示到页面
      this.sum = sum
      this.sum_count = sum_count
    })
  },
}
</script>
<style  scoped>
#Marketsettlement {
  height: 30px;
  background-color: white;
  border: 1px solid #ccc;
  border-left: 0;
  border-right: 0;
  width: 100vw;
  line-height: 30px;
  padding-left: 10px;
}
.right {
  width: 30%;
  text-align: center;
  background-color: var(--color-high-text);
}
</style>