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
    <div class="item__add item-add">

      <!-- trigger -->
      <div v-show="!createItemFormVisible" class="item-add__trigger" @click="openCreateItemForm">
        <img class="item-add__icon" src="@/assets/images/icons/plus.svg" alt="add">
        <span class="item-add__text">{{ addCardText }}</span>
      </div>

      <!-- create card form -->
      <form @submit.prevent="add" v-show="createItemFormVisible" class="item-add__form">
        <textarea
          placeholder="Введите текст карточки"
          class="item-add__title"
          name="card-title"
          v-model="newCardTitle"
        />
        <div class="item-add__buttons">
          <button class="item-add__button-add" type="submit">Добавить карточку</button>
          <div class="item-add__close" @click="closeCreateItemForm">
            <img class="item-add__icon" src="@/assets/images/icons/plus.svg" alt="add">
            <span>Отмена</span>
          </div>
        </div>
      </form>
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
      cardListLoaded: false,
      createItemFormVisible: false,
      newCardTitle: ''
    }
  },
  methods: {
    ...mapActions({
      getCardList: 'board/detail/getCardList',
      createCard: 'card/list/create'
    }),
    openCreateItemForm () {
      this.createItemFormVisible = true
    },
    closeCreateItemForm () {
      this.createItemFormVisible = false
    },
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
  padding: 12px 12px 8px 12px;
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
    margin-top: 11px;
    text-align: center;
    color: $gray;
    font-size: 15px;
  }
  &-add {
    &__icon {
      margin-right: 13px;
    }
    &__icon, &__text {
      vertical-align: middle;
    }
    &__trigger {
      padding: 7px 0;
      cursor: pointer;
      border-radius: 3px;
      transition: background .15s;
      &:hover {
        background: $gray-lighter;
      }
    }
    &__form {

    }
    &__title {
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
      border-radius: 2px;
      background: white;
      color: $black;
      border: none;
      width: 100%;
      resize: none;
      overflow-y: auto;
      margin-bottom: 16px;
      padding: 9px 12px;
      &:placeholder {
        color: $gray-middle;
      }
    }
    &__buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__button-add {
      background: $blue;
      border-radius: 3px;
      color: white;
      font-size: 15px;
      padding: 7px 12px;
      border: none;
      cursor: pointer;
    }
    &__close {
      min-height: 31px;
      border-radius: 3px;
      display: flex;
      align-items: center;
      padding: 0 11px;
      &:hover {
        background: $gray-lighter;
        cursor: pointer;
      }
      img, span {
        vertical-align: middle;
      }
    }
  }
}
</style>
