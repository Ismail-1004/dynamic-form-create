<script>
import FormInfoVue from '@/components/FormInfo.vue'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['forms'])
  },
  components: {
    FormInfoVue
  }
}
</script>

<template>
  <div class="forms container">
    <div class="forms__head">
      <h1 class="forms__head-title"> Формы </h1>
      <router-link to="/create" class="form__link"> Создать форму </router-link>
    </div>
    <div class="forms__content">
      <div v-if="forms.length">
        <FormInfoVue v-for="form in forms" :key="form.id" :form="form" />
      </div>
      <div v-else>
        <h2 class="forms__content-title"> Создайте свою первую форму! </h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.forms {
  height: 100%;
  width: 100%;
  padding: 80px 0 80px 30px;

  &__head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  &__content {
    &-title {
      color: #3EA748;
      text-align: center;
      font-size: 40px;
      margin-top: 30px;
    }
  }
}
</style>