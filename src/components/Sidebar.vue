<script>
import MyInput from '@/components/ui/MyInput.vue'
import MyBtn from '@/components/ui/MyBtn.vue'
import FormsMainListVue from './FormsMainList.vue'
import ListVue from './forms/List.vue'

import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations(['saveForm', 'resetFields']),

        exitHandler () {
            this.$router.push('/auth')
        },

        saveFormHandler () {
            this.saveForm()
            this.$router.push('/')
            this.resetFields()
        }
    },
    computed: {
        isCreatePage () {
            return this.$router.currentRoute.value.path.includes('/create')
        }
    },
    components: {
        MyInput,
        MyBtn,
        FormsMainListVue,
        ListVue
    }
}
</script>

<template>
    <aside class="sidebar">
        <div class="sidebar__content">
            <div class="sidebar__content-auth">
                <div class="sidebar__content-logo">
                    <img src="@/assets/images/logo.png" alt="">
                </div>

                <FormsMainListVue v-if="!isCreatePage" />
                <ListVue v-else/>

            </div>
            <div class="sidebar__content-exit" v-if="!isCreatePage">
               <MyBtn @click="exitHandler" :text="'Выход'" :isExitBtn="true" />
            </div>
             <div class="sidebar__content-script" v-else>
               <MyBtn :text="'Скрипт'" :isExitBtn="true" />
               <MyBtn :text="'Сохранить'" @click="saveFormHandler" />
            </div>
        </div>
        
    </aside>
</template>

<style lang="scss" scoped>
.sidebar {
   max-width: 434px;
   width: 100%;
   border-radius: 0 10px 10px 0;
   background: #FFF;

   height: 100%;

   padding: 80px 0 62px 0;

   z-index: 999;

   display: flex;
   justify-content: center;

   &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    
    max-width: max-content;

    &-script {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &-help {
        display: flex;
        flex-direction: column;
    }
   }
}
</style>