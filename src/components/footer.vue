<template>
    <div class="footer" id="footer">
        <div class="flex-row">
            <hr style="width: 20%; height:3px; background-color: #0075ff; border: 0">
            <hr style="width: 20%; height:3px; background-color: #2fe3a3; border: 0">
            <hr style="width: 20%; height:3px; background-color: #ff3093; border: 0">
            <hr style="width: 20%; height:3px; background-color: #ffc329; border: 0">
            <hr style="width: 20%; height:3px; background-color: #23a3ff; border: 0">
        </div>
        <div class="contacts flex-column">
            <div class="flex-row icons">
                <img class="ico" :src="require('/src/assets/vk.svg')">
                <img class="ico" :src="require('/src/assets/youtube.svg')">
                <img class="ico" :src="require('/src/assets/tg.svg')">
                <img class="ico" :src="require('/src/assets/ok.svg')">
            </div>
            <div class="phone">
                8 800 201 7445
            </div>
            <div class="description">
                САО «ВСК», лицензия Банка России от 11.09.2015: СЛ №0621, СИ №0621, ОС
                №0621-03, ОС №0621-04, ОС №0621-05, ПС №0621. Подробности на vsk.ru.
            </div>
        </div>
<!--        <svg class="line" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">-->
<!--            <path id="line1" class="polyline" d="M0,100 C 40,100, 90,90  100 0"/>-->
<!--            <defs>-->
<!--                <linearGradient id="Gradient2">-->
<!--                    <stop offset="0%" stop-color="#0078CB"/>-->
<!--                    <stop offset="50%" stop-color="#0078CB" stop-opacity="0.21"/>-->
<!--                    <stop offset="100%" stop-color="#0078CB"/>-->
<!--                </linearGradient>-->
<!--            </defs>-->
<!--        </svg>-->
    </div>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style scoped>
    .description {
        font-size: 1.8rem;
        text-align: left;
        line-height: 85.5%;
        color: white;
    }
    .phone {
        font-style: normal;
        font-weight: 700;
        font-size: 4rem;
        line-height: 90%;
        /* or 56px */
        letter-spacing: 0.01em;
        color: #5BD333;
    }
    .ico {
        width: 2.5rem;
        height: 2.5rem;
    }
    .icons {
        width: 40%;
    }
    .flex-column {
        align-items: flex-start;
    }
    .contacts{
        margin-top: 1.5rem;
        width: 50%;
        margin-left: 15%;
        height: 20rem;
    }
    hr{
        margin: 0
    }
    .footer {
        margin-top: 10rem;
        height:25rem;
        width:100%;
        background-image: url('~@/assets/cir.svg');
        background-size: cover;
        background-color: #19213D;
    }
    @media screen and (max-width: 650px) {
        .footer {
            overflow-y: hidden;
            margin-top: 5rem;
            height:10rem;
        }
        .contacts{
            margin-top: 1rem;
            width: 50%;
            margin-left: 15%;
            height: 7rem;
        }
        .ico {
            width: 1rem;
            height: 1rem;
        }
        .description {
            color: #FFFFFF;
            font-size: 0.6rem;
        }

        .phone {
            font-size: 1.5rem;
        }
        .line {
            position: relative;
            width: 100%;
            height: 8rem;
            top: -6rem;
        }

    }
</style>
