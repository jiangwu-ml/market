<template>
  <div class="tabcontrol">
    <div class="tabcontrol-item"
         v-for=" (item,index) in titles"
         @click='click(index)'>
      <span :class="{ active : index===currentIndex }">{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    click(index) {
      this.currentIndex = index
      this.$emit('tabcontrol_click', index)
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
<style  scoped>
.tabcontrol {
  display: flex;
  text-align: center;
  background-color: white;
  margin-top: 10px;

  height: 30px;
  padding-top: 5px;
}
.tabcontrol .tabcontrol-item {
  flex: 1;
  font-size: 16px;
}
span {
  padding-bottom: 4px;
}
.active {
  border-bottom: 2px solid var(--color-tint);
  color: var(--color-tint);
}
</style>