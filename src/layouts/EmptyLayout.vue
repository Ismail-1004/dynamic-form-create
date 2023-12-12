<script>
import AuthSidebar from '@/components/auth/Sidebar.vue'

export default {
    name: 'empty-layout',
    components: {
        AuthSidebar
    }
}

</script>

<template>
    <div class="app__empty-layout">
        <AuthSidebar />

        <div>
            <router-view />
        </div>
    </div>
    
</template>

<style scoped>
.app__empty-layout {
    background: var(--primary_color, #3EA748);
    height: 100%;
}
</style>