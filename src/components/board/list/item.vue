<template>
  <div :style="style" class="item">
    <div class="item__title">{{ title }}</div>
    <div class="item__add item-add" @click="add">
      <img class="item-add__icon" src="@/assets/images/icons/plus.svg" alt="add">
      <span class="item-add__text">{{ addCardText }}</span>
    </div>
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
  },
  data () {
    return {
      addCardText: 'Добавить еще одну карточку'
    }
  },
  methods: {
    add () {
    }
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
    opacity: 1;
    transition: opacity .15s;
    &:hover {
      opacity: .7;
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
