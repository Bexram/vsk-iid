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
            <p>Лимиты соответствуют практике делового оборота</p>
        </div>
        <div class="advantage">
            <img :src="require('/src/assets/Subtract5.svg')">
            <p>Возможны индивидуальные настройки базовой программы</p>
        </div>
        <div class="elipce"></div>
    </div>
</template>

<script>
    export default {
        name: "AppAdvantages"
    }
</script>

<style scoped>
    .advantages{
        margin-top: 5rem;
        margin-left: 7%;
    }
    .advantage{
        width: 50%;
        display: flex;
        flex-direction: row;
    }
    p {
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
        top: 140%;
        left: -20%;
        background: rgba(2, 178, 186, 0.34);
        filter: blur(20rem);
    }
</style>
