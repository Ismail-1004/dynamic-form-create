<script>
import { mapMutations } from 'vuex'

export default {
    props: ['field', 'fieldId'],
    methods: {
        ...mapMutations(['removeField']),
    }
}
</script>

<template>
    <div class="create__content-result result">
        <div class="result__head">
            <div class="result__head-info"> 
                <span> {{ field.value }} </span>
                <span> Контакт </span>
            </div>
                <div class="result__head-delete"> 
                <button class="result__head-btn" @click="removeField(fieldId)"> Удалить </button>
            </div>
        </div>
        <div class="result__body">
            <input ref="input" class="result__body-input" v-model="field.value" >
        </div>
        <div class="result__footer">
            <div class="result__footer-checkbox">
                <input type="checkbox" v-model="field.isRequired"> Сделать поле обязательным
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.result {
    &:not(:last-child) {
        margin-bottom: 33px;
    }

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
            width: 100%;
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