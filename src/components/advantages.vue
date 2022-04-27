<template>
    <div class="advantages">
        <div class="advantage">
            <img :src="require('/src/assets/Subtract1.svg')">
            <p>Учитывает отраслевые особенности</p>
        </div>
        <div style="margin-left: 20%" class="advantage">
            <img :src="require('/src/assets/Subtract2.svg')">
            <p>Включает все необходимые риски</p>
        </div>
        <div style="margin-left: 40%" class="advantage">
            <img :src="require('/src/assets/Subtract3.svg')">
            <p>Лимиты соответствуют практике делового оборота</p>
        </div>
        <div style="margin-left: 20%" class="advantage">
            <img :src="require('/src/assets/Subtract4.svg')">
            <p>Простое оформление и оплата полиса</p>
        </div>
        <div class="advantage">
            <img :src="require('/src/assets/Subtract5.svg')">
            <p>Возможны индивидуальные настройки базовой программы</p>
        </div>
        <div class="additions">
            <div class="flex-row">
                <div class="arrows">«</div>
                <p class="addition">Наличие <strong>простого финансового инструмента для <span style="color: #5bd333">защиты</span>
                    бизнеса</strong> франчайзи
                    <span class="underline">-------------------------------</span>
                </p>
            </div>
            <div class="flex-column">
                <p class="addition"><span style="color: #0078cb; font-weight: bold;">дополнительная гарантия</span>
                    динамичного <strong>развития сети</strong>, защита от репутационных и финансовых рисков франчайзора.
                </p>
                <div class="arrows green">»</div>
            </div>
            <div class="flex-column vsk">
                <img :src="require('/src/assets/vsk-logo.svg')">
                <p class="partner">Партнер программы страхования</p>
            </div>
        </div>
        <div class="elipce"></div>
        <div class="elipce2"></div>
        <div class="circle c1"></div>
        <div class="circle c2"></div>
        <div class="circle c3"></div>
        <div class="circle c4"></div>
        <div class="circle c5"></div>
    </div>
</template>

<script>
    export default {
        name: "AppAdvantages"
    }
</script>

<style scoped>
    .partner {
        font-weight: bold;
        color: #006fba;
        max-width: 80%;
        margin-left: 20%;
    }


    .underline {
        color: #0078CB;
        font-size: 2rem;
        letter-spacing: -4px;
    }

    .flex-column {
        margin-left: 40%;
        max-width: 60%;
        justify-content: flex-start !important;
    }
    .vsk {
        margin-left: 7%;
        max-width: 50%;
    }
    .flex-row {
        max-width: 80%;
    }

    .arrows {
        font-style: normal;
        font-weight: 700;
        font-size: 18rem;
        line-height: 83.5%;
        /* or 251px */
        color: transparent;
        -webkit-text-stroke: 1px #0078CB;
        letter-spacing: 0.01em;
        margin-top: -1.2rem;
    }

    .green {
        -webkit-text-stroke: 1px #5BD333;
        text-align: right;
        margin-top: -8rem;
    }

    .addition {
        font-style: normal;
        font-weight: 400;
        font-size: 3rem;
        line-height: 98.5%;
    }

    .additions {
        margin-top: 10rem;
    }

    .advantages {
        margin-top: 7rem;
        margin-left: 7%;
    }

    .advantage {
        width: 50%;
        display: flex;
        flex-direction: row;
    }

    p {
        z-index: 2;
        text-align: left;
        margin-left: 2rem;
        font-style: normal;
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 98.5%;
        letter-spacing: 0.01em;
        color: #354164;
    }

    .elipce {
        position: absolute;
        width: 35rem;
        height: 35rem;
        top: 80rem;
        left: -20rem;
        background: rgba(2, 178, 186, 0.34);
        filter: blur(17rem);
    }

    .elipce2 {
        z-index: -1;
        position: absolute;
        width: 39rem;
        height: 39rem;
        top: 130rem;
        left: 78%;
        background: rgba(91, 211, 51, 0.34);
        filter: blur(17rem);
    }

    .circle {
        z-index: 1;
    }

    .c1 {
        position: absolute;
        width: 23px;
        height: 23px;
        top: 70rem;
        left: 50%;
        background: #357AFF;
        border-radius: 50%;
    }

    .c2 {
        position: absolute;
        width: 15.3px;
        height: 15.3px;
        top: 90rem;
        left: 30%;
        background: #56CB77;
        border-radius: 50%;
    }

    .c3 {
        position: absolute;
        width: 27.19px;
        height: 27.19px;
        top: 91rem;
        left: 70%;
        background: #FB77B6;
        border-radius: 50%;
    }

    .c4 {
        position: absolute;
        width: 22.1px;
        height: 22.1px;
        top: 110rem;
        left: 40%;
        background: #FFB74B;
        border-radius: 50%;
    }

    .c5 {
        position: absolute;
        width: 22.1px;
        height: 22.1px;
        top: 118rem;
        left: 10%;
        background: #FB7777;
        border-radius: 50%;
    }
</style>
