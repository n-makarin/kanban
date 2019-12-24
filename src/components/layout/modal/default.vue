<template>
  <div class="modal-default" v-if="visible">
    <div class="modal-default__content">
      <slot />
    </div>
    <div class="modal-default__overlay" @click="close"></div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-default {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: $z-index_modal;
  &__content {
    position: absolute;
    margin: 0 auto;
    max-height: 100%;
    padding: 20px;
    border-radius: 3px;
    background: white;
    z-index: $z-index_modal-content;
    overflow-y: auto;
  }
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: $z-index_overlay;
    background: $gray-transparent;
    cursor: pointer;
  }
}
</style>
