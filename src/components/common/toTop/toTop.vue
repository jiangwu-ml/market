<template>
  <div class="totop">
    <div class=" iconfont icon-top-filling"
         :style="{color:color}"></div>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
    },
  },
}
</script>
<style  scoped>
.totop {
  background-color: rgb(244, 240, 240);
  width: 40px;
  position: fixed;
  right: 10px;
  bottom: 50px;
  border-radius: 100px;
}
.iconfont {
  font-size: 30px;
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
}
</style>