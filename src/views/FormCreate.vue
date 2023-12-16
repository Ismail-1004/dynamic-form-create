<script>
import { mapGetters, mapMutations } from 'vuex'
import FormVue from '@/components/Form.vue'
import DebugCreateSideVue from '@/components/DebugCreateSide.vue'

export default {
    computed: {
        ...mapGetters(['fields', 'defaultSettings'])
    },
    methods: {
        ...mapMutations(['createForm', 'removeField'])
    },
    components: {
        FormVue,
        DebugCreateSideVue
    }
}
</script>

<template>
<div class="create">
    <div class="create__content">
        <DebugCreateSideVue :fields="fields" />

        <div class="create__content-debug">
            <div v-if="fields.length">
                <FormVue :fields="fields" />
            </div>

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

        &-debugTitle {
            color: white;
        }
    }
}
</style>