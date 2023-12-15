<template>
    <div class="not-found">
        <h1> 404 </h1>
        <p>Страница не найдена</p>
        <router-link to="/"> На главную </router-link>
    </div>
</template>

<style lang="scss" scoped>
.not-found {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & h1 {
        text-align: center;
        color: white;
        font-size: 100px;
        margin: 0;
    }

    p {
        text-align: center;
        color: white;
        font-size: 30px;
        margin: 30px;
    }

    & a {
        color: white;
        display: inline-block;
        border: 1px solid white;
        padding: 10px;
        border-radius: 5px;
        font-size: 20px;
    }
}
</style>