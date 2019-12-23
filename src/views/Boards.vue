<template>
  <div v-if="dataLoaded" class="boards">
    <board-list :data="boardList" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BoardList from '@/components/board/list'

export default {
  name: 'home',
  components: {
    BoardList
  },
  computed: {
    ...mapGetters({
      boardList: 'board/list/data'
    })
  },
  data () {
    return {
      dataLoaded: false
    }
  },
  methods: {
    ...mapActions({
      getBoardList: 'board/list/get'
    })
  },
  async mounted () {
    await this.getBoardList()
    this.dataLoaded = true
  }
}
</script>

<style lang="scss" scoped>
.boards {
  padding: 36px 24px;
}
</style>
