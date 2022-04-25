<template>
    <div>
        <div class="guys">
            <img :src="require('/src/assets/Group 206.png')">
            <div class="elipce"></div>
        </div>
        <div class="introduction flex-column">
            <h1>
                Программа страхования
            </h1>
            <section class="description">
                <p>
                    для компаний, развивающихся по системе франчайзинга, создана профессионалами страхового рынка на основе опыта работы с экспертами и лидерами рынка франчайзинга.
                </p>
            </section>
            <button class="hero-btn">Оформить заявку</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppHero"
    }
</script>

<style scoped>
    .guys > img {
        width: 100%;
    }
    .introduction {
        width: 50%;
        margin-left: 10%;
        margin-top: 4rem;
    }
    .description {
        margin-top: 1rem;
        text-align: left;
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 1.5rem;
        letter-spacing: 0.01em;
    }

    .elipce {
        position: absolute;
        width: 35rem;
        height: 35rem;
        top: 40%;
        left: 90%;
        background: rgba(0, 50, 164, 0.55);
        filter: blur(20rem);
    }
    .hero-btn {
        background: linear-gradient(48.56deg, #253353 -61.49%, #6979B2 100%);
        box-shadow: 0px 26px 31px -25px #5A699C;
        border-radius: 125px;
        width: 422.71px;
        height: 73.24px;
        font-weight: 700;
        font-size: 2rem;
        line-height: 115.5%;
        /* or 37px */


        color: #FFFFFF;
    }
    h1 {
        text-align: left;
        font-style: normal;
        font-weight: 700;
        font-size: 5rem;
        line-height: 83.5%;
        letter-spacing: 0.01em;
        text-transform: uppercase;
        margin: 0;
    }
</style>
