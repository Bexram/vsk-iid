<template>
    <div id="programs" class="programs flex-column">
        <div class="card">
            <div class="card-container flex-row">
                <img :src="require('/src/assets/Intersect.png')">
                <div class="flex-column info">
                    <h3>Салон красоты</h3>
                    <span>(барбершоп, грумминг-салон)</span>
                    <router-link
                            @click="scrollToTop"
                            to="/beauty">
                        <button class="more">Подробнее</button>
                    </router-link>
                </div>
                <div class="flex-column" style="justify-content: flex-end">
                    <div class="circle flex-column"><span class="number">1</span></div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-container flex-row reverse">
                <img :src="require('/src/assets/Intersect-1.png')">
                <div class="flex-column info">
                    <h3>Магазин</h3>
                    <span>(торговая точка)</span>
                    <router-link @click="scrollToTop" to="/magazine">
                        <button style="background-color: #5bd333" class="more">Подробнее</button>
                    </router-link>

                </div>
                <div class="flex-column" style="justify-content: flex-end">
                    <div style="border-color: #5bd333" class="circle reverse-number flex-column"><span
                            style="color: #5bd333" class="number">2</span></div>
                </div>
            </div>
        </div>


        <div class="card">
            <div class="card-container flex-row">
                <img :src="require('/src/assets/Intersect-2.png')">
                <div class="flex-column info">
                    <h3>Дети</h3>
                    <span>(образовательное учреждение)</span>
                    <router-link @click="scrollToTop" to="/child">
                        <button style="background-color: #02B2BA" class="more">Подробнее</button>
                    </router-link>

                </div>
                <div class="flex-column" style="justify-content: flex-end">
                    <div style="border-color: #02B2BA" class="circle flex-column"><span style="color: #02B2BA"
                                                                                        class="number">3</span></div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-container flex-row reverse">
                <img :src="require('/src/assets/Intersect-3.png')">
                <div class="flex-column info">
                    <h3>Кафе</h3>
                    <span>(ресторан)</span>
                    <router-link @click="scrollToTop" to="/caffe">
                        <button style="background-color: #000092" class="more">Подробнее</button>
                    </router-link>
                </div>
                <div class="flex-column" style="justify-content: flex-end">
                    <div style="border-color: #000092" class="circle reverse-number flex-column"><span
                            style="color: #000092" class="number">4</span></div>
                </div>
            </div>

        </div>


        <div class="card">
            <div class="card-container flex-row">
                <img :src="require('/src/assets/Intersect-4.png')">
                <div class="flex-column info">
                    <h3>Прочий бизнес</h3>
                    <button style="background-color: #0078CB;" class="more other" v-on:click="openOther">Подробнее
                    </button>
                </div>
                <div class="flex-column" style="justify-content: flex-end">
                    <div style="border-color: #0078CB" class="circle flex-column"><span style="color: #0078CB"
                                                                                        class="number">5</span></div>
                </div>
            </div>
        </div>

        <div class="container">
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
            <div class="elipce"></div>
        </div>

        <div class="container second">
            <svg class="line" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path class="polyline" style="stroke: url(#Gradient3);" d="M0,55 C 30,80, 70,10  100 65"/>
                <defs>
                    <linearGradient id="Gradient3">
                        <stop offset="0%" stop-color="#000092"/>
                        <stop offset="50%" stop-color="#000092" stop-opacity="0.21"/>
                        <stop offset="100%" stop-color="#000092"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>

    </div>
</template>

<script>

    export default {
        name: "AppPrograms",
        data() {
            return {
                beauty: false,
                shop: false,
                child: false,
                caffe: false,
            }
        },
        methods: {
            scrollToTop() {
                window.scrollTo(0, 0);
            },
            openOther() {
                window.open('https://vskcorp.ru/')
            }

        }
    }
</script>

<style scoped>

    .program-enter-active {
        transition: all 0.5s ease;
    }

    .program-leave-active {
        transition: all 0.2s ease;
    }

    .program-enter-from, .program-leave-to {
        height: 0;
    }


    .second {
        top: 240rem;
    }

    .other {
        margin-top: 3.5rem;
    }

    .circle {
        justify-content: center;
        width: 4.4rem;
        height: 4.4rem;
        border-radius: 50%;
        border: 8px solid #0078CB;
        box-sizing: border-box;
        margin-right: 2rem;
        margin-bottom: 2rem;
    }

    .reverse-number {
        margin-right: 0;
        margin-left: 2rem;
    }

    .number {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 2.2rem;
        line-height: 83.5%;
        /* or 33px */

        letter-spacing: 0.01em;

        color: #0078CB;
    }

    .more {
        border: 0;
        margin-top: 3rem;
        width: 15rem;
        height: 3.5rem;
        background: #0078CB;
        box-shadow: -4px 4px 31px rgba(90, 105, 156, 0.5);
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 83.5%;
        /* or 23px */
        border-radius: 5px 1.75rem 1.75rem 5px;
        letter-spacing: 0.01em;

        color: #FFFFFF;
    }

    .flex-column {
        align-items: center;
    }

    .info {
        padding-top: 2.1rem;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .polyline {
        stroke: url(#Gradient2);
        fill: transparent;
    }

    .line {
        width: 100%;
        height: 100%;
    }

    .container {
        z-index: -1;
        position: absolute;
        margin-left: -5%;
        width: 110%;
        height: 50rem;
    }

    .elipce {
        position: absolute;
        width: 25rem;
        height: 25rem;
        top: 20rem;
        left: -5rem;
        background: rgba(2, 178, 186, 0.34);
        filter: blur(28rem);
    }

    .card {
        margin-top: 4.1rem;
        background: #FFFFFF;
        box-shadow: 8px 8px 38px rgba(0, 120, 203, 0.2);
        border-radius: 14px;
        width: 62rem;


    }

    .card-container {
        width: 62rem;
        height: 16rem;
    }

    .programs {
        margin-top: 10.9rem;
    }

    h3 {
        margin: 0;
        font-size: 2.6rem;
        margin-bottom: 0.5rem;
    }

    .reverse {
        flex-direction: row-reverse;
    }

    @media screen and (max-width: 650px) {
        h3 {
            margin: 0;
            font-size: 0.8rem;
            margin-bottom: 0.5rem;
        }

        .programs {
            font-size: 0.5rem !important;
        }

        .card {
            margin-top: 2rem;
            width: 20rem;
        }


        .card-container {
            width: 20rem;
            height: 6rem;
        }

        .programs {
            margin-top: 3rem;
        }

        .more {

            min-width: 5rem;
            max-width: 6rem;
            height: 1.5rem;
            font-size: 0.7rem;
            margin-top: 0.5rem;
        }

        .info {
            padding-top: 1rem;
        }

        .circle {
            width: 2rem;
            height: 2rem;
            border: 4px solid #0078CB;
            margin-right: 1rem;
            margin-bottom: 1rem;
        }

        .number {
            font-size: 1rem;
        }

        .reverse-number {
            margin-left: 1rem;
            margin-bottom: 1rem;
        }

        span {
            letter-spacing: 0.01rem;
        }

        .container {
            height: 15rem;
        }

        .second {
            top: 115rem;
        }

        .elipce {
            display: none;
        }
    }
</style>
