<template>
  <div id='topbar' :style="{backgroundColor: bcgcolor}">
    <div class="left">
    <slot name="left"></slot>
    </div>
    <div class="center">
    <slot name="center"></slot>
    </div>
    <div class="right">
    <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      
    };
  },
  props:{
    bcgcolor:{
      type:String,
      required:true,
      default:'white'
    }
  }

};
</script>

<style scoped>
  #topbar{ 
    /* background-color: ; */
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    text-align: center;
    line-height: 50px;
  }
  /* 左右各60  中间占据全部 */
  .left, .right{
    width: 60px;
  }
  .center{
    flex:1
  }
</style>