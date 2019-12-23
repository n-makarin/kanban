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
.card {
  padding: 8px 12px;
  background: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  color: $black;
  margin-bottom: 12px;
  &:first-child {
    margin-top: 16px;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
