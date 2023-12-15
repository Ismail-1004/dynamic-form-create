<script>
import CreateVue from '../ui/Create.vue'

export default {
    props: {
        text: {
            type: String,
            requreid: true,
            default: 'Create'
        }
    },
    components: {
        CreateVue
    }
}
</script>

<template>
    <div class="create">   
        <button class="create__btn"> {{ text }} </button>
        <create-vue />
    </div>
   
</template>

<style lang="scss" scoped>
.create {
    border-radius: 10px;
    border: 1px dashed var(--primary_color, #3EA748);
    background: transparent;
    padding: 21px 30px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &__btn {
        color: var(--primary_color, #3EA748);
        /* font-family: Cera Pro; */
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        cursor: pointer;
        background: none;
        border: none;
    }
}
</style>