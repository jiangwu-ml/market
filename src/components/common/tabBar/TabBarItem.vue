<template>
  <div class="tabbaritem">
    <router-link :to='to_path'
                 :style="{color: getactive()}">
      <slot></slot>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    // 组件内部也是可以获取到当前的路径的相关信息
    getactive() {
      // 如果  当前页面route的路径 === 当前组件的指向的路径 ，则处于激活状态。
      return this.$route.path === this.to_path
        ? this.active_color
        : this.comm_color
    },
  },
  props: {
    to_path: {
      type: String,
      required: true,
    },
    active_color: {
      type: String,
      default: 'rgb(93, 117, 224)',
    },
    comm_color: {
      type: String,
      default: 'black',
    },
  },
}
</script>
<style >
.tabbaritem {
  flex: 1;
  height: 49px;
  text-align: center;
}
/* 因为在手机的模式下，无法检测到鼠标的hover行为，所以变成了点击后才可以变色 */
/* a:hover{
    color: rgb(93, 117, 224);
    当默认出现在首页的时候不会变色
  } */
a {
  color: black;
  text-decoration: none;
}
/* active的页面展示不同颜色  因为颜色是传进来的，无法从style去访问data,这种方法舍弃*/
/* .router-link-exact-active{
    color: rgb(93, 117, 224);
  } */
</style>