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
<MainSidebar />
    <div>
        <router-view />
    </div>
</template>