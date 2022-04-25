<template>
    <AppHeader></AppHeader>
    <AppHero></AppHero>
    <AppAdvantages></AppAdvantages>
</template>

<script>
    import AppHeader from './components/header.vue'
    import AppHero from "@/components/hero";
    import AppAdvantages from "@/components/advantages";

    export default {
        name: 'App',
        components: {
            AppAdvantages,
            AppHero,
            AppHeader
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 2rem;
    }

    html {
        overflow-x: hidden;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .flex-column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
