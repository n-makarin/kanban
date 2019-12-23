<template>
  <div :style="style" class="item">
    <div class="item__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    order: {
      type: Number,
      default: 1
    }
  },
  computed: {
    style () {
      return { order: this.order }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
