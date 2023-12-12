<script>
import AuthSidebar from '@/components/auth/Sidebar.vue'
import Cube from '@/components/Cube.vue'

export default {
    data() {
        return {
            cubsImages: [
                { src: '/src/assets/images/block-1.png', width: '455px', top: '50%', left: '50%' },
                { src: '/src/assets/images/block-2.png', width: '221px', top: '120px', left: '120px' },
                { src: '/src/assets/images/block-3.png', width: '118px', top: '120px', right: '0' },
                { src: '/src/assets/images/block-4.png', width: '74px', top: '65%', right: '0' },
                { src: '/src/assets/images/block-5.png', width: '283px', bottom: '-100px', right: '-150px' },
                { src: '/src/assets/images/block-6.png', width: '320px', bottom: '-120px', left: '50px' },
            ]
        }
    },
    components: {
        AuthSidebar,
        Cube
    }
}
</script>

<template>
    <div class="auth">
        <AuthSidebar />
        <Cube :cubes="cubsImages" />
    </div>
</template>

<style lang="scss" scoped>
.auth {
    display: flex;
    height: 100%;
    overflow: hidden;
}
</style>