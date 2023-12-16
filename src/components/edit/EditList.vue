<template>
    <router-link to="/" class="back"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"/></svg>    
        <span>Назад</span>
    </router-link>
</template>

<style lang="scss" scoped>
.back {
    display: flex;
    align-items: center;
    
    margin: 40px 0 60px 0;

    color: var(--text-color, #212121);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    & span {
        margin-left: 8px;
    }
}
</style>