<script>
export default {
    data: () => ({
        links: [
            {title: 'Формы', url: '/', exact: true},
            {title: 'Пользователи', url: '/users'}
        ]
    })
}
</script>

<template>
    <ul class="list">
        <li class="list__item" v-for="link in links" :key="link.url">
            <router-link class="list__item-link" :to="link.url" active-class="active" :exact="link.exact">{{ link.title }}</router-link>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.list {
    margin-top: 30px;
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