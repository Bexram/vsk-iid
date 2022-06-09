<template>
    <div>
    <AppHeader></AppHeader>
    <router-view>
    </router-view>
    <AppFooter></AppFooter>
    </div>
</template>

<script>
    import AppHeader from '@/components/header.vue'
    import AppFooter from '@/components/footer.vue'
    export default {
        name: 'App',
        components: {
            AppHeader,
            AppFooter,

        }

    }
</script>

<style>
    @font-face {
        font-family: "FreeSet";
        font-style: normal;
        font-weight: 400;
        src: local("FreeSet"),
        url('~@/assets/freeset.ttf') format('truetype');

    }

    #app {
        font-family: 'FreeSet', arial;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 2rem;
    }
    body {

        font-family: 'FreeSet', arial;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
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
