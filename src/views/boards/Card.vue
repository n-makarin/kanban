<template>
  <div class="card">
    <modal-default
      :visible="true"
      @close="redirectToPrevPage"
      class="card__modal card-modal"
      border-radius="5px"
      v-if="dataLoaded"
    >
      <div class="card-modal__content">
        <form @submit.prevent="save" class="card-modal__form" action="POST">
          <textarea
            name="title"
            v-model="localTitle"
            class="textarea card-modal__title"
          />
          <textarea
            name="description"
            v-model="localDescription"
            placeholder="Описание"
            class="textarea card-modal__description"
          />
          <button
            class="card-modal__button-save"
          >
            Сохранить
          </button>
        </form>
        <div @click="redirectToPrevPage" class="card-modal__button-close">
          <img src="@/assets/images/icons/plus.svg" alt="close">
        </div>
      </div>
    </modal-default>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ModalDefault from '@/components/layout/modal/default'

export default {
  components: {
    ModalDefault
  },
  data () {
    return {
      dataLoaded: false,
      localTitle: '',
      localDescription: ''
    }
  },
  computed: {
    ...mapGetters({
      data: 'card/detail/data'
    })
  },
  methods: {
    ...mapActions({
      getData: 'card/detail/get',
      changeCardInfo: 'card/detail/changeInfo'
    }),
    redirectToPrevPage () {
      this.$router.go(-1)
    },
    async save () {
      const isChanged = await this.changeCardInfo({
        id: this.data.id,
        title: this.localTitle,
        description: this.localDescription,
        order: this.data.order
      })
      if (!isChanged) { return }
      this.redirectToPrevPage()
    },
    /**
     * @returns void
     */
    setLocalData () {
      this.localTitle = this.data.title
      this.localDescription = this.data.description
    }
  },
  async mounted () {
    await this.getData(this.$route.params.id)
    this.setLocalData()
    this.dataLoaded = true
  }
}
</script>

<style lang="scss" scoped>
@mixin textarea-acrive {
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  background: white;
}

.card {
  &-modal {
    border-radius: 5px;
    &__content {
      position: relative;
      width: 600px;
      padding: 16px 16px 13px 16px;
      background: $gray-ligh;
      border-radius: 5px;
      .textarea {
        display: block;
        width: 100%;
        border-radius: 2px;
        resize: none;
        overflow-y: auto;
        border: none;
        background: $gray-ligh;
        outline: none;
        &:first-child {
          &:focus {
            @include textarea-acrive;
          }
        }
        &:nth-child(2) {
          @include textarea-acrive;
        }
      }
    }
    &__title {
      margin-right: 30px;
      margin-bottom: 12px;
      font-weight: bold;
      font-size: 24px;
      padding: 5px;
    }
    &__description {
      padding: 12px;
      min-height: 95px;
      font-size: 15px;
      color: $black;
      margin-bottom: 16px;
      &:placeholder {
        color: $gray-middle;
      }
    }
    &__button {
      &-save {
        background: $blue;
        border-radius: 3px;
        color: white;
        font-size: 15px;
        padding: 7px 12px;
        border: none;
        cursor: pointer;
      }
      &-close {
        position: absolute;
        top: 16px;
        right: 16px;
        transform: rotate(45deg);
        cursor: pointer;
      }
    }
  }
}

</style>
