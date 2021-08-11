<template>
  <div id='tabbar-w'>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
};
</script>
<style>
  #tabbar-w{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;

    height: 50px;
    width: 100%;
    
  }
  
  
</style>