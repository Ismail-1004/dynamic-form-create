<script>
import MainSidebar from '@/components/Sidebar.vue'

export default {
    name: 'main-layout',
    components: {
        MainSidebar
    }
}
</script>


<template>
<div class="main__layout-wrapper">
    <MainSidebar />
    <div class="main__layout-content">
        <router-view />
    </div>
</div>

</template>

<style lang="scss" scoped>
.main__layout-wrapper {
    display: flex;
    height: 100%;
}

.main__layout-content {
    width: 100%;
    height: 100%;
    background: #F6F6F6;
}
</style>