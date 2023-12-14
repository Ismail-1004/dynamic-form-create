<script>
import MyBtn from '@/components/ui/MyBtn.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapGetters(['fields', 'defaultSettings'])
    },
    methods: {
        appendField () {
            this.createForm({...this.defaultSettings})
            console.log(this.fields);
        },
        ...mapMutations(['createForm', 'removeField'])
    },
    components: {
        MyBtn
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
                <button class="create__content-btn"> Добавить поле </button>
            </div>
            <div class="create__content-filed">
                <h2 class="create__content-subTitle"> Поля </h2>
                <div class="create__content-results">
                    <div class="create__content-result result" v-for="(filed, key) in fields" :key="key">
                        <div class="result__head">
                            <div class="result__head-info"> 
                                <span> Фамилия </span>
                                <span> Контакт </span>
                            </div>
                             <div class="result__head-delete"> 
                                <button class="result__head-btn" @click="removeField(key)"> Удалить </button>
                            </div>
                        </div>
                        <div class="result__body">
                            <input class="result__body-input" v-model="filed.value" >
                        </div>
                        <div class="result__footer">
                            <div class="result__footer-checkbox">
                                <input type="checkbox" v-model="filed.isRequired"> Сделать поле обязательным
                            </div>
                        </div>
                    </div>
                </div>
                <button class="create__content-btn" @click="appendField"> Добавить поле </button>
            </div>
        </div>
        <div class="create__content-debug">
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

        &-btn {
            border-radius: 10px;
            border: 1px dashed var(--primary_color, #3EA748);
            background: transparent;
            padding: 21px 30px;
            width: 100%;

            color: var(--primary_color, #3EA748);
            // font-family: Cera Pro;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            cursor: pointer;
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
    }
}

.result {
    &__head {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 9px;

        &-info {
            & span {
                color: #000;
                // font-family: Cera Pro;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;

                opacity: 0.5;

                &:not(:last-of-type) {
                    margin-right: 16px;
                }
            }
        }

        &-btn {
            color: var(--primary_color, #3EA748);
            // font-family: Cera Pro;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            background: transparent;
            border: none;
        }
    }

    &__body {
        margin-bottom: 13px;

        &-input {
            border-radius: 10px;
            background: #FFF;
            padding: 30px;
        }
    }

    &__footer {
        &-checkbox {
            // font-family: Cera Pro;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

            & input {
                width: max-content;
                margin-right: 16px;
                border-radius: 4px;
                border: 1px solid var(--text-color, #212121);
                opacity: 0.5;
                color: var(--text-color, #212121);
            }
        }
    }
}
</style>