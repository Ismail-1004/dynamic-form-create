<script>
export default {
    data: () => ({
        links: [
            {title: 'Тип формы', url: '/type', exact: true},
            {title: 'Сущности', url: '/entities'},
            {title: 'Поля', url: '/create'},
            {title: 'Правила показа полей', url: '/rules'},
            {title: 'Другие настройки', url: '/other'},
        ]
    })
}
</script>

<template>
    <router-link to="/" class="back"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"/></svg>    
        <span>Назад</span>
    </router-link>
    <ul class="list">
        <li class="list__item" v-for="link in links" :key="link.url">
            <router-link class="list__item-link" :to="link.url" active-class="active" :exact="link.exact">{{ link.title }}</router-link>
        </li>
    </ul>
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

.list {
    &__item {
        margin-bottom: 16px;
        &-link {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: #000;
        }
    }

    & .active {
        color: #3EA748;
    }
}
</style>