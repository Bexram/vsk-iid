<template>
    <div class="header-desktop">
        <img :src="require('/src/assets/_iid_logo_2021 1.svg')">
        <div class="flex-row menu desktop">
            <div class="point"><a href="#advatages" v-smooth-scroll>Преимущества</a></div>
            <div class="point"><a href="#programs" v-smooth-scroll>Программы страхования</a></div>
            <div class="point"><a href="#footer" v-smooth-scroll>Контакты</a></div>
        </div>
        <div v-on:click="toggle" class="mobile">
            <img style="height:1.7rem" :src="require('/src/assets/Menu-icon.svg')">
        </div>

        <div v-if="openMenu" class="mobile-menu">
            <div class="flex-column menu">
                <div v-on:click="toggle" class="point"><a href="#advatages" v-smooth-scroll>Преимущества</a></div>
                <div v-on:click="toggle"  class="point"><a href="#programs" v-smooth-scroll>Программы страхования</a></div>
                <div v-on:click="toggle"  class="point"><a href="#footer" v-smooth-scroll>Контакты</a></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppHeader",
        data() {
            return {
                openMenu: false,
            }
        },
        methods: {
            toggle() {
                this.openMenu = !this.openMenu
            }
        }
    }
</script>

<style scoped>
    a {
        color: black;
        text-decoration: none;
    }

    .header-desktop {
        font-weight: 400;
        line-height: 83.5%;
        text-align: right;
        letter-spacing: -0.03em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 4rem;
    }

    .menu {
        width: 50%;
        font-size: 1.5rem;
        justify-content: space-around;
    }

    .point {
        display: flex;
        margin-right: 1rem;
        margin-left: 1rem;
    }

    a {
        margin: auto;
    }

    @media screen and (max-width: 650px) {
        .header-desktop {
            margin: 0 2rem;
        }

        img {
            height: 2rem;
        }
        .mobile-menu {
            z-index: 101;
            margin-top: 4rem;
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            background-color: #FFFFFF;
        }
        .menu {
            width: 100%;
            align-items: flex-end;
            height:30%;
        }
    }
</style>
