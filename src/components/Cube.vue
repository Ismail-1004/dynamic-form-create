<script>
export default {
    props: {
        cubes: {
            type: Array,
            required: true,
            default: []
        }
    }
}
</script>

<template>
    <div class="cubs">
        <div class="cubs__cube" v-for="cube in cubes" :key="cube.src" :style="{width: cube.width, top: cube.top, left: cube.left, right: cube.right, bottom: cube.bottom}">
            <img :src="cube.src" alt="" style="width: 100%;">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cubs {
    width: 100%;
    height: 100%;
    position: relative;

    &__cube {
        position: absolute;
        transform: translate(-50%, -50%);
    }
}
</style>