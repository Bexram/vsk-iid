<template>
    <div class="programs flex-column">
        <div class="card flex-row">
            <img :src="require('/src/assets/Intersect.png')">
            <div class="flex-column info">
                <h3>Салон красоты</h3>
                <span>(барбершоп, грумминг-салон)</span>
                <button class="more">Подробнее</button>
            </div>
            <div class="flex-column" style="justify-content: flex-end">
                <div class="circle flex-column"><span class="number">1</span></div>
            </div>
        </div>

        <div class="card flex-row reverse">
            <img :src="require('/src/assets/Intersect-1.png')">
            <div class="flex-column info">
                <h3>Магазин</h3>
                <span>(торговая точка)</span>
                <button style="background-color: #5bd333" class="more">Подробнее</button>
            </div>
            <div class="flex-column" style="justify-content: flex-end">
                <div style="border-color: #5bd333" class="circle reverse flex-column"><span style="color: #5bd333" class="number">2</span></div>
            </div>
        </div>

        <div class="card flex-row">
            <img :src="require('/src/assets/Intersect-2.png')">
            <div class="flex-column info">
                <h3>Магазин</h3>
                <span>(торговая точка)</span>
                <button style="background-color: #5bd333" class="more">Подробнее</button>
            </div>
            <div class="flex-column" style="justify-content: flex-end">
                <div style="border-color: #5bd333" class="circle reverse flex-column"><span style="color: #5bd333" class="number">2</span></div>
            </div>
        </div>

        <div class="card flex-row reverse">
            <img :src="require('/src/assets/Intersect-3.png')">
            <div class="flex-column info">
                <h3>Магазин</h3>
                <span>(торговая точка)</span>
                <button style="background-color: #5bd333" class="more">Подробнее</button>
            </div>
            <div class="flex-column" style="justify-content: flex-end">
                <div style="border-color: #5bd333" class="circle reverse flex-column"><span style="color: #5bd333" class="number">2</span></div>
            </div>
        </div>

        <div class="card flex-row reverse">
            <img :src="require('/src/assets/Intersect-3.png')">
            <div class="flex-column info">
                <h3>Магазин</h3>
                <span>(торговая точка)</span>
                <button style="background-color: #5bd333" class="more">Подробнее</button>
            </div>
            <div class="flex-column" style="justify-content: flex-end">
                <div style="border-color: #5bd333" class="circle reverse flex-column"><span style="color: #5bd333" class="number">2</span></div>
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

    </div>
</template>

<script>
    export default {
        name: "AppPrograms"
    }
</script>

<style scoped>
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
    .reverse {
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
        top: 100rem;
        left: 0rem;
        background: rgba(2, 178, 186, 0.34);
        filter: blur(28rem);
    }

    .card {
        margin-top: 4.1rem;
        width: 62rem;
        height: 16rem;
        background: #FFFFFF;
        box-shadow: 8px 8px 38px rgba(0, 120, 203, 0.2);
        border-radius: 14px;
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
</style>
