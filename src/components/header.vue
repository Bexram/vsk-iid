<template>
    <div class="header-desktop">
        <img :src="require('/src/assets/_iid_logo_2021 1.svg')">
        <div class="flex-row menu">
            <div class="point"><a>Главная</a></div>
            <div class="point"><a>Преимущества</a></div>
            <div class="point"><a>Программы страхования</a></div>
            <div class="point"><a>Контакты</a></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>

<style scoped>
    .header-desktop {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 4rem;
    }

    .menu {
        width: 50%;
        font-size: 1.5rem;
        justify-content:space-around;
    }
    .point {
        display: flex;
        margin-right: 1rem;
        margin-left: 1rem;
    }
    a {
        margin:auto;
    }
</style>
