<script>
import MyInput from '@/components/ui/MyInput.vue'
import MyBtn from '@/components/ui/MyBtn.vue'
export default {
    methods: {
        exitHandler () {
            this.$router.push('/auth')
        }
    },
    components: {
        MyInput,
        MyBtn
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

                <ul class="sidebar__content-list">
                    <li class="sidebar__content-item">
                        <router-link to="/" class="sidebar__content-link">Формы</router-link>
                    </li>
                    <li class="sidebar__content-item">
                        <router-link to="/" class="sidebar__content-link">Пользователи</router-link>
                    </li>
                </ul>

            </div>
            <div class="sidebar__content-exit">
               <MyBtn @click="exitHandler" :text="'Выход'" :isExitBtn="true" />
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

    &-list {
        margin-top: 30px;
    }

    &-item {
        margin-bottom: 16px;
    }

    &-link {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #000;
    }

    &-help {
        display: flex;
        flex-direction: column;
    }
   }
}
</style>