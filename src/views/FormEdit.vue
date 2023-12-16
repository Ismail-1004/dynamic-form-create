<script>
import { mapGetters } from 'vuex'
import FormVue from '@/components/Form.vue'

export default {
    name: 'Edit',

    data () {
        return {
            form: []
        }
    },

    computed: {
        ...mapGetters(['forms'])
    },

    created () {
        this.form = this.forms.filter(el => +this.$route.params.id === el.id)[0].fields
    },

    components: {
        FormVue
    }
}
</script>

<template>
    <div class="edit">
        <FormVue :fields="this.form" />
    </div>
</template>

<style scoped>
.edit {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>