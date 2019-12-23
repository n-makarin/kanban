<template>
  <div class="list">
    <list-item
      v-for="item in data"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :order="item.order"
    />
  </div>
</template>

<script>
import ListItem from '@/components/board/list/item'

export default {
  components: {
    ListItem
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">

</style>
