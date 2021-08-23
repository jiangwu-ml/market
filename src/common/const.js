// 放公共方法 公共类 公共常量
import toTop from '@/components/common/toTop/toTop.vue'

export const totop={
  components: {
    toTop
  },
  created () {
    // console.log('我是mixins！！');
  },
  methods: {
    // 点击回到顶部，回到顶部。这里的回到顶部是通过父组件点击事件触发scroll的方法，
    // 根据当前的路径名的不同调用不同的方法
    clickToTop () {
      if (this.$route.path == '/home'){
        this.$refs.homescroll.totop()

      } else{
        this.$refs.detailScroll.totop()
        
        }
    },
  }

  
}