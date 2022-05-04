<template>
    <AppHeader></AppHeader>
    <AppHero></AppHero>
    <AppAdvantages></AppAdvantages>
    <AppPrograms></AppPrograms>
    <AppFooter></AppFooter>
</template>

<script>
    import AppHeader from './components/header.vue'
    import AppHero from "@/components/hero";
    import AppAdvantages from "@/components/advantages";
    import AppPrograms from "@/components/programs";
    import AppFooter from "@/components/footer"

    export default {
        name: 'App',
        components: {
            AppPrograms,
            AppAdvantages,
            AppHero,
            AppHeader,
            AppFooter,
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

    html,body {
        overflow-x: hidden;
    }

    .mobile {
        display: none;
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

    @media screen and (max-width: 650px) {
        body {
            position: relative;
            margin: 0;
        }
        #app {
            max-width: 100%;
        }
        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }
    }
</style>
