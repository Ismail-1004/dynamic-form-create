<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
            default: 'Submit'
        }
    }
}
</script>

<template>
    <button> {{ text }} </button>
</template>

<style lang="scss" scoped>
button {
    border-radius: 10px;
    background: var(--primary_color, #3EA748);
    border: none;
    padding: 19px 61px;

    color: #FFF;

    // font-family: Cera Pro;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
</style>