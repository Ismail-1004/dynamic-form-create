<script>
import { mapGetters, mapMutations } from 'vuex'
import MyBtn from '@/components/ui/MyBtn.vue'
import FieldVue from '@/components/forms/Field.vue'
import MyBtnVue from '@/components/forms/MyBtn.vue'
export default {
    computed: {
        ...mapGetters(['fields', 'defaultSettings'])
    },
    methods: {
        appendField () {
            this.createForm({...this.defaultSettings})
        },
        ...mapMutations(['createForm', 'removeField'])
    },
    components: {
        MyBtn,
        FieldVue,
        MyBtnVue
    }
}
</script>

<template>
<div class="create">
    <div class="create__content">
        <div class="create__content-fields">
            <h1 class="create__content-title"> Поля </h1>
            <div class="create__content-hidden">
                <h2 class="create__content-subTitle"> Скрытые поля </h2>
                <MyBtnVue :text="'Добавить поле'" />
            </div>
            <div class="create__content-filed">
                <h2 class="create__content-subTitle"> Поля </h2>
                <div class="create__content-results">
                    <FieldVue ref="input" v-for="(field, key) in fields" :key="key" :field="field" :fieldId="key" />
                </div>
                <MyBtnVue :text="'Добавить поле'"  @click="appendField" style="margin-bottom: 30px;" />
                <MyBtnVue :text="'Добавить страницу формы'" />
            </div>
        </div>
        <div class="create__content-debug">
            <form class="create__content-form" v-if="fields.length">
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
            <div v-else>
                <h2 class="create__content-debugTitle"> Добавьте поля, для просмотра формы </h2>
            </div>
        </div>
    </div>    
</div>    
</template>

<style lang="scss" scoped>
.create {
    height: 100%;
    &__content {
        display: flex;
        height: 100%;

        &-fields {
            max-width: 503px;
            width: 100%;
            background: #F9F9F9;
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

        &-checkbox {
            width: max-content;
            border-radius: 4px;
            border: 1px solid var(--primary_color, #3EA748);
        }

        &-results {
            margin-bottom: 30px;
        }

        &-debug {
            background: var(--primary_color, #3EA748);
            width: 100%;
            padding: 80px 30px;

            display: flex;
            justify-content: center;
        }

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

        &-debugTitle {
            color: white;
        }
    }
}
</style>