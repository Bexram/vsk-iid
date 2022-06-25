<template>
    <div>
        <div class="guys">
            <img :src="require('/src/assets/Group 206.svg')">
        </div>
        <div class="introduction flex-column">
            <h1>
                Программа страхования франчайзинга
            </h1>
            <section class="under__introduction">
                <p>
                    для компаний, развивающихся по системе франчайзинга
                </p>
            </section>
            <section class="description">

                <p>Создана профессионалами страхового рынка на основе опыта работы с экспертами и лидерами рынка
                    франчайзинга.
                </p>
            </section>

        </div>
        <div class="flex-row">
            <a href="#programs" v-smooth-scroll>
                <button class="hero-btn">Купить полис</button>
            </a>
        </div>
        <div class="elipce">
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppHero"
    }
</script>

<style scoped>
    .flex-row {
        margin-top: 2rem;
        justify-content: center;
    }

    .guys > img {
        width: 98%;
        margin-left: 1%;
    }

    .introduction {
        width: 80%;
        margin-top: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 94.5%;
        letter-spacing: 0.01em;
        color: #3F3F3F;
    }

    .under__introduction {
        font-family: 'FreeSet-Bold', arial;
        width: 70%;
        font-weight: 500;
        margin-top: 2rem;
        font-size: 2.5rem;
        line-height: 94.5%;
        /* or 33px */

        letter-spacing: 0.01em;
        text-transform: uppercase;
    }

    .description {
        width: 50%;
        margin-top: 2rem;
        text-align: left;
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 1.5rem;
        letter-spacing: 0.01em;
    }

    .elipce {
        z-index: 100;
        position: absolute;
        top: 40%;
        width: 100%;
        height: 50rem;
        background-size: contain;
        background-image: url("/src/assets/Ellipse 23.svg");
        background-position: bottom right;
        /*left: 90%;*/
        /*background: rgba(0, 50, 164, 0.55);*/
    }

    .hero-btn {
        border: 0;
        background: linear-gradient(48.56deg, #253353 -61.49%, #6979B2 100%);
        box-shadow: 0px 26px 31px -25px #5A699C;
        border-radius: 125px;
        width: 23rem;
        height: 4rem;
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 115.5%;
        margin-top: 1rem;
        /* or 37px */


        color: #FFFFFF;
    }

    h1 {
        font-family: 'FreeSet-Bold', arial;
        text-align: left;
        font-weight: 900;
        font-size: 5rem;
        line-height: 93%;
        letter-spacing: 0.01em;
        text-transform: uppercase;
        margin: 0;
    }

    @media screen and (max-width: 650px) {
        h1 {
            font-size: 1.5rem;
        }

        p {
            font-size: 0.8rem;
            letter-spacing: 0;
            line-height: 110%;
        }

        .introduction {
            margin-left: 10px;
            width: 90%;
        }

        .description {
            width: 70%;
        }

        .hero-btn {
            height: 3rem;
            width: 14rem;
            font-size: 1rem;
        }

        .elipce {
            top: 7rem;
            width: 100%;
            height: 30rem;
        }


    }
</style>
