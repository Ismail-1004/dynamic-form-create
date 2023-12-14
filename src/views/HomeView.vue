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
      <FormInfoVue v-for="form in forms" :key="form.id" />
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
}
</style>