<script>
import FieldVue from "@/components/forms/Field.vue";
import MyBtnVue from "@/components/forms/MyBtn.vue";

import { mapMutations } from 'vuex'

export default {
  props: ["fields"],

  methods: {
    appendField () {
        return this.createForm({...this.defaultSettings})
    },

    ...mapMutations(['createForm'])
  },

  components: {
    FieldVue,
    MyBtnVue,
  },
};
</script>

<template>
  <div class="create__content-fields">
    <h1 class="create__content-title">Поля</h1>
    <div class="create__content-hidden">
      <h2 class="create__content-subTitle">Скрытые поля</h2>
      <MyBtnVue :text="'Добавить поле'" />
    </div>
    <div class="create__content-filed">
      <h2 class="create__content-subTitle">Поля</h2>
      <div class="create__content-results">
        <FieldVue
            ref="input"
            v-for="(field, key) in fields"
            :key="key"
            :field="field"
            :fieldId="key"
        />
      </div>
      <MyBtnVue
        :text="'Добавить поле'"
        @click="appendField"
        style="margin-bottom: 30px"
      />
      <MyBtnVue :text="'Добавить страницу формы'" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.create {
  &__content {
    display: flex;
    height: 100%;

    &-fields {
      max-width: 503px;
      width: 100%;
      background: #f9f9f9;
      height: 100%;
      border-radius: 0 10px 10px 0;
      padding: 80px 30px;
    }

    &-title {
      color: #000;
      // font-family: Cera Pro;
      font-size: 40px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    &-subTitle {
      color: #000;
      // font-family: Cera Pro;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 32px;
      margin: 30px 0;
    }

    &-results {
      margin-bottom: 30px;
    }
  }
}
</style>