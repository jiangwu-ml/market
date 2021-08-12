<template>
  <div class="feature">
    <div class="featuretitle">本周小羊</div>
    <div class="featurebody">
      <a href="https://act.mogujie.com/zzlx67" v-for="(item,index) in list" :key="index">
        <img :src="item.src" alt="item.title">
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>
    
</template>
<script>
export default {
  data() {
    return {
      list: [{
        title:"快乐小羊",
        src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201909%2F05%2F20190905190054_aleag.thumb.700_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631344724&t=0b44e1a3e796490bfe3dbb519e0d6369'
      },{
        title:"快乐小羊",
        src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201909%2F05%2F20190905190054_aleag.thumb.700_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631344724&t=0b44e1a3e796490bfe3dbb519e0d6369'

      },{
        title:"快乐小羊",
        src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201909%2F05%2F20190905190054_aleag.thumb.700_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631344724&t=0b44e1a3e796490bfe3dbb519e0d6369'
      },{
        title:"快乐小羊",
        src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201909%2F05%2F20190905190054_aleag.thumb.700_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631344724&t=0b44e1a3e796490bfe3dbb519e0d6369'
        
      },{
        title:"快乐小羊",
        src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201909%2F05%2F20190905190054_aleag.thumb.700_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631344724&t=0b44e1a3e796490bfe3dbb519e0d6369'
        
      },{
        title:"快乐小羊",
        src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201909%2F05%2F20190905190054_aleag.thumb.700_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631344724&t=0b44e1a3e796490bfe3dbb519e0d6369'
        
      },{
        title:"快乐小羊",
        src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201909%2F05%2F20190905190054_aleag.thumb.700_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631344724&t=0b44e1a3e796490bfe3dbb519e0d6369'
        
      },{
        title:"快乐小羊",
        src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201909%2F05%2F20190905190054_aleag.thumb.700_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631344724&t=0b44e1a3e796490bfe3dbb519e0d6369'
        
      },],
    };
  },
};
</script>
<style lang="css" scoped>
  .feature{
    background-color: #fff;
    margin-top: 10px;
    text-align: center;

  }
  
  .featurebody{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .featurebody a{
    flex: 25%;
    padding: 10px;
  }
  img{
    width: 100%;
    border-radius: 100px;
  }
  .title{
    text-align: center;

  }
</style>