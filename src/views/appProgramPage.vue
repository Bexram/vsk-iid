<template>
    <div class="program-wrapper">
        <slot name="header">
            <div class="card-container flex-row">
                <img :src="require('/src/assets/Intersect.png')">

                <div class="flex-column info">
                    <h3>Салон красоты</h3>
                    <span>(барбершоп, грумминг-салон)</span>
                    <router-link to="/">
                        <button class="more">Вернуться на главную</button>
                    </router-link>
                </div>
                <div class="flex-column" style="justify-content: flex-end">
                    <div class="header__circle header__flex-column"><span class="number">1</span></div>
                </div>
            </div>
        </slot>
        <div class="title">
            <slot name="title">
                Специальная программа страхования салонов красоты, барбер-шопов и грумминг-салонов, развивающихся по
                системе франчайзинга.
            </slot>
        </div>
        <div class="flex-row">
            <div class="summary flex-column">
                <div class="title" style="color:#0078CB; margin-bottom:0.5rem">Общая сумма покрытия:</div>
                <slot name="summary">
                    <span><strong>5,95 млн </strong> рублей по имущественным рискам.</span>
                    <span><strong>1,5 млн </strong> рублей по ответственности перед третьими лицами.</span>
                </slot>
            </div>

            <div class="summary flex-column">
                <div class="title" style="color:#0078CB; margin-bottom:0.5rem">Стоимость полиса:</div>
                <slot name="price">
                    <span><strong>35 000,00  </strong> рублей в год.</span>
                </slot>
            </div>
        </div>
        <div class="flex-row rainbow">
            <hr style="width: 20%; height:3px; background-color: #0075ff; border: 0">
            <hr style="width: 20%; height:3px; background-color: #2fe3a3; border: 0">
            <hr style="width: 20%; height:3px; background-color: #ff3093; border: 0">
            <hr style="width: 20%; height:3px; background-color: #ffc329; border: 0">
            <hr style="width: 20%; height:3px; background-color: #23a3ff; border: 0">
        </div>
        <div class="what-save">
            <div class="list-title flex-row">
                <div class="circle" style="background-color:#FB7777"></div>
                <h2>Что будет застраховано?</h2>
            </div>
            <div class="list">
                <ul>
                    <slot name="save">
                        <li><span>Имущество салона (мебель, оборудование, расходные материалы (косметика), расходы на ремонт и
                            отделку).</span>
                        </li>
                        <li><span>Ваша ответственность за причинение ущерба третьим лицам.</span></li>
                    </slot>
                </ul>
            </div>

        </div>
        <div class="what-save risks__container">
            <div class="list-title flex-row">
                <div class="circle" style="background-color:#FFB74B"></div>
                <h2>Какие риски покрывает полис?</h2>
            </div>
            <div class="list">
                <ul>
                    <slot name="risks">
                        <li><span>Пожар, удар молнии, взрыв</span></li>
                        <li><span>Действие воды (аварии водопроводных, канализационных, отопительных, противопожарных систем)</span>
                        </li>
                        <li><span>Залив – Проникновение воды из соседних (чужих) помещений)</span></li>
                        <li><span>Противоправные действия третьих лиц ДТЛ (кража с незаконным проникновением, грабеж, разбой; уничтожение или повреждение застрахованного имущества)</span>
                        </li>
                        <li><span>Падение летательных аппаратов</span></li>
                        <li><span>Стихийные бедствия</span></li>
                        <li><span>Перерыв в работе салона в результате одного из указанных событий</span></li>
                        <li><span>Ответственность за вред жизни, здоровью или имуществу, причиненные в результате работы салона</span>
                        </li>
                        <li><span>Бой оконных стекол, зеркал, витрин</span>
                        </li>
                        <li><span>Перерыв в работе салона в результате одного из указанных событий</span>
                        </li>
                        <li><span>Гражданская ответственность за причинение вреда жизни, здоровью, третьих лиц </span>
                        </li>

                    </slot>
                </ul>
            </div>
        </div>
        <div class="what-save ">
            <div class="list-title flex-row">
                <div class="circle" style="background-color:#0078CB"></div>
                <h2>Как получить и оплатить полис?</h2>
            </div>
            <div class="pay-wrapper flex-column">
                <span>Присоединиться к программе можно, оплатив счет и получив электронный полис на e-mail.</span>
                <div class="pay-description flex-row" data-app>
                    <span class="description">
                        Дата начала страхового покрытия – {{new Date().toLocaleDateString()}}
                    </span>
                    <button class="pay" v-on:click="wanna_open_form=true">Оформить договор</button>
                    <v-dialog
                            v-model="wanna_open_form"
                            fullscreen>
                        <form-application :program=program @hide="wanna_open_form=false"></form-application>
                    </v-dialog>
                </div>
            </div>

        </div>

        <div class="what-save risks__container">
            <div class="list-title flex-row">
                <div class="circle" style="background-color:#5BD333"></div>
                <h2>Как заявить убыток?</h2>
            </div>
            <div class="pay-wrapper flex-column">
                <span>Если у вас произошло событие, которое может покрывать полис, сразу же напишите персональному менеджеру.</span>
                <div class="pay-description flex-row second">
                    <button class="pay" style="background-color:#000092;">Чат с менеджером</button>
                </div>
                <span class="pay-description mar-top">Поможем составить необходимые документы и проконтролируем процедуру получение страховой выплаты.</span>
                <span class="pay-description mar-top"><strong style="color:#02B2BA">Присоединяйтесь к нам</strong> для оперативной связи с персональным менеджером по программе страхования франчайзи.</span>
                <div class="pay-description flex-row second">
                    <button class="pay" style="background-color:#02B2BA;">Перейти по ссылке</button>
                </div>
                <!--                <div class="phone">8 800 201 7445</div>-->
            </div>
        </div>
        <div class="flex-row rainbow">
            <hr style="width: 20%; height:3px; background-color: #0075ff; border: 0">
            <hr style="width: 20%; height:3px; background-color: #2fe3a3; border: 0">
            <hr style="width: 20%; height:3px; background-color: #ff3093; border: 0">
            <hr style="width: 20%; height:3px; background-color: #ffc329; border: 0">
            <hr style="width: 20%; height:3px; background-color: #23a3ff; border: 0">
        </div>
        <div class="message">
            <span>Обязательно сообщите всем сотрудникам салона о наличии страхового полиса и получите наклейку <strong
                    style="text-transform: uppercase">#<strong style="color:#0078CB;">застраховано_iid</strong></strong></span>
        </div>
    </div>
