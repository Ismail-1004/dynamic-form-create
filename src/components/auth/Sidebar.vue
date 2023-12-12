<script>
import MyInput from '@/components/ui/MyInput.vue'
import MyBtn from '@/components/ui/MyBtn.vue'
export default {
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

                <h1 class="sidebar__content-title">Авторизация</h1>

                <form class="sidebar__content-form">
                    <MyInput />
                    <MyInput />
                    <MyBtn :text="'Вход'" class="sidebar__content-btn" />
                </form>

            </div>
            <div class="sidebar__content-help">
                <router-link to="/auth" class="sidebar__content-link"> Если возникла проблема, то можете написать <span>Алёне из Сибтеха</span> </router-link>
                <router-link to="/auth" class="sidebar__content-link"> С любовью, ваш <span>Сибтех</span> </router-link>
            </div>
        </div>
        
    </aside>
</template>

<style lang="scss" scoped>
.sidebar {
   max-width: 624px;
   width: 100%;
   border-radius: 0 10px 10px 0;
   background: #FFF;

   height: 100%;

   padding: 80px 0 62px 0;

   display: flex;
   justify-content: center;

   &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    
    max-width: max-content;

    &-title {
        color: #000;
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        margin: 30px 0;
    }

    &-form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    &-btn {
        margin-top: 30px;
    }

    &-help {
        display: flex;
        flex-direction: column;
    }

    &-link {
        color: var(--untitled-text-2-color, #676767);
        // font-family: Cera Pro;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: -0.64px;
        max-width: 260px;
        display: inline-block;

        &:not(:last-child) {
            margin-bottom: 8px;
        }

        & span {
            color: #3EA748;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: -0.64px;
            text-decoration-line: underline;
        }
    }
   }
}
</style>