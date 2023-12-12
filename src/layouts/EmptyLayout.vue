<template>
    <div class="app__empty-layout">
        <div class="app__empty-content">
            <router-view />
        </div>
    </div>
    
</template>

<style scoped>
.app__empty-layout {
    background: var(--primary_color, #3EA748);
    height: 100%;
}

.app__empty-content {
    width: 100%;
    height: 100%;
}
</style>