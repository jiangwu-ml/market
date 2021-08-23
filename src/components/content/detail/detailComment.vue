<template>
  <div id="detailComment"
       v-if="Object.keys(detailComment).length !=0 ">
    <div class="title">用户评论
      <span>更多>></span>
    </div>

    <div class="user">
      <img :src="'http:'+detailComment.user.avatar">
      <span>{{detailComment.user.uname}}</span>
    </div>
    <div class="content">{{detailComment.content}}</div>
    <div class="iteminfo">
      {{ created }} {{  detailComment.style  }}
    </div>
    <div class="imgs">
      <img v-for="item in detailComment.images"
           :src="'http:'+item">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailComment: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {},
  computed: {
    created() {
      let Ttime = this.detailComment.created
      // 如果时间戳是 10位的，要✖️1000； 如果时间戳13位，则不需要
      Ttime = Ttime / 1000000000 < 10 ? Ttime * 1000 : Ttime
      let time = new Date(Ttime)
      let y = time.getFullYear()
      let m = time.getMonth() + 1
      let d = time.getDate()
      return y + '-' + m + '-' + d
    },
  },
}
</script>
<style  scoped>
#detailComment {
  background-color: white;
  margin-top: 5px;
  padding: 10px;
}
.title {
  margin-bottom: 10px;
  font-weight: 900;
  border-bottom: 1px solid #ccc;
}
.title span {
  float: right;
}
.user img {
  width: 30px;
  border-radius: 100px;
}
.user {
  margin-bottom: 10px;
  font-size: 18px;
}
.content {
  font-size: 14px;
  margin: 10px 0;
}
.iteminfo {
  font-size: 12px;
  margin: 10px 0;
  color: #ccc;
}
.imgs img {
  width: 100px;
  height: 100px;
}
</style>