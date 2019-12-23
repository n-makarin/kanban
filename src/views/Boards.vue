<template>
  <div class="boards">
    boards
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
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
