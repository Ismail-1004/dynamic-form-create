<script>
export default {
    props: ['form']
}
</script>

<template>
    <div class="form">
        <div class="form__head">
          <div class="form__head-titles">
            <h2 class="form__head-title"> Форма регистрации участников </h2>
            <span class="form__head-user span"> Автор: user 1  </span>
          </div>
          <router-link to="/" class="form__link transparent-w-border"> Редактировать </router-link>
        </div>
        <div class="form__footer">
          <span class="form__head-date span">Дата создания: 01.01.23</span>
          <router-link class="form__link transparent" to="/"> Удалить </router-link>
        </div>
      </div>
</template>

<style lang="scss" scoped>
.form {
    border-radius: 10px;
    background: #FFF;
    padding: 24px;

    &:not(:last-child) {
        margin-bottom: 30px;
    }

    & .span {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        opacity: 0.5;
        display: inline-block;
    }

    &__head {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-user {
            margin-top: 8px;
        }
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 33px;

        &-remove {
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            border-radius: 10px;
            padding: 16px 32px;
            color: #3EA748;

            background: red;
            width: 100%;
        }
    }

    & .transparent-w-border {
        background: none;
        color: #3EA748;
        border-radius: 10px;
        border: 1px solid var(--primary_color, #3EA748);
    }
    
    & .transparent {
        background: none;
        color: #3EA748;
    }
}
</style>