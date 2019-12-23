<template>
  <div :style="style" class="item">
    <!-- title -->
    <div class="item__title">{{ title }}</div>

    <!-- cards -->
    <div class="item__card-list">
      <card
        v-for="card in cardList"
        :key="card.id"
        :id="card.id"
        :title="card.title"
        :description="card.description"
        :order="card.order"
        class="item__card"
      />
    </div>

    <!-- add card -->
    <div class="item__add item-add" @click="add">
      <img class="item-add__icon" src="@/assets/images/icons/plus.svg" alt="add">
      <span class="item-add__text">{{ addCardText }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Card from '@/components/board/list/item/card.vue'

export default {
  components: {
    Card
  },
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
    },
    ...mapGetters({
      rawCardList: 'board/detail/cardList'
    }),
    cardList () {
      if (!this.cardListLoaded || !this.rawCardList) { return }
      return this.rawCardList[this.id]
    }
  },
  data () {
    return {
      addCardText: 'Добавить еще одну карточку',
      cardListLoaded: false
    }
  },
  methods: {
    ...mapActions({
      getCardList: 'board/detail/getCardList'
    }),
    add () {
    }
  },
  async mounted () {
    await this.getCardList(this.id)
    this.cardListLoaded = true
  }
}
</script>

<style scoped lang="scss">
.item {
  width: 300px;
  padding: 12px 12px 15px 12px;
  margin-right: 24px;
  border-radius: 5px;
  background: $gray-ligh;
  &:last-child {
    margin-right: 0;
  }
  &__title {
    font-size: 15px;
    color: $black-light;
  }
  &__add {
    margin-top: 18px;
    text-align: center;
    color: $gray;
    font-size: 15px;
  }
  &-add {
    cursor: pointer;
    transition: color .15s;
    &:hover {
      color: rgb(49, 49, 49);
    }
    &__icon {
      margin-right: 13px;
    }
    &__icon, &__text {
      vertical-align: middle;
    }
  }
}
</style>
