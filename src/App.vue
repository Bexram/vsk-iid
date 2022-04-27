<template>
    <AppHeader></AppHeader>
    <AppHero></AppHero>
    <AppAdvantages></AppAdvantages>
    <AppPrograms></AppPrograms>
</template>

<script>
    import AppHeader from './components/header.vue'
    import AppHero from "@/components/hero";
    import AppAdvantages from "@/components/advantages";
    import AppPrograms from "@/components/programs";

    export default {
        name: 'App',
        components: {
            AppPrograms,
            AppAdvantages,
            AppHero,
            AppHeader
        }
    }
</script>

<style>
    #app {
        font-family: 'FreeSet', arial;
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
