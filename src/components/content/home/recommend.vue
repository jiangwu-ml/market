<template>
  <div class="homeRecommend">
    <a :href="item.link" class="item" v-for="(item, i) in list" :key="i">
      <img :src="item.image " :alt="item.title">
      <div class="title">{{item.title}}</div>
    </a>

  </div>
</template>
<script>
export default {
  props:{
    list:{
      type:Array,
      default(){
        return []
      }
    }
  },
  
};
</script>
<style lang="css" scoped>
  .homeRecommend{
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: white;
  }
  .homeRecommend .item {
    flex: 1;
    padding: 10px;
  }
  .homeRecommend .item .title{
    text-align: center;
    line-height: 20px;
    margin-top: 4px;
  }
  img{
    width: 100%;
  }
</style>