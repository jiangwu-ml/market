<template>
  <div class="toast"
       v-show="isshow">
    <div>{{message}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: '就是我',
      timer: null,
      isshow: false,
    }
  },

  methods: {
    show(mes, time = 2000) {
      this.isshow = true
      if (this.timer) clearTimeout(this.timer)
      this.message = mes
      setTimeout(() => {
        this.isshow = false
      }, time)
    },
  },
}
</script>
<style  scoped>
.toast {
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  font-size: 14px;
  color: white;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>