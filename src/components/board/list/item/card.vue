<template>
  <router-link :to="pathDetail" :style="style" class="card">
    <div :title="title" class="card__title">{{ abridgedTitle }}</div>
  </router-link>
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
  data () {
    return {
      maxTitleLength: 53
    }
  },
  computed: {
    pathDetail () {
      return `/card/${this.id}`
    },
    style () {
      return { order: this.order }
    },
    abridgedTitle () {
      const titleLength = this.title.length
      const ellipsis = '...'
      if (titleLength >= this.maxTitleLength) {
        return this.title.slice(0, this.maxTitleLength) + ellipsis
      } else {
        return this.title
      }
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  display: block;
  padding: 8px 12px;
  background: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  color: $black;
  margin-bottom: 12px;
  cursor: pointer;
  &:first-child {
    margin-top: 16px;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
  &__title {
    max-height: 36px;
    overflow: hidden;
  }
}
</style>
