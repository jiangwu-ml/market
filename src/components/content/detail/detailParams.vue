<template>
  <div id="detailParams"
       v-if="Object.keys(detailParams).length != 0">
    <div class="info">
      {{detailParams.info.key}}
      <p v-for="item in detailParams.info.set">
        {{item.key}}:
        <span>{{item.value}}</span>
      </p>
    </div>
    <hr>
    <div class="ruler">
      {{detailParams.rule.desc}}
      {{detailParams.rule.key}}
      <p v-for="item in detailParams.rule.tables[0]">
        <span v-for="it in item "> {{it}} </span>
      </p>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    detailParams: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
<style  scoped>
#detailParams {
  background-color: white;
  margin-top: 5px;
  padding: 10px;
}
p {
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  line-height: 30px;
}
.ruler span {
  display: inline-block;
  width: 60px;
}
</style>