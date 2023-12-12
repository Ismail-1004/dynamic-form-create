<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
            default: 'Submit'
        },
        isExitBtn: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<template>
    <button :class="{exitBtn: isExitBtn}"> {{ text }} </button>
</template>

<style lang="scss" scoped>
button {
    border-radius: 10px;
    border: none;
    padding: 19px 61px;
    background: var(--primary_color, #3EA748);
    color: #FFF;

    // font-family: Cera Pro;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    cursor: pointer;
}

.exitBtn {
    color: #3EA748;
    background: none;
    border-radius: 10px;
    border: 1px solid var(--primary_color, #3EA748);
}
</style>