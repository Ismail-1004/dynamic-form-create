<script>
import MyBtn from '@/components/ui/MyBtn.vue'
export default {
    props: ['fields'],
    components: {
        MyBtn
    }
}
</script>

<template>
    <form class="create__content-form">
        <h2 class="create__content-subTitle title"> Форма регистрации участников </h2>
        <div v-for="(filed, key) in fields" :key="key" >
            <input type="text" class="create__content-input" :required="filed.isRequired" :placeholder="filed.value">
        </div>
        <div class="create__content-check">   
            <input type="checkbox" class="create__content-checkbox">&nbsp; 
            <span>Нажимая кнопку «Отправить», я принимаю условия политики конфиденциальности</span>
        </div>
        
        <my-btn :text="'Отправить'" class="create__content-submit" />
    </form> 
</template>

<style lang="scss" scoped>
.create {
    &__content {
        &-form {
            background: white;
            max-width: 350px;
            width: 100%;
            padding: 40px;
            border-radius: 20px;
            height: max-content;

            & .title {
                margin: 0;
            }

            & span {
                color: var(--text-color, #212121);
                // font-family: Cera Pro;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                opacity: 0.5;
            }
        }

        &-checkbox {
            width: max-content;
            border-radius: 4px;
            border: 1px solid var(--primary_color, #3EA748);
        }

        &-input {
            width: 100%;
            display: inline-block;

            &:first-of-type {
                margin-top: 30px;
            }

        }

        &-check {
            margin-top: 30px;
        }

        &-submit {
            width: 100%;
            margin-top: 50px;
        }
    }
}
</style>