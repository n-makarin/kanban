<template>
  <div :style="style" class="card">
    <div class="card__title">{{ title }}</div>
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
    description: {
      type: String,
      default: ''
    },
    order: {
      type: Number,
      default: 0
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