</template>

<script>
    import FormApplication from "@/components/form";

    export default {
        name: "AppProgram",
        components: {FormApplication},
        props: {
            program: null,
        },
        data() {
            return {
                wanna_open_form: false,
            }
        }
    }
</script>

<style>
    h3 {
        margin: 0;
        font-size: 2.6rem;
        margin-bottom: 0.5rem;
        text-align: left;
    }

    .reverse {
        flex-direction: row-reverse;
    }

    .header__circle {
        justify-content: center;
        width: 4.4rem;
        height: 4.4rem;
        border-radius: 50%;
        background-color: #0078CB;
        box-sizing: border-box;
    }

    .number {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        font-size: 2.2rem;
        line-height: 83.5%;
        /* or 33px */

        letter-spacing: 0.01em;

        color: white;
    }

    .header__flex-column {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card-container {
        width: 100%;
        height: 16rem;
        margin-bottom: 3rem;
        justify-content: space-between;
    }

    .more {
        border: 0;
        width: 25rem;
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

    .info {
        justify-content: space-between;
        align-items: flex-start;
    }


    .risks__container {
        border-radius: 1rem;
        border: 3px solid #D3D3D3;
        margin-left: -4%;
        padding-left: 4%;
        margin-right: -4%;
        padding-right: 4%;
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    .message {
        margin-top: 3rem;
        max-width: 80%;
        text-align: left;
        line-height: 85.5%;
        letter-spacing: 0.01em;
        font-size: 4rem !important;

    }

    .rainbow {
        width: 100%;
        margin-top: 3rem;
    }

    .program-wrapper {
        margin: auto;
        margin-top: 4rem;
        width: 90%;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 2rem;
    }

    .title {
        font-style: normal;
        font-weight: 700;
        font-size: 2rem;
        line-height: 85.5%;
        letter-spacing: 0.01em;
        color: #1B1B1B;
        text-align: left;
    }

    .summary {
        width: 100%;
        margin-top: 3rem;
        align-items: flex-start;
        font-size: 2rem;
        text-align: left;
        gap: 1rem;
        justify-content: flex-start;
    }

    span {
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        color: black;
        text-align: left;
    }

    .what-save {
        margin-top: 4rem;
    }

    .circle {
        border-radius: 50%;
        height: 1.8rem;
        width: 1.8rem;
        margin-right: 5rem;
    }

    .list-title {
        justify-content: flex-start;
    }


    h2 {
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 85.5%;
        /* or 32px */
        text-align: left;
        text-transform: uppercase;
        margin: 0;
        color: #1B1B1B;

    }

    ul {
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 85.5%;
        letter-spacing: 0.01em;
        color: #1B1B1B;
        text-align: left;
    }

    li {
        color: #0078CB;
        margin-bottom: 1rem;
    }

    .pay-wrapper {
        margin-top: 2rem;
        margin-left: 2rem;
    }

    .pay-description {
        margin-top: 1rem;
    }

    .description {
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 85.5%;
        /* or 17px */

        letter-spacing: 0.01em;

        color: #959595;
    }

    .pay {
        border: 0;
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


    .mar-top {
        margin-top: 3.5rem;
    }

    .second {
        justify-content: flex-end;
    }

    .phone {
        margin-top: 3rem;
        font-style: normal;
        font-weight: 700;
        font-size: 4rem;
        line-height: 85.5%;
        letter-spacing: 0.01em;
        color: #5BD333;
        text-align: left;
    }


    @media screen and (max-width: 650px) {
        h3 {
            margin: 0;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            text-align: left;
        }

        .header__circle {
            justify-content: center;
            width: 2.2rem;
            height: 2.2rem;
            border-radius: 50%;
            background-color: #0078CB;
            box-sizing: border-box;
        }

        .number {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 900;
            font-size: 1.1rem;
            line-height: 83.5%;
            /* or 33px */

            letter-spacing: 0.01em;

            color: white;
        }

        .card-container {
            width: 100%;
            height: 7rem;
            margin-bottom: 1rem;
            gap: 0.5rem;
        }

        .more {
            border: 0;
            width: 10rem;
            height: 1.75rem;
            background: #0078CB;
            box-shadow: -4px 4px 31px rgba(90, 105, 156, 0.5);
            font-weight: 400;
            font-size: 0.75rem;
            line-height: 83.5%;
            /* or 23px */
            border-radius: 5px 1.75rem 1.75rem 5px;
            letter-spacing: 0.01em;

            color: #FFFFFF;
        }

        .info {
            justify-content: space-between;
            gap: 0.3rem;
            align-items: flex-start;
        }

        .program-wrapper {
            margin-left: -2.5%;
            width: 105%;
            margin-top: 1rem;
        }

        .message {
            margin-top: 1rem;
            font-size: 1.5rem !important;
        }

        .rainbow {
            margin-top: 1rem;
        }

        .title {
            font-size: 1.2rem;
        }

        .summary {
            margin-top: 1rem;
            font-size: 0.8rem;
        }

        span {
            font-size: 1rem;
            line-height: 1rem;
        }

        .what-save {
            margin-top: 2.3rem;
        }

        .circle {
            height: 0.6rem;
            width: 0.6rem;
            margin-right: 1rem;
        }


        h2 {
            font-size: 0.9rem;
        }

        ul {
            font-size: 0.8rem;
            padding-left: 1rem;

        }

        li {
            margin-bottom: 0.5rem;
        }

        .pay-wrapper {
            margin-top: 0.63rem;
            margin-left: 0.63rem;
        }

        .pay-description {
            margin-top: 0.3rem;
        }

        .description {
            font-size: 0.6rem;
        }

        .pay {

            width: 8rem;
            height: 1.6rem;
            font-size: 0.7rem;
            line-height: 83.5%;
        }

        .phone {
            margin-top: 1rem;
            font-size: 1.5rem;

        }

        .mar-top {
            margin-top: 1.13rem;
        }
    }
</style>
