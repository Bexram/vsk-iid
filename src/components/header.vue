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
                <div class="flex-row icons">
                    <img class="ico" :src="require('/src/assets/vk.svg')">
                    <img class="ico" :src="require('/src/assets/youtube.svg')">
                </div>
                <div class="flex-row icons">
                    <img class="ico" :src="require('/src/assets/tg.svg')">
                    <img class="ico" :src="require('/src/assets/ok.svg')">
                </div>

            </div>
            <div class="description">САО «ВСК», лицензия Банка России от 11.09.2015: СЛ №0621, СИ №0621, ОС №0621-03, ОС №0621-04, ОС №0621-05, ПС №0621. Подробности на vsk.ru.</div>
            <div class="circle">
            </div>
            <div class="arrow">»</div>
            <svg class="line" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path id="line1" class="polyline" d="M0,100 C 40,30, 70,80  100 0"/>
                <defs>
                    <linearGradient id="Gradient2">
                        <stop offset="0%" stop-color="#0078CB"/>
                        <stop offset="50%" stop-color="#0078CB" stop-opacity="0.21"/>
                        <stop offset="100%" stop-color="#0078CB"/>
                    </linearGradient>
                </defs>
            </svg>
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
    .icons {
        justify-content: space-between;
        width: 50%;
        margin-right: 10%;
    }
    .arrow {
        position: absolute;
        font-style: normal;
        font-weight: 700;
        font-size: 40rem;
        /* or 251px */
        color: transparent;
        -webkit-text-stroke: 1px #5BD333B2;
        letter-spacing: 0.01em;
        top:13rem;
        left:-5rem;
    }
    .circle {
        position: absolute;
        width: 30rem;
        height: 30rem;
        left: -15rem;
        top: 18rem;
        z-index: 101;
        background: rgba(91, 211, 51, 0.34);
        filter: blur(3rem);
        border-radius: 50%;
    }
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
        font-size: 2rem;
    }

    a {
        margin: auto;
    }

    @media screen and (max-width: 650px) {
        .description {
            position: absolute;
            width: 70%;
            height: 5rem;
            top: 30rem;
            left: 15%;
            font-size: 1.2rem;
            line-height: 100%;
        }
        .header-desktop {
            margin: 0 2rem;
        }
        .ico {
            width: 3rem;
            height: 3rem;
        }
        img {
            height: 2rem;
        }
        .mobile-menu {
            z-index: 101;
            margin-top: 4rem;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background-color: #FFFFFF;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
        }
        .menu {
            width: 60%;
            align-items: flex-end;
            height:50%;
            line-height: 100%;
        }
        .polyline {
            stroke: url(#Gradient2);
            fill: transparent;
        }
        .line{
            position: absolute;
            width: 100%;
            top:35rem;
            height: 10rem;
        }
    }
</style>
