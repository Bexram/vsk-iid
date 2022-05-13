<template>
    <div class="program-wrapper">
        <div class="title">
            <slot name="title">
                Специальная программа страхования салонов красоты, барбер-шопов и грумминг-салонов, развивающихся по
                системе франчайзинга.
            </slot>
        </div>
        <div class="summary flex-column">
            <slot name="summary">
                <div class="title" style="color:#0078CB; margin-bottom:0.5rem">Общая сумма покрытия:</div>
                <span><strong>5 950 000,00 </strong> рублей по имущественным рискам.</span>
                <span><strong>1 500 000,00 </strong> рублей по ответственности перед третьими лицами.</span>
            </slot>
        </div>

        <div class="summary flex-column">
            <slot name="price">
                <div class="title" style="color:#0078CB; margin-bottom:0.5rem">Стоимость полиса:</div>
                <span><strong>28 000,00  </strong> рублей в год.</span>
            </slot>
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
        <div class="what-save">
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
                    </slot>
                </ul>
            </div>
        </div>
        <div class="what-save">
            <div class="list-title flex-row">
                <div class="circle" style="background-color:#0078CB"></div>
                <h2>Как получить и оплатить полис?</h2>
            </div>
            <div class="pay-wrapper flex-column">
                <span>Присоединиться к программе можно, оплатив счет и получив электронный полис на e-mail.</span>
                <div class="pay-description flex-row">
                    <span class="description">
                        Дата начала страхового покрытия – {{new Date().toLocaleDateString()}}
                    </span>
                    <button class="pay">Оформить договор</button>
                </div>
            </div>

        </div>

        <div class="what-save">
            <div class="list-title flex-row">
                <div class="circle" style="background-color:#5BD333"></div>
                <h2>Как заявить убыток?</h2>
            </div>
            <div class="pay-wrapper flex-column">
                <span>Если у вас произошло событие, которое может покрывать полис, сразу же напишите персональному менеджеру.</span>
                <div class="pay-description flex-row second">
                    <button class="pay" style="background-color:#000092;">Чат с менеджером</button>
                </div>
                <span class="pay-description" style="margin-top:3rem;">Поможем составить необходимые документы и проконтролируем процедуру получение страховой выплаты.</span>
                <span class="pay-description" style="margin-top:4rem;"><strong style="color:#02B2BA">Присоединяйтесь к нам</strong> для оперативной связи с персональным менеджером по программе страхования франчайзи.</span>
                <div class="pay-description flex-row second">
                    <button class="pay" style="background-color:#02B2BA;">Перейти по ссылке</button>
                </div>
                <div class="phone">8 800 201 7445</div>
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
            <span>Обязательно сообщите всем сотрудникам салона о наличии страхового полиса и получите наклейку <strong style="text-transform: uppercase">#<strong style="color:#0078CB;">застраховано_iid</strong></strong></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppProgram"
    }
</script>

<style scoped>
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
        margin-left: -6%;
        margin-top:3rem;
    }
    .program-wrapper {
        width: 62rem;
        border-radius: 14px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 6%;
        padding-top: 2rem;
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
        width: 70%;
    }

    .summary {
        width: 100%;
        margin-top: 3rem;
        align-items: flex-start;
        font-size: 2rem;
    }

    span {
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 85.5%;
        letter-spacing: 0.01em;
        color: black;
        text-align: left;
    }

    .what-save {
        margin-top: 8rem;
        max-width: 94%;
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
        max-width: 80%;
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
    .second {
        justify-content: flex-end;
    }
    .phone {
        margin-top:3rem;
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 85.5%;
        letter-spacing: 0.01em;
        color: #5BD333;
        text-align: left;
    }
    @media screen and (max-width: 650px) {
        .program-wrapper {
            width: 20rem;
            height: 20rem;
        }

    }
</style>
