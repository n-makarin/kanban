<template>
  <div class="boards">
    <div v-if="dataLoaded">
      <board-list :data="boardList" />
      <router-view></router-view>
    </div>
    <div class="boards__error" v-if="error.visible">{{ error.message }}</div>
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
      dataLoaded: false,
      error: {
        visible: false,
        message: ''
      }
    }
  },
  methods: {
    ...mapActions({
      getBoardList: 'board/list/get'
    }),
    /**
     * @returns void
     */
    setLoadingError () {
      this.error.visible = true
      this.error.message = 'Ошибка при получении данных'
    },
    /**
     * @returns {boolean}
     */
    isBoardListLoaded () {
      return this.boardList && this.boardList.length > 0
    }
  },
  async mounted () {
    await this.getBoardList()
    if (!this.isBoardListLoaded()) {
      this.setLoadingError()
      return
    }
    this.dataLoaded = true
  }
}
</script>

<style lang="scss" scoped>
.boards {
  padding: 36px 24px;
  &__error {
    text-align: center;
    color: white;
  }
}
</style>
