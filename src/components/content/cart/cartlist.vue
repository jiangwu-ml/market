<template>
  <div id="MarketCartlist">
    <scroll :probeType='3'
            id="carloistScroll"
            ref="carloistScroll">
      <label v-for="(item,i) in goodslist"
             class="item"
             :key="item.iid">
        <div class="lis_left">
          <input type="checkbox"
                 :value="item.iid"
                 v-model="select_goods"
                 @click="clickgood"
                 ref="selectUnit">
          <img :src="item.img"
               @load="imgload">
        </div>
        <div class="lis_right">
          <div class="title">
            {{item.title.substr(0,13)}}...
          </div>
          <div class="desc">{{item.desc.substr(0,16)}}...</div>
          <div class="price">
            <span class="unitprice">￥{{item.unitPrice}}</span>
            <span class="count">X{{item.count}}</span>
          </div>
        </div>
      </label>

    </scroll>
  </div>
</template>
<script>
import scroll from '@/components/common/scroll/scroll.vue'
export default {
  name: 'MarketCartlist',
  data() {
    return {
      goodslist: this.$store.state.cartGoods,
      select_goods: [],
    }
  },
  components: { scroll },
  methods: {
    imgload() {
      this.$refs.carloistScroll.refresh()
      console.log()
    },
    clickgood() {
      // 由于v-model的数据的处理会慢一些，所以要你加个定时器
      setTimeout(() => {
        console.log(this.select_goods)

        // 每次点击 都要计算当前选中的所有数据的额度
        let sum = 0
        let sum_count = 0
        for (const item of this.select_goods) {
          // 这里的item只是iid，因此要去找到这item的相关信息
          let curitem = this.goodslist.find((gooditem) => {
            return gooditem.iid === item
          })

          sum += curitem.count * parseFloat(curitem.unitPrice)
          sum_count += curitem.count
        }

        // 选择按钮的联动
        // 1、从子选项看，当全部选中，则发送通知 true,否则发送通知 false
        // 根据当前的select_goods的长度判断是否已经全选
        if (this.select_goods.length === this.goodslist.length) {
          this.$bus.$emit('selectfun', { flag: true, sum, sum_count })
        } else {
          this.$bus.$emit('selectfun', { flag: false, sum, sum_count })
        }
      }, 100)
    },
  },

  mounted() {
    // 2、接受全选按钮发来的指示
    // console.log(this.$refs.selectUnit) //这是个数组，当ref重复的时候，返回的是dom元素的数组
    this.$bus.$on('selectAllfun', (flag) => {
      // 2.1遍历数组,给子选项，全部选中
      for (let i = 0; i < this.$refs.selectUnit.length; i++) {
        this.$refs.selectUnit[i].checked = flag
      }

      // 2.2,由于通过selectUnit[i].checked = flag的方式变更选中状态不会更新select_goods的数据
      // 因此要手动更新
      if (flag) {
        for (let i = 0; i < this.$refs.selectUnit.length; i++) {
          this.select_goods[i] = this.goodslist[i].iid
        }
      } else {
        this.select_goods = []
      }

      console.log(this.select_goods)
    })
  },
}
</script>
<style  scoped>
#MarketCartlist {
  width: 100vw;
  background-color: white;
}
#carloistScroll {
  height: calc(100vh - 120px);
}
.item {
  width: 100vw;
  height: 25vh;
  border-bottom: 1px solid black;
  padding: 10px;

  display: flex;
  flex-wrap: nowrap;
}
.lis_left {
  flex: 4;
}
.lis_right {
  flex: 6;
  padding-left: 10px;
}
img {
  vertical-align: middle;

  height: 100%;
  width: 80%;
  margin-left: 10px;
  border-radius: 10px;
}

.desc {
  color: rgb(63, 62, 62);
  font-size: 12px;
  margin-bottom: 12vh;
  margin-top: 2vh;
}
.unitprice {
  color: var(--color-high-text);
}
.count {
  float: right;
}
</style>